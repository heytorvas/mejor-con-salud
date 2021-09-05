import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient) { }

    getArticles(text: string, order: string) {
        if (order == "" || order == undefined){
            return this.http.get<any>(`${API}?search=${text}`);
        }
        else {
            return this.http.get<any>(`${API}?search=${text}&orderby=${order}`);
        }
        
    }
}