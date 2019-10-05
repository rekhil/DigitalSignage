using System.Collections.Generic;

namespace DigitalSignageApi.Models
{
    public class Slide
    {
        public int SlideId { get; set; }
        public int Duration { get; set; }
        public int TemplateId { get; set; }
        public long SeriesId { get; set; }
        public IEnumerable<SlideContent> SlideContentList { get; set; }
    }
}