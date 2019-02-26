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
<<<<<<< HEAD
  numberPeople: number = 0;
=======
  numberPeople: number = null;
>>>>>>> 968b1e5edf4604b7aa6ad8a29920d4ac32aad08c
  trips: Array<any> = [];

  constructor(private router: Router, private api: ApiService) { }

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  ngOnInit() {
    this.api.getTrips()
    .subscribe((data) => {
      this.trips = data.trip
    })
  }
  
  onSubmit(event){
    this.api.createTrip(this.date, this.location, this.numberPeople)
    .subscribe(({ created }) => {
      // console.log(this.trips)
      console.log(created)
      this.trips.push(created)
      // console.log(this.trips)
    })
  }

  onDateChange(whatever: any){
    this.date = whatever;
  }

  // onUpdate(event){
  //   console.log('update')
  // }

  onRemove(removed) {
    this.api.removeTrip(removed.id)
    .subscribe(({ updated }) => {
      console.log(updated)
      let withoutDeletedTrip = this.trips.filter(trip => trip.id !== trip.id);
      this.trips = withoutDeletedTrip;
    })
  }
}