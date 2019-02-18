import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  onClick(event) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'y1G80Jj5pBdIII9wtlJKwBZmQgGbcRWTvaDY0Fmv');
    if(this.dropdown === 'campgrounds'){
      this.http.get(`https://api.nps.gov/api/v1/campgrounds?q=${this.search}`, {
        headers: headers
      })
        .subscribe((data) => {
          // this.items = data;
          console.log(data)
        })
    } else if(this.dropdown === 'parks') {
      this.http.get(`https://www.api.nps.gov/api/v1/parks?q=${this.search}`)
        .subscribe((data) => {
          // this.items = results
        })
    } else if(this.dropdown === 'alerts') {
      this.http.get(`https://www.api.nps.gov/api/v1/alerts?q=${this.search}`)
        .subscribe((data) => {
          // this.items = results;
        })
    } 
  }

}
