import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent, pathMatch: 'full'},
  {path: 'article/:id', component: ArticleComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
