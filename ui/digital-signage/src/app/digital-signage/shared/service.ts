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

    public getAllSeriesList(): Observable<any> {
        return this.http.get(this.baseUrl + 'series');
    }

    public createSeries(series: Series): Observable<any> {
        return this.http.post<Series>(this.baseUrl + 'series', series);
    }

    public getCategoryNameById(categoryId: any): string {
        switch (+categoryId) {
            case 1: return 'Food & Beverages';
            case 2: return 'Movies';
            case 3: return 'Textiles';
        }
        return '';
    }

    public getOrientationNameById(orientationId: any): string {
        switch (+orientationId) {
            case 1: return 'Landscape';
            case 2: return 'Portrait';
        }
        return '';
    }
}