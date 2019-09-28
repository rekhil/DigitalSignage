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
                slide.SlideContentList = await repo.GetSlideContentsBySlideId(slide.SlideId);
            }
            return slides;
        }

        // GET: api/Slide/5
        public async Task<Slide> GetSlideBySlideId(int slideId)
        {
            var slide = await repo.GetSlideBySlideId(slideId);
            slide.SlideContentList = await repo.GetSlideContentsBySlideId(slide.SlideId);
            return slide;
        }

        [HttpPost]
        // POST: api/Slide
        public async Task AddSlide([FromBody]Slide slide)
        {
            var slideId = await repo.AddNewSlide(slide);
            await repo.AddNewSlideContent(slide.SlideContentList, slideId);
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
