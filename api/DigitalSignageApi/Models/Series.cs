using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DigitalSignageApi.Models
{
    public class Series
    {
        public IEnumerable<Slide> SlideList { get; set; }
        public string SeriesName { get; set; }
        public long SeriesId { get; set; }
        public string SeriesDescription { get; set; }
        public int ResolutionX { get; set; }
        public int ResolutionY { get; set; }
        public string Orientation { get; set; }
        public Schedule Scheduling { get; set; }
        public Location Location { get; set; }
        public string Category { get; set; }
    }
}