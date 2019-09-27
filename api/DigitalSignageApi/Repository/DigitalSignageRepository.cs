using Dapper;
using DigitalSignageApi.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace DigitalSignageApi.Repository
{
    public class DigitalSignageRepository
    {
        private readonly string connectionString = "Server=digitalsignage.cqax1v047gse.ap-south-1.rds.amazonaws.com,1433;DataBase=DigitalSignage;User Id=admin;Password=team200ok;MultipleActiveResultSets=true";

        public async Task AddNewSeries(Series series)
        {
            using (var conn = new SqlConnection(connectionString))
            using (var cmd = new SqlCommand("usp_CreateSeries", conn)
            {
                CommandType = CommandType.StoredProcedure,
            })
            {
                cmd.Parameters.Add("@SeriesName", SqlDbType.VarChar).Value = series.SeriesName;
                cmd.Parameters.Add("@SeriesDescription", SqlDbType.VarChar).Value = series.SeriesDescription;
                cmd.Parameters.Add("@ResolutionX", SqlDbType.Int).Value = series.ResolutionX;
                cmd.Parameters.Add("@ResolutionY", SqlDbType.Int).Value = series.ResolutionY;
                cmd.Parameters.Add("@Orientation", SqlDbType.Int).Value = series.Orientation;
                cmd.Parameters.Add("@Category", SqlDbType.Int).Value = series.Category;
                try
                {
                    conn.Open();
                    await cmd.ExecuteNonQueryAsync();                    
                }
                catch (Exception e)
                {
                    
                }
            }
        }

        public async Task<int> AddNewSlide(Slide slide)
        {
            using (var conn = new SqlConnection(connectionString))
            using (var cmd = new SqlCommand("usp_CreateSlide", conn)
            {
                CommandType = CommandType.StoredProcedure,
            })
            {
                cmd.Parameters.Add("@Duration", SqlDbType.Int).Value = slide.Duration;
                cmd.Parameters.Add("@TemplateId", SqlDbType.Int).Value = slide.TemplateId;
                cmd.Parameters.Add("@SeriesId", SqlDbType.BigInt).Value = slide.SeriesId;
                cmd.Parameters.Add("@SlideId", SqlDbType.Int).Direction = ParameterDirection.Output;
                try
                {
                    conn.Open();
                    await cmd.ExecuteNonQueryAsync();
                    return Convert.ToInt32(cmd.Parameters["@SlideId"].Value);
                }
                catch (Exception e)
                {
                    return 0;
                }
            }
            
        }

        public async Task AddNewSlideContent(IEnumerable<SlideContent> slideContents, int slideId)
        {
            foreach (var slideContent in slideContents)
            {
                using (var conn = new SqlConnection(connectionString))
                using (var cmd = new SqlCommand("usp_CreateSlideContent", conn)
                {
                    CommandType = CommandType.StoredProcedure,
                })
                {
                    cmd.Parameters.Add("@FilePath", SqlDbType.VarChar).Value = slideContent.FilePath;
                    cmd.Parameters.Add("@SlideId", SqlDbType.Int).Value = slideId;
                    try
                    {
                        conn.Open();
                        await cmd.ExecuteNonQueryAsync();
                    }
                    catch (Exception e)
                    {

                    }
                }
            }

        }
        public async Task<IEnumerable<Slide>> GetAllSlides()
        {
            List<Slide> Slides = new List<Slide>();
            using (var conn = new SqlConnection(connectionString))
            using (var command = new SqlCommand("pr_GetAllSlides", conn)
            {
                CommandType = CommandType.StoredProcedure
            })
            {
                conn.Open();
                SqlDataReader reader = await command.ExecuteReaderAsync();
                while (reader.Read())
                {
                    var item = new Slide();
                    item.Duration = (Int32)reader["Duration"];
                    item.SlideId = (Int32)reader["SlideId"];
                    item.TemplateId = (Int32)reader["TemplateId"];
                    item.SeriesId = (Int64)reader["SeriesId"];
                    Slides.Add(item);
                }
                reader.Close();
            }

            return Slides;
        }

        public async Task<IEnumerable<SlideContent>> GetSlideContentsBySlideId(int slideId)
        {
            List<SlideContent> SlideContents = new List<SlideContent>();
            using (var conn = new SqlConnection(connectionString))
            using (var command = new SqlCommand("usp_GetSlideContentBySlideId", conn)
            {
                CommandType = CommandType.StoredProcedure
            })
            {
                command.Parameters.Add("@SlideId", SqlDbType.Int).Value = slideId;
                conn.Open();
                SqlDataReader reader = await command.ExecuteReaderAsync();
                while (reader.Read())
                {
                    var item = new SlideContent();
                    item.FilePath = (string)reader["FilePath"];
                    item.SlideId = (Int32)reader["SlideId"];
                    item.SlideContentId = (Int64)reader["SlideContentId"];
                    SlideContents.Add(item);
                }
                reader.Close();
            }

            return SlideContents;
        }

        public async Task<Slide> GetSlideBySlideId(int slideId)
        {
            var slide = new Slide();
            using (var conn = new SqlConnection(connectionString))
            {
                slide = (await conn.QueryAsync<Slide>("usp_GetSlideContentBySlideId",new { SlideId = slideId}, commandType: CommandType.StoredProcedure)).FirstOrDefault();
            }

            return slide;
        }

    }
}