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
    public class SlideController : ApiController
    {
        DigitalSignageRepository repo = new DigitalSignageRepository();
        // GET: api/Slide
        public async Task<IEnumerable<Slide>> GetAllSlides()
        {
            var slides = await repo.GetAllSlides();
            foreach(var slide in slides)
            {
                slide.SlideContents = await repo.GetSlideContentsBySlideId(slide.SlideId);
            }
            return slides;
        }

        // GET: api/Slide/5
        public Slide Get(int slideId)
        {
            return new Slide();
        }

        [HttpPost]
        // POST: api/Slide
        public async Task AddSlide([FromBody]Slide slide)
        {
            var slideId = await repo.AddNewSlide(slide);
            await repo.AddNewSlideContent(slide.SlideContents, slideId);
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
