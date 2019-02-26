import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { BASE_URL } from '../../environments/environment.prod'

// let BASE_URL = 'https://jd-intentserver.herokuapp.com'

let BASE_URL = 'http://localhost:3000'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //authorization: sessionStorage.getItem("token")
  })
};

@Injectable({
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
    let request =  this.http.post<HasToken & HasUser>(`${BASE_URL}/user/login`, {
      user:{
        email: email,
        password: password
      }
    }, httpOptions)
    request.subscribe(({ token }) => {
      httpOptions.headers=new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
    })
    // .pipe(
    //   catchError(this.handleError("login")),
    //   tap(data => {
    //     console.log(data);
    //     return data
    //   })
    // )
    return request;
  }

  signup(email, password) {
    let request = this.http.post<HasToken & HasUser>(`${BASE_URL}/user/create`, {
      user: {
        email: email,
        password: password,
        userRole: "standard",
        adminStatus: false
      }
    }, httpOptions)
    request.subscribe(({ token }) => {
      httpOptions.headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', token);
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
    return this.http.get<HasReviews>(`${BASE_URL}/review/read`, httpOptions)
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
    return this.http.get<Trip>(`${BASE_URL}/trip/read/`, httpOptions)
  }

  removeTrip(){
    return this.http.delete(`${BASE_URL}/trip/remove/:id`, httpOptions)
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
  id: string;
  date: Date;
  location: string;
  numberPeople: number
  updatedAt: string;
  createdAt: string;
}

interface HasUpdated<T> {
  updated: T
}
