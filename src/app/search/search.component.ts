import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  dropdown: string = 'campgrounds';
  search: string = '';
  items: Array<any> = [];

  constructor(private http: HttpClient) { }

  // onClick(event) {
  //   if(this.dropdown === 'campgrounds'){
  //     this.http.get(`api.nps.gov/api/v1/campgrounds/?search=${this.search}`)
  //       .subscribe(({ results }) => {
  //         this.items = results;
  //       })
  //   } else if(this.dropdown === 'parks') {
  //     this.http.get(`api.nps.gov/api/v1/parks/?search=${this.search}`)
  //       .subscribe(({ results }) => {
  //         this.items = results
  //       })
  //   } else if(this.dropdown === 'alerts') {
  //     this.http.get(`api.nps.gov/api/v1/alerts/?search=${this.search}`)
  //       .subscribe(({ results }) => {
  //         this.items = results;
  //       })
  //   } 
  // }

}
