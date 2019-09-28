import { Component, Inject, Input, EventEmitter, Output } from '@angular/core';
import { Series } from '../shared/model';

@Component({
    selector: 'app-preview-dialog',
    templateUrl: 'preview-dialog.component.html',
    styleUrls: ['preview-dialog.component.scss'],
})
export class PreviewDialogComponent {
    @Input() series: Series;
    @Output() closePreviewEmitter: EventEmitter<any>;

    constructor() {
        this.closePreviewEmitter = new EventEmitter<any>();
    }

    onClose(): void {
        this.closePreviewEmitter.emit();
    }
}