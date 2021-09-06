import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.articleService.getArticle(this.route.snapshot.params.id).subscribe((result) => {
      this.article = result;
      this.title.setTitle(`MejorConSalud - ${result.title}`)
      this.meta.addTag({
        name: 'description',
        content: result.headline
      })
    })
  }

}
