import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent implements OnInit{
  date: string = '';
  location: string = '';
  numberPeople: number;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(event){
    console.log('click')
    this.api.createTrip(this.date, this.location, this.numberPeople)
    .subscribe((data) => {
      console.log(data)
      // this.trips.push(data)
    })
  }

  

  // onUpdate(event){
  //   console.log('update')
  // }

}
