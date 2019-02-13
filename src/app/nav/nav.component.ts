import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  title: string = 'INtents';

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  constructor(public contact: MatDialog) { }

  openContact() {
    // const contactRef = this.contact.open(contactForm); 

    // contactRef.afterClosed().subscribe(result => {
    //   console.log('message sent');
    // });
  }
}