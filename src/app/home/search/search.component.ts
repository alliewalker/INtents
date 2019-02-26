import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  apiURL: string = 'http://api.nps.gov/api/v1';
  dropdown: string = 'campgrounds';
  search: string = '';
  items: Array<any> = [];

  constructor(private http: HttpClient) { }

  onClick(event) {
    if(this.dropdown === 'campgrounds'){
      this.http.get<HasData>(`${this.apiURL}/campgrounds?q=${this.search}`)
        .subscribe(({ data }) => {
          console.log(data);
          this.items = data;
        })
    } else if(this.dropdown === 'parks') {
      this.http.get<HasData>(`${this.apiURL}/parks/?q=${this.search}`)
        .subscribe(({ data }) => {
          this.items = data
        })
    } else if(this.dropdown === 'alerts') {
      this.http.get<HasData>(`${this.apiURL}/alerts/?q=${this.search}`)
        .subscribe(({ data }) => {
          this.items = data;
        })
    } else if(this.dropdown === 'events') {
      this.http.get<HasData>(`${this.apiURL}/events/?q=${this.search}`)
        .subscribe(({ data }) => {
          this.items = data;
        })
    }
  }

}
interface HasData {
  data: Array<any>
}
