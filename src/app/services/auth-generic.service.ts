import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';?
// import * as firebase from 'firebase/app';
import { Router } from '@angular/router'
import {AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGenericService {
  userData: Observable<firebase.User>;

  // this.userData = angularFireAuth.authState; this was bello in the brackets 
  constructor(private router: Router, private angularFireAuth: AngularFireAuth) {}

  // doLogin(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //       if (res.user.emailVerified !== true) {
  //         this.SendVerificationMail();
  //         window.alert('Please validate your email address. Kindly check your inbox.');
  //         this.router.navigate(['/login']);
  //         }
  //     }, err => reject(err))
  //   })
  // }

//   SendVerificationMail() {
//     return this.afAuth.auth.currentUser.sendEmailVerification()
//   }

//   doGoogleLogin(){
//     return new Promise<any>((resolve, reject) => {
//       let provider = new firebase.auth.GoogleAuthProvider();
//       provider.addScope('profile');
//       provider.addScope('email');
//       this.afAuth.auth
//       .signInWithPopup(provider)
//       .then(res => {
//         resolve(res);
//       }, err => {
//         console.log(err);
//         reject(err);
//       })
//     })
//   }
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
}
