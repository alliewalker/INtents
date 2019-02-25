import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  private adminStatus;

  constructor(private router: Router) {
    console.log('anything')
   }

  ngOnInit() {
    this.adminStatus = sessionStorage.getItem("adminStatus");
    console.log(this.adminStatus);
  }

  openDiv(){
    document.getElementById("adminDeleteDiv").style.display = "block"
  }

  sendDeleteFetch(id){
    event.preventDefault();
    console.log(id);
  }
}