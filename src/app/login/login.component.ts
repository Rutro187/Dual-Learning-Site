import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { AuthGenericService } from '../services/auth-generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = "";
  password: String = "";
  userId;
  error;
  userMessage = "enter your password"
  constructor(private authService: AuthGenericService, private router: Router, public navbar: NavbarService) { }

  tryLogin(){
    this.authService.doLogin(this.email, this.password)
    .then(res => {
      this.router.navigate(['/dashboard']);
      console.log();
    }, err => {
      console.log(err);
      this.userMessage = "incorrect username or password";
      this.router.navigate(['/login']);
    })
  }

  ngOnInit() {
    this.navbar.hide();
  }
}
