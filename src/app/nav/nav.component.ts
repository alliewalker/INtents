import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  // title: string = 'INtents';

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  constructor() { }

}