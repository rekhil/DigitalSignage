import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service';
import { Series } from '../shared/model';

@Component({
  selector: 'app-broadcast-series-list',
  templateUrl: './broadcast-series-list.component.html',
  styleUrls: ['./broadcast-series-list.component.scss']
})
export class BroadcastSeriesListComponent implements OnInit {

  public seriesList: Series[];
  private selectedSeries: Series;
  public showPreview = false;
  public imageObject: Array<object>;
  public size = { width: 1120, height: 500 };
  get previewText(): string {
    if (this.showPreview) {
      return 'Stop Preview';
    } else {
      return 'Preview';
    }
  }

  get autoSlide(): number {
    return this.selectedSeries && this.selectedSeries.duration && this.selectedSeries.duration > 0 ? this.selectedSeries.duration : 1;
  }

  get infinite(): boolean {
    return this.selectedSeries.slideList && this.selectedSeries.slideList.filter(x => x.slideContentList && x.slideContentList.length > 0
      && x.slideContentList[0].filePath).length > 1;
  }

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getAllSeriesList();
  }

  private getAllSeriesList() {
    this.dataService.getAllSeriesList().subscribe(
      (data) => {
        this.seriesList = data;
        this.seriesList.forEach(element => {
          element.orientationName = this.dataService.getOrientationNameById(element.orientation);
          element.categoryName = this.dataService.getCategoryNameById(element.category);
        })
      }, (error) => {
        return;
      });
  }

  public playSeries(series: Series) {
    this.selectedSeries = series;
    if (!this.showPreview) {
      this.imageObject = [];
      this.selectedSeries.slideList.filter(x => x.slideContentList && x.slideContentList.length > 0
        && x.slideContentList[0].filePath).forEach(element => {
          this.imageObject.push({
            image: element.slideContentList[0].filePath,
            thumbImage: element.slideContentList[0].filePath
          });
        });
    }
    this.showPreview = !this.showPreview;
  }
}