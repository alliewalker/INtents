import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  confirm = '';
  isLogin: boolean = true;

  constructor(private apiService: ApiService) { }
  
  ngOnInit(){
  }

  onSubmit(event) {
    event.preventDefault()

    if(this.isLogin) this.handleLogin()
    else this.handleSignup()
  }

 handleLogin() {
    this.apiService.login(this.email, this.password)
      .subscribe(({ token, user }) => {
        sessionStorage.setItem('token', token)
      })
 }

handleSignup() {
  if(this.password === this.confirm){
    this.apiService.signup(this.email, this.password)
      .subscribe(({ token, user }) => {
        sessionStorage.setItem('token', token)
      })
  } else {
    alert('passwords do not match')
  }
}
}
