using DigitalSignageApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DigitalSignageApi.Controllers
{
    public class SlideController : ApiController
    {
        // GET: api/Slide
        public IEnumerable<Slide> GetAllSlides()
        {
            return new List<Slide>();
        }

        // GET: api/Slide/5
        public Slide Get(int slideId)
        {
            return new Slide();
        }

        // POST: api/Slide
        public void Post([FromBody]Slide slide)
        {

        }

        // PUT: api/Slide/5
        public void Put(int id, [FromBody]Slide slide)
        {

        }

        // DELETE: api/Slide/5
        public void Delete(int id)
        {

        }
    }
}
