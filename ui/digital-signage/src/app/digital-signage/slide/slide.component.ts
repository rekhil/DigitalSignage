import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from 'src/app/digital-signage/shared/model';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
    @Input() slide: Slide;
    @Output() deleteSlideEmitter: EventEmitter<any>;

    public get filePath(): string {
        if (this.slide.slideContentList && this.slide.slideContentList.length > 0) {
            return this.slide.slideContentList[0].filePath
        }
        return null;
    }

    constructor() {
        this.deleteSlideEmitter = new EventEmitter<any>();
    }

    public deleteSlide(): void {
        this.deleteSlideEmitter.emit(this.slide);
    }

    public fileChanged($event) {
        if ($event.target.files && $event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (result: any) => {
                this.slide.slideContentList = [];
                this.slide.slideContentList.push({ slideContentId: null, filePath: result.target.result });
            }
            reader.readAsDataURL($event.target.files[0]);
        }
    }
}
