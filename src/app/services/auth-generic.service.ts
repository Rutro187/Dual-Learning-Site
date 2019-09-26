import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGenericService {
  // userData: Observable<firebase.User>;

  //  this was bello in the brackets 
  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {}

  doLogin(email, password){
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email,password)
      .then(res => {
        resolve(res);
        if (res.user.emailVerified !== true) {
          this.SendVerificationMail();
          window.alert('Please validate your email address. Kindly check your inbox.');
          this.router.navigate(['/login']);
          }
      }, err => reject(err))
    })
  }

  SendVerificationMail() {
    return this.angularFireAuth.auth.currentUser.sendEmailVerification()
  }


signup(email: string, password: string) {
  this.angularFireAuth
  .auth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
    console.log('Successfully signed up!', res);
  })
  .catch(error => {
    console.log('Something is wrong:', error.message);
  });
}
/* Sign out */
signout(){
  this.angularFireAuth
    .auth
    .signOut();
}
}

