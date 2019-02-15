import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);
  
  constructor() { }

  ngOnInit() {
  }

}
