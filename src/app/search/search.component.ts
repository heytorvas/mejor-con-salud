import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.filter = this.route.snapshot.queryParamMap.get('text')!;
    console.log(this.filter);
    this.searchArticle()
  }

  searchArticle(): void {
    this.searchService.getArticles(this.filter).subscribe((result: any) => {
      this.articlesSearched = result
    })
  }

}
