import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthGenericService, public navbar: NavbarService) { }

  signup() {
    let userName = this.firstName + " " + this.lastName;
    this.auth.signup(this.email , this.password, userName);
  }

  ngOnInit() {
    this.navbar.hide();
  }

}

