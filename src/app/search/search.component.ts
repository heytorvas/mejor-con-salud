import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  articlesSearched!: any
  filter!: string
  orderby!: string

  constructor(private route: ActivatedRoute, private searchService: SearchService, private title: Title) { }

  ngOnInit(): void {
    this.filter = this.route.snapshot.queryParamMap.get('text')!;
    this.orderby = this.route.snapshot.queryParamMap.get('orderby')!;
    console.log(this.filter, this.orderby);
    this.searchArticle()
    this.title.setTitle(`MejorConSalud - Búsqueda devuelta por término ${this.filter}`)
  }

  searchArticle(): void {
    this.searchService.getArticles(this.filter, this.orderby).subscribe((result: any) => {
      this.articlesSearched = result
    })
  }

}
