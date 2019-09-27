﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DigitalSignageApi.Models
{
    public class Slide
    {
        public long SlideId { get; set; }
        public int Duration { get; set; }
        public int TemplateId { get; set; }
        public IEnumerable<SlideContent> SlideContents { get; set; }
    }
}