import {  Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component'

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent implements OnInit{
  date: Date;
  location: string = '';
  numberPeople: number = 1;
  trips: Array<any> = [];

  constructor(private router: Router, private api: ApiService) { }

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  ngOnInit() {
    this.api.getTrips()
    .subscribe((data) => {
      this.trips = data
    })
  }
  onSubmit(event){
    console.log('click')
    console.log(this.date)
    this.api.createTrip(this.date, this.location, this.numberPeople)
    .subscribe(({ created }) => {
      console.log(created)
      this.trips.push(created)
    })
  }

  

  // onUpdate(event){
  //   console.log('update')
  // }

  // onRemove(event){
  //   console.log('delete')
  // }
}
