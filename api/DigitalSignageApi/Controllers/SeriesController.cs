using DigitalSignageApi.Models;
using DigitalSignageApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace DigitalSignageApi.Controllers
{
    public class SeriesController : ApiController
    {
        // GET: api/Series
        public IEnumerable<Series> GetAllSeries()
        {
            return new List<Series>();
        }

        // GET: api/Series/5
        public Series GetSeries(int seriesId)
        {
            return new Series();
        }

        // POST: api/Series
        [HttpPost]
        public async Task Post([FromBody]Series series)
        {
            var repo = new DigitalSignageRepository();
            await repo.AddNewSeries(series);
        }

        // PUT: api/Series/5
        public void Put(int id, [FromBody]Series series)
        {

        }

        // DELETE: api/Series/5
        public void Delete(int id)
        {

        }
    }
}
