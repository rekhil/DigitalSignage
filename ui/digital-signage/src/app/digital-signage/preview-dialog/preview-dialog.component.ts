import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Series } from '../shared/model';

@Component({
    selector: 'app-preview-dialog-example',
    templateUrl: 'preview-dialog.component.html',
    styleUrls: ['preview-dialog.component.scss'],
})
export class PreviewDialog {
    constructor(
        public dialogRef: MatDialogRef<PreviewDialog>,
        @Inject(MAT_DIALOG_DATA) public data: Series) { }

    onClose(): void {
        this.dialogRef.close();
    }
}