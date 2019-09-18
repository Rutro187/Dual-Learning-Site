import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user-service.service';
import { Router } from '@angular/router';

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
  constructor(private userServ: UserServiceService, private router: Router) { }
  login() {
    this.userServ.login({
      "email": this.email,
      "password": this.password
    }).subscribe(res => {
      console.log(res)
      if(res['isAdmin'] == true) {
        this.userId = res['id'];
        console.log(this.userId);
        this.userServ.userId(this.userId);
        this.userServ.userAdmin();
        this.userServ.userLogin();
        console.log("IS ADMIN!")
        return this.router.navigate(['/dashboard']);
      }
      if (res['error']) {
        console.log('ERROR!')
        return this.error = res['error'];
      } else {
        console.log(res);
        this.userId = res['id'];
        console.log(this.userId);
        this.userServ.userId(this.userId);
        this.userServ.userLogin();
        this.router.navigate(['/quiz_guard'])
      }
    })
}
  ngOnInit() {
  }

}
