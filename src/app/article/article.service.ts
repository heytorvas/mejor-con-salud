import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) { }
    
    getArticle(id: number) {
        return this.http.get<any>(`${API}/${id}`);
    }
}