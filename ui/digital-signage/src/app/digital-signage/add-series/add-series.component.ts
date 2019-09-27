import { Component } from '@angular/core';
import { DataService } from '../shared/service';
import { Series, Slide } from '../shared/model';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent {

  private series: Series;
  private slideList: Slide[];

  constructor(public dataService: DataService) {
    this.series = new Series();

    this.slideList = [
      { slideId: 1, duration: 10, templateId: 1, filePath: '../assets/files/dominos.jpg' },
      { slideId: 2, duration: 15, templateId: 1, filePath: '../assets/files/mac.jpg' },
      { slideId: 3, duration: 5, templateId: 1, filePath: '../assets/files/burger_king.gif' },
      { slideId: 4, duration: 15, templateId: 1, filePath: '../assets/files/kfc.jpg' },
      { slideId: 5, duration: 8, templateId: 1, filePath: '../assets/files/chicking.jpg' }
    ];
  }

  ngOnInit() {
  }

  addNewSlide() {

  }

  playSeries() {

  }

  createSeries() {
    this.dataService.createSeries(this.series);
    this.series = new Series();
  }
}
