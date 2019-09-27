import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { AuthGenericService } from '../services/auth-generic.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  error;
  constructor(private authServ: AuthGenericService, private router: Router, public navbar: NavbarService) { }
  signup() {
      this.authServ.signup(this.email , this.password, this.firstName);
  }
  ngOnInit() {
    this.navbar.hide();
  }
}
