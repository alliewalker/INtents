import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment.prod'

// let BASE_URL = 'http://localhost:3000'

// let BASE_URL = 'https://jd-intentserver.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post<HasToken & HasUser>(`${BASE_URL}user/login`, {
      user:{
        email: email,
        password: password
      }
    })
  }

  signup(email, password) {
    return this.http.post<HasToken & HasUser>(`${BASE_URL}user/create`, {
      user: {
        email: email,
        password: password
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