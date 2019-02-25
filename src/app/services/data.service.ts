import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// const baseUrl = 'https://jd-intentserver.herokuapp.com/'

// const baseUrl = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  createTrip(): Observable<any>{
    return this.http.post(`${BASE_URL}trip/make`, httpOptions)
  }

  getTrip(): Observable<any>{
    return this.http.get(`${BASE_URL}trip/read`, httpOptions)
  }

  updateTrip(): Observable<any>{
    return this.http.put(`${BASE_URL}trip/promote/:id`, httpOptions)
  }

  removeTrip(): Observable<any>{
    return this.http.delete(`${BASE_URL}trip/remove/:id`, httpOptions);
  }
}
