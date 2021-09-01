import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient) { }

    getArticle(text: string) {
        return this.http.get<any>(`${API}?search=${text}`);
    }
}