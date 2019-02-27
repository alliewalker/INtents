import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../../environments/environment.prod'

// let BASE_URL = 'https://jd-intentserver.herokuapp.com'

// let BASE_URL = 'http://localhost:3000'

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
if(sessionStorage.getItem('token')) {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token')
    })
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post<HasToken & HasUser>(`${BASE_URL}/user/login`, {
      user:{
        email: email,
        password: password
      }
    }, httpOptions).pipe(
      tap(({ token }) => {
        httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
      })
    )
  }

  signup(email, password) {
    console.log('signing up')
    return this.http.post<HasToken & HasUser>(`${BASE_URL}/user/create`, {
      user: {
        email: email,
        password: password
      }
    }, httpOptions).pipe(
      tap(({ token }) => {
        httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
      })
    );
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
    return this.http.get<HasReviews>(`${BASE_URL}/review/read`, httpOptions)
  }

  removeReview(reviewId) {
    console.log('api removing review', reviewId)
    return this.http.delete<HasUpdated<Review>>(`${BASE_URL}/review/remove/${reviewId}`, httpOptions)
    }
 
  updateReview(review) {
    return this.http.put<HasUpdated<Review>>(`${BASE_URL}/review/update/${review.id}`, {
      review
    }, httpOptions)
  }  

  createTrip(date: string[], location: string, numberPeople: number) {
    return this.http.post<HasCreated<Trip>>(`${BASE_URL}/trip/make`, {
      trip: {
        date: date,
        location: location,
        numberPeople: numberPeople
      }
    }, httpOptions)
  }

  getTrips() {
    return this.http.get<any>(`${BASE_URL}/trip/read/`, httpOptions)
  }

  removeTrip(tripId){
    return this.http.delete<HasUpdated<Trip>>(`${BASE_URL}/trip/remove/${tripId}`, httpOptions)
  }

  updateTrip(trip) {
    return this.http.put<HasUpdated<Trip>>(`${BASE_URL}/trip/promote/${trip.id}`, 
    {
      trip
    }, httpOptions)
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

interface HasReviews {
  reviews: Review[]
}

class Review {
  id: number;
  starRating: number;
  review: string;
  updatedAt: string;
  createdAt: string;
}

class Trip {
  id: number;
  date: Date;
  location: string;
  numberPeople: number
  updatedAt: string;
  createdAt: string;
}

interface HasUpdated<T> {
  updated: T
}
