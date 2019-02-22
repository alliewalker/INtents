import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service'
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email = '';
  password = '';
  confirm = '';
  isLogin: boolean = true;

  constructor(private apiService: ApiService, private router: Router) { }
  
  ngOnInit(){
  }

  onSubmit(event) {
    event.preventDefault()

    if(this.isLogin) this.handleLogin()
    else this.handleSignup()
  }

 handleLogin() {
    this.apiService.login(this.email, this.password)
      .subscribe((data) => {
        console.log('login', data);
        sessionStorage.setItem('token', data.token);
        this.router.navigateByUrl('/home');
      })
 }

handleSignup() {
  if(this.password === this.confirm){
    this.apiService.signup(this.email, this.password)
      .subscribe((data) => {
        console.log('signup', data)
        sessionStorage.setItem('token', data.token)
        this.router.navigateByUrl('/home');
      })
  } else {
    alert('passwords do not match')
  }
}
}
