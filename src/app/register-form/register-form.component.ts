import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { AuthGenericService } from '../services/auth-generic.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  email: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  error;
  constructor(private userServ: UserServiceService, private authServ:AuthGenericService, private router: Router, public navbar: NavbarService) { }
  signup() {
      this.authServ.signup(
         this.email , this.password)
        // "firstName": this.firstName,
        // "lastName": this.lastName
      // }).subscribe(res => {
      //   if (res['error']) {
      //     return this.error = res['error'];
      //   } else {
      //     this.router.navigate(['/quiz_guard'])
      //   }
      //   this.userServ.userLogin();
      
  }
  ngOnInit() {
    this.navbar.hide();

  }

}
