import { Injectable } from '@angular/core';
import { Series } from './model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private baseUrl = 'https://digitalsignageapi20190927105227.azurewebsites.net/api/';

    constructor(private http: HttpClient) { }

    seriesList: Series[] =
        [
            { seriesId: 1, seriesName: "Series 001", seriesDescription: "Series 001 des", category: 1, slideList: null, orientation: 1 },
            { seriesId: 2, seriesName: "Series 002", seriesDescription: "Series 002 des", category: 2, slideList: null, orientation: 1 },
            { seriesId: 3, seriesName: "Series 003", seriesDescription: "Series 003 des", category: 2, slideList: null, orientation: 1 },
            { seriesId: 4, seriesName: "Series 004", seriesDescription: "Series 004 des", category: 3, slideList: null, orientation: 1 }
        ];

    public getAllSeriesList(): Observable<Object> {
        return this.http.get(this.baseUrl + 'series');
    }

    public createSeries(series: Series) {
        // api call here
    }
}