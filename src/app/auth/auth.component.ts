import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  isLogin: boolean = true;
  
  ngOnInit(){
  }

  onSubmit(event) {
    console.log('something')
    event.preventDefault()
  }
}
