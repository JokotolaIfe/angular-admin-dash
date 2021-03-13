import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string; password: string
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  login(username, password){
    if(username && password && password.length > 7){
      this.router.navigateByUrl('/dashboard')
    }
    else if(8 > password.length){
      alert('Password must be at least 8 characters')
    }
    else if(!username || !password){
      alert('Please enter your username and password') 
    }
  }

}
