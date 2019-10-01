import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user-service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { AuthGenericService } from '../services/auth-generic.service';

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
  constructor(private authService: AuthGenericService, private router: Router, public navbar: NavbarService) { }

  tryLogin(){
    console.log('try login');
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
    // this.navbar.hide();
  }
}
