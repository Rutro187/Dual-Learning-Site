import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {User} from '../Interfaces/users';



@Injectable({
  providedIn: 'root'
})
export class AuthGenericService {
  // userData: Observable<firebase.User>;
userCollection: AngularFirestoreCollection<User>;
  
  constructor(private router: Router, private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore) {
    this.userCollection = this.angularFirestore.collection("Users", ref => ref.orderBy('displayname', 'desc'))
  }
  



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


signup(email: string, password: string, username: string) {
  this.angularFireAuth
  .auth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
    var user = this.angularFireAuth.auth.currentUser;
    user.updateProfile({
      displayName: username,
      photoURL: "user"
    })
  
    this.addGeneralUserInfo(user)  
    console.log('Successfully signed up!');
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

getUserInfo(){
const user = this.angularFireAuth.auth.currentUser;
var name, email, permission, uid;

if (user != null) {
  return (
  {
  name: user.displayName,
  email: user.email,
  permission: user.photoURL,
  uid: user.uid,  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
  }
  )
}
}

addGeneralUserInfo(user){
  console.log("addgeneral")
  const userCollection = this.angularFirestore.collection("Users")
  userCollection.doc(user.uid).set({
    displayname: user.displayName,
    email: user.email,
    permission: "user"
  });
}



getAllUsers(){
  return this.userCollection 



}
}