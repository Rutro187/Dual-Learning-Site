import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user-service';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
=======
import { AuthGenericService } from '../services/auth-generic.service';
>>>>>>> master

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
<<<<<<< HEAD
  constructor(public dialog: MatDialog, public auth: AuthService) { }
  
//   login() {
//     this.userServ.login({
//       "email": this.email,
//       "password": this.password
//     }).subscribe(res => {
//       console.log(res)
//       if(res['isAdmin'] == true) {
//         this.userId = res['id'];
//         console.log(this.userId);
//         this.userServ.userId(this.userId);
//         this.userServ.userAdmin();
//         this.userServ.userLogin();
//         console.log("IS ADMIN!")
//         return this.router.navigate(['/dashboard']);
//       }
//       if (res['error']) {
//         console.log('ERROR!')
//         return this.error = res['error'];
//       } else {
//         console.log(res);
//         this.userId = res['id'];
//         console.log(this.userId);
//         this.userServ.userId(this.userId);
//         this.userServ.userLogin();
//         this.router.navigate(['/quiz_guard'])
//       }
//     })
// }
=======
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

>>>>>>> master
  ngOnInit() {
    // this.navbar.hide();
  }
}
