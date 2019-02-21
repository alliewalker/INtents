import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private router: Router) {
    console.log('anything')
   }

  ngOnInit() {
  }
}

<<<<<<< HEAD
  // this.router.navigateByUrl('/reviews');

=======
>>>>>>> 6899d622a3f97b48d31e3e12f72513f639e1eae8
