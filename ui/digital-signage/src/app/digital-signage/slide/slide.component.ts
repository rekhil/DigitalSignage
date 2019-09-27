import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from 'src/app/digital-signage/shared/model';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
    @Input() slide: Slide;
    @Output() deleteSlideEmitter: EventEmitter<any>;

    constructor() {
        this.deleteSlideEmitter = new EventEmitter<any>();
    }

    public deleteSlide(): void {
        this.deleteSlideEmitter.emit(this.slide);
    }
}
