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
  numberPeople: number = 1;
  trips: Array<any> = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

  }
  onSubmit(event){
    console.log('click')
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
