export class Series {
    seriesId: number;
    seriesName: string;
    seriesDescription: string;
    resolutionX: number;
    resolutionY: number;
    orientation: number;
    category: number;
    slideList: Slide[];
    duration: number;
}

export class Slide {
    slideId: number;
    templateId: number;
    slideContentList: SlideContent[];
}

export class SlideContent {
    slideContentId: number;
    filePath: string;
}