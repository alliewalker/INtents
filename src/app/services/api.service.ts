import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let BASE_URL = 'http://localhost:3000'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: sessionStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    let request =  this.http.post<HasToken & HasUser>(`${BASE_URL}/user/login`, {
      user:{
        email: email,
        password: password
      }
    }, httpOptions)
    request.subscribe(({ token }) => {
      httpOptions.headers=new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
    })
    return request;
  }

  signup(email, password) {
    let request = this.http.post<HasToken & HasUser>(`${BASE_URL}/user/create`, {
      user: {
        email: email,
        password: password
      }
    }, httpOptions)
    request.subscribe(({ token }) => {
      httpOptions.headers=new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
  })
  return request;
}

  createReview(rating: number, message: string) {
    return this.http.post<HasCreated<Review>>(`${BASE_URL}/review/make`, {
      review: {
        starRating: rating,
        review: message
      }
    }, httpOptions)
  }

  getReviews() {
    return this.http.get<Review[]>(`${BASE_URL}/review/read`, httpOptions)
  }
}

interface HasToken {
  token: string
}

interface HasUser {
  user: object
}

interface HasMessage {
  message: string
}

interface HasCreated<T> {
  created: T
}

class Review {
  id: number;
  starRating: number;
  review: string;
  updatedAt: string;
  createdAt: string;
}

