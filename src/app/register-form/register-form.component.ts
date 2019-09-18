import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email: String = "";
  password: String = "";
  firstName: String = "";
  lastName: String = "";
  error;
  constructor(private userServ: UserServiceService, private router: Router) { }
  signup() {
      this.userServ.signup({
        "email": this.email,
        "password": this.password,
        "firstName": this.firstName,
        "lastName": this.lastName
      }).subscribe(res => {
        if (res['error']) {
          return this.error = res['error'];
        } else {
          this.router.navigate(['/quiz_guard'])
        }
        this.userServ.userLogin();
      })
  }
  ngOnInit() {
  }

}
