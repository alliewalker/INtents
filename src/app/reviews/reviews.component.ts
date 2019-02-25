import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  message: string = '';
  starRating: number = 1;
  reviews: Array<any> = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getReviews()
    .subscribe((data) => {
      this.reviews = data.reviews;
    })
  }

  onSubmit(event) {
    this.api.createReview(this.starRating, this.message)
      .subscribe(({ created })=> {
        console.log(created)
        this.reviews.push(created)
      })
  }
<<<<<<< HEAD
=======

  updateReview(review) {
    review.isUpdating = false;
    this.api.updateReview(review)
    .subscribe(response => console.log(response))
  }

  removeReview(removed) {
    this.api.removeReview(removed.id)
    .subscribe(({ updated }) => {
      console.log(updated)
      let withoutDeletedReview = this.reviews.filter(review => review.id !== removed.id);
      this.reviews = withoutDeletedReview;
    })
  }

>>>>>>> 297a8b1b78178a5c38f5fd2b8c67f91b8e2efae1
}
