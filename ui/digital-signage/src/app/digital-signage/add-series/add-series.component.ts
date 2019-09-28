import { Component } from '@angular/core';
import { DataService } from '../shared/service';
import { Series, Slide } from '../shared/model';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent {

  public series: Series;
  public showPreview = false;

  get previewText(): string {
    if (this.showPreview) {
      return 'Stop Preview';
    } else {
      return 'Preview';
    }
  }

  get formValid(): boolean {
    return true;
  }

  get disablePreviewButton(): boolean {
    return !this.series.slideList || this.series.slideList.filter(x => x.slideContentList && x.slideContentList.length > 0
      && x.slideContentList[0].filePath).length === 0
  }

  get autoSlide(): number {
    return this.series.duration && this.series.duration > 0 ? this.series.duration : 1;
  }

  public imageObject: Array<object>;
  public size = { width: 1120, height: 500 };

  constructor(public dataService: DataService) {
    this.createNewSeries();
  }

  deleteSlide(slide: Slide) {
    if (this.series.slideList.length > 1) {
      const index = this.series.slideList.indexOf(slide);
      this.series.slideList.splice(index, 1);
    }
  }

  public onCategoryChange(event: any) {
    this.series.category = +event;
  }

  public onResolutionChange(event: any) {
    this.series.resolutionX = +event;
    this.series.resolutionY = +event;
  }

  public onOrientationChange(event: any) {
    this.series.orientation = +event;
  }

  public previewSeries() {
    if (!this.showPreview) {
      this.imageObject = [];
      this.series.slideList.filter(x => x.slideContentList && x.slideContentList.length > 0
        && x.slideContentList[0].filePath).forEach(element => {
          this.imageObject.push({
            image: element.slideContentList[0].filePath,
            thumbImage: element.slideContentList[0].filePath
          });
        });
    }
    this.showPreview = !this.showPreview;
  }

  public closePreview() {
    this.showPreview = false;
  }

  public createSeries() {
    this.dataService.createSeries(this.series).subscribe();
    this.createNewSeries();
  }

  private createNewSeries() {
    this.series = new Series();
    this.series.duration = 1;
    this.series.slideList = [];
    this.addNewSlide();
  }

  private addNewSlide() {
    const slide = new Slide();
    slide.templateId = 1;
    slide.slideContentList = [];
    slide.slideContentList.push({ slideContentId: 1, filePath: null });
    this.series.slideList.push(slide);
  }

}
