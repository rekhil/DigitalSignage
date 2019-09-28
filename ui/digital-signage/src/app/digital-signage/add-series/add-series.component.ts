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
    return 20;
  }

  constructor(public dataService: DataService) {
    this.series = new Series();
    this.series.slideList = [];
    this.addNewSlide();
    // this.imageUrlArray = [];
    // this.slideList.forEach(element => {
    //   this.imageUrlArray.push(element.filePath);
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
    this.showPreview = true;
  }

  closePreview() {
    this.showPreview = false;
  }


  createSeries() {
    this.dataService.createSeries(this.series);
    this.series = new Series();
  }
}
