import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthGenericService } from '../shared/services/auth-generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  userId;
  error;
  userMessage = "enter your password"
  constructor(private authService: AuthGenericService, private router: Router) { }

  tryLogin(){
    console.log("in Login component")
    this.authService.doLogin(this.email, this.password)
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
      this.userMessage = "incorrect username or password";
      this.router.navigate(['/login']);
    })
  }

  ngOnInit() {
  }
}
