import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment.prod'

import {Observable, of} from "rxjs"
import {catchError, map, tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private baseURL = 'http://localhost:3000/';

  // private handleError<T> (operation = "operation", result?: T){
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of (result as T);
  //   }
  // }

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post<HasToken & HasUser>(`${BASE_URL}user/login`, {
      user:{
        email: email,
        password: password
      }
    })
    // .pipe(
    //   catchError(this.handleError("login")),
    //   tap(data => {
    //     console.log(data);
    //     return data
    //   })
    // )
  }

  signup(email, password) {
    return this.http.post<HasToken & HasUser>(`${BASE_URL}user/create`, {
      user: {
        email: email,
        password: password,
        userRole: "standard",
        adminStatus: false
      }
    })
  }
}

interface HasToken {
  token: string
}

interface HasUser {
  user: object
}