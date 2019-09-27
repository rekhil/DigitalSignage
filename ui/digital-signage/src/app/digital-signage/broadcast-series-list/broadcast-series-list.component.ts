import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service';
import { Series } from '../shared/model';

@Component({
  selector: 'app-broadcast-series-list',
  templateUrl: './broadcast-series-list.component.html',
  styleUrls: ['./broadcast-series-list.component.scss']
})
export class BroadcastSeriesListComponent implements OnInit {

  private seriesList: Series[];
  private selectedSeries;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.seriesList = this.dataService.getAllSeriesList();
  }

  public playSeries(series: Series) {
    this.selectedSeries = series;
  }
}