import { Injectable } from '@angular/core';
import { Series } from './model'

@Injectable({
    providedIn: 'root'
})
export class DataService {
    seriesList: Series[] =
        [
            { seriesId: 1, seriesName: "Series 001", seriesDescription: "Series 001 des", category: 1, slideList: null, orientation: 1 },
            { seriesId: 2, seriesName: "Series 002", seriesDescription: "Series 002 des", category: 2, slideList: null, orientation: 1 },
            { seriesId: 3, seriesName: "Series 003", seriesDescription: "Series 003 des", category: 2, slideList: null, orientation: 1 },
            { seriesId: 4, seriesName: "Series 004", seriesDescription: "Series 004 des", category: 3, slideList: null, orientation: 1 }
        ];

    public getAllSeriesList(): Series[] {
        return this.seriesList;
        //api call here
    }

    public createSeries(series: Series) {
        // api call here
    }
}