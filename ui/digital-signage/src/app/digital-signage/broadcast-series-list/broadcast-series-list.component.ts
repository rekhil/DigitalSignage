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

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.getAllSeriesList();
  }

  private getAllSeriesList() {
    this.dataService.getAllSeriesList()
      .subscribe((data: Series[]) => this.seriesList = data);
  }

  public playSeries(series: Series) {
    this.selectedSeries = series;
  }
}