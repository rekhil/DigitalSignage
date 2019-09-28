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

    public getAllSeriesList(): Observable<Object> {
        return this.http.get(this.baseUrl + 'series');
    }

    public createSeries(series: Series): Observable<Object> {
        return this.http.post<Series>(this.baseUrl + 'series', series);
    }
}