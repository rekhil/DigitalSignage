import { Component } from '@angular/core';
import { DataService } from '../shared/service';
import { Series } from '../shared/model';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.scss']
})
export class AddSeriesComponent {

  private series: Series;

  constructor(public dataService: DataService) {
    this.series = new Series();
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
