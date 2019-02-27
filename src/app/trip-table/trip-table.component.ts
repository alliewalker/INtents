import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent implements OnInit{
  date: string[] = [];
  location: string = '';
  numberPeople: number = null;
  trips: Array<any> = [];

  constructor(private router: Router, private api: ApiService) { }

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  ngOnInit() {
    this.api.getTrips()
    .subscribe((data) => {
      this.trips = data.trips
    })
  }
  
  onSubmit(event){
    this.api.createTrip(this.date, this.location, this.numberPeople)
    .subscribe(({ created }) => {
      // console.log(this.trips)
      this.trips.push(created)
      console.log(this.trips)
    })
  }

  onDateChange(whatever: any){
    this.date = whatever;
  }

  // onUpdate(event){
  //   console.log('update')
  // }

  removeTrip(gone) {
    this.api.removeTrip(gone.id)
    .subscribe(({ updated }) => {
      console.log(updated)
      let withoutDeletedTrip = this.trips.filter(trip => trip.id !== gone.id);
      this.trips = withoutDeletedTrip;
    })
  }
}