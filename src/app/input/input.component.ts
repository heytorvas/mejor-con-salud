import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  articleInput!: string;
  filterSelect!: string

  navigateURL = ['/search']
  options = [
    { name: "Ninguno", value: "" },
    { name: "Lo más relevante", value: "relevance" }
  ]

  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }

  goToSearch() {
    this.router.navigate(this.navigateURL, { queryParams: { text: this.articleInput, orderby: this.filterSelect } });
  }

}
