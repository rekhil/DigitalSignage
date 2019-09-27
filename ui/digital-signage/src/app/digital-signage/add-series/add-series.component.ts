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
  private series: Series;
  private slideList: Slide[];
  private showPreview = false;
  public imageUrlArray: string[];
  constructor(public dataService: DataService) {
    this.series = new Series();

    this.slideList = [
      { slideId: 1, duration: 10, templateId: 1, filePath: '../assets/files/dominos.jpg', slideContentList: null },
      { slideId: 2, duration: 15, templateId: 1, filePath: '../assets/files/mac.jpg', slideContentList: null },
      { slideId: 3, duration: 5, templateId: 1, filePath: '../assets/files/burger_king.gif', slideContentList: null },
      { slideId: 4, duration: 15, templateId: 1, filePath: '../assets/files/kfc.jpg', slideContentList: null },
      { slideId: 5, duration: 8, templateId: 1, filePath: '../assets/files/chicking.jpg', slideContentList: null }
    ];


    this.imageUrlArray = [];
    this.slideList.forEach(element => {
      this.imageUrlArray.push(element.filePath);
    });
  }

  addNewSlide() {

  }

  deleteSlide(slide: Slide) {
    const index = this.slideList.indexOf(slide);
    this.slideList.splice(index, 1);
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
