import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})
export class ContactFormComponent {

  showDelay = new FormControl(700);
  hideDelay = new FormControl(500);

  submitted = false;

}