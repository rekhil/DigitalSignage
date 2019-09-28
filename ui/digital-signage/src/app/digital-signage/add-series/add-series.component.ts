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
  public imageUrlArray: string[];
  get totalDuration(): number {
    return this.series.slideList.filter(x => x.duration && x.duration > 0).reduce((sum, current) => sum + current.duration, 0);;
  }

  get previewText(): string {
    if (this.showPreview) {
      return 'Stop Preview';
    } else {
      return 'Preview';
    }
  }

  get formValid():boolean{
    return true;
  }

  constructor(public dataService: DataService) {
    this.series = new Series();
    this.series.slideList = [];
    this.addNewSlide();
    this.imageUrlArray = [];

    this.imageUrlArray.push('../assets/files/kfc.jpg');

    this.imageUrlArray.push('../assets/files/chicking.jpg');

    this.imageUrlArray.push('../assets/files/dominos.jpg');
    // this.series.slideList.forEach(element => {
    //   if (element.slideContentList && element.slideContentList.length > 0) {
    //     this.imageUrlArray.push(element.slideContentList[0].filePath);
    //   }
    // });
  }

  addNewSlide() {
    const slide = new Slide();
    slide.duration = 5;
    slide.templateId = 1;
    slide.slideContentList = [];
    slide.slideContentList.push({ slideContentId: 1, filePath: null });
    this.series.slideList.push(slide);
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

  previewSeries() {
    this.showPreview = !this.showPreview;
  }

  closePreview() {
    this.showPreview = false;
  }

  createSeries() {
    this.dataService.createSeries(this.series).subscribe();
    this.series = new Series();
    this.series.slideList = [];
    this.addNewSlide();
  }
}
