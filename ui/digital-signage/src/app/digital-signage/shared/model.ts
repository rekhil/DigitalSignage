export class Series {
    seriesId: number;
    seriesName: string;
    seriesDescription: string;
    // resolutionX: number;
    // resolutionY: number;
    orientation: number;
    category: number;
    slideList: Slide[];
}

export class Slide {
    slideId: number;
    duration: number;
    templateId: number;
    filePath: string;
    slideContentList: SlideContent[];
}

export class SlideContent {
    slideContentId: number;
    filePath: string;
}