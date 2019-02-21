import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  starRating: number = 1;

  constructor(private router: Router) {
    console.log('anything')
   }

  ngOnInit() {
  }
}

