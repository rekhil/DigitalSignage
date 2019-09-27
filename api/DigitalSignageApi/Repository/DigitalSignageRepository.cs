using DigitalSignageApi.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace DigitalSignageApi.Repository
{
    public class DigitalSignageRepository
    {
        private readonly string connectionString = "Server=INPCD0228\\SQLEXPRESS;DataBase=DeltaxMovies;Integrated Security = SSPI;MultipleActiveResultSets=true";

        public List<Slide> GetAllSlides()
        {
            List<Slide> Slides = new List<Slide>();
            using (var conn = new SqlConnection(connectionString))
            using (var command = new SqlCommand("pr_GetAllSlides", conn)
            {
                CommandType = CommandType.StoredProcedure
            })
            {
                conn.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    var item = new Slide();
                    item.Duration = (Int32)reader["Duration"];
                    item.SlideId = (Int32)reader["SlideId"];
                    item.TemplateId = (Int32)reader["TemplateId"];
                    Slides.Add(item);
                }
                reader.Close();
            }

            return Slides;
        }
    }
}