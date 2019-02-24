import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { BASE_URL } from '../../environments/environment.prod'

// let BASE_URL = 'https://jd-intentserver.herokuapp.com'

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

  createTrip(date, location, numberPeople) {
    return this.http.post<HasCreated<Trip>>(`${BASE_URL}/trip/make`, {
      trip: {
        date: date,
        location: location,
        numberPeople: numberPeople
      }
    }, httpOptions)
  }

  getTrips() {
    return this.http.get<Trip[]>(`${BASE_URL}/trip/read`, httpOptions)
  }
}

interface HasToken {
  token: string
}

interface HasUser {
  user: object
}

interface HasCreated<T> {
  created: T
}

interface HasMessage {
  message: string
}

class Review {
  id: number;
  starRating: number;
  review: string;
  updatedAt: string;
  createdAt: string;
}

class Trip {
  id: string;
  date: string;
  location: string;
  numberPeople: number
  updatedAt: string;
  createdAt: string;
}
