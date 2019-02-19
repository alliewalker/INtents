import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../../../../intenseServerNg/controllers/tripcontroller';

@Injectable({
  providedIn: 'root'
})
export class DataService {
data: Trip<any>; 
  constructor() { }
}
