using DigitalSignageApi.Models;
using DigitalSignageApi.Repository;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace DigitalSignageApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SeriesController : ApiController
    {
        DigitalSignageRepository repo = new DigitalSignageRepository();
        // GET: api/Series

        
        public async Task<IEnumerable<Series>> GetAllSeries()
        {
            var seriesList = await repo.GetAllSeries();
            foreach(var series in seriesList)
            {
                series.SlideList = await repo.GetSlidesBySeriesId(series.SeriesId);
                //foreach(var slide in series.SlideList)
                //{
                //    slide.SlideContentList = await repo.GetSlideContentsBySlideId(slide.SlideId);
                //}
            }

            return seriesList;
        }

        // GET: api/Series/5
        public async Task<Series> GetSeries(long seriesId)
        {
            var series = await repo.GetSeriesBySeriesId(seriesId);
            series.SlideList = await repo.GetSlidesBySeriesId(series.SeriesId);
            foreach (var slide in series.SlideList)
            {
                slide.SlideContentList = await repo.GetSlideContentsBySlideId(slide.SlideId);
            }
            return series;
        }

        // POST: api/Series
        [HttpPost]
        public async Task Post([FromBody]Series series)
        {
            
            var seriesId = await repo.AddNewSeries(series);
            foreach(var slide in series.SlideList)
            {
                slide.SeriesId = seriesId;
                var slideId = await repo.AddNewSlide(slide);
                foreach (var slideContent in slide.SlideContentList)
                    await repo.AddNewSlideContent(slide.SlideContentList, slideId);
            } 
        }

        // PUT: api/Series/5
        public void Put(int id, [FromBody]Series series)
        {

        }

        // DELETE: api/Series/5
        public void Delete(int id)
        {

        }
        internal static class ViewHelpers
        {
            public static JsonSerializerSettings CamelCase
            {
                get
                {
                    return new JsonSerializerSettings
                    {
                        ContractResolver = new CamelCasePropertyNamesContractResolver()
                    };
                }
            }
        }
    }
}
