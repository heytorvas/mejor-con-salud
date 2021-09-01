import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.route.snapshot.params.id).subscribe((result) => {
      this.article = result;
    })
  }

}
