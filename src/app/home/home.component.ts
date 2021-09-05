import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articleInput!: string;
  filterSelect!: string

  options = [
    { name: "Ninguno", value: "" },
    { name: "Lo más relevante", value: "relevance" }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToSearch() {
    if (this.filterSelect == ""){
      this.router.navigate(['/search'], { queryParams: { text: this.articleInput }});
    } else {
      this.router.navigate(['/search'], { queryParams: { text: this.articleInput, orderby: this.filterSelect } });
    }
  }

}
