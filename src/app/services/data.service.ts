import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  createTrip(): Observable<any>{
    return this.http.post('https://localhost:3000/trip/make', httpOptions)
  }

  getTrip(): Observable<any>{
    return this.http.get('https://localhost:3000/trip/read', httpOptions)
  }

  updateTrip(): Observable<any>{
    return this.http.put('https://localhost:3000/trip/promote/:id', httpOptions)
  }

  removeTrip(): Observable<any>{
    return this.http.delete('https://localhost:3000/trip/remove/:id', httpOptions);
  }
}
