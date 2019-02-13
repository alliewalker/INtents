import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email = '';
  password = '';
  isLogin: boolean = true;
  
  onSubmit(event) {
    console.log('somethimg')
    event.preventDefault()
  }
}
