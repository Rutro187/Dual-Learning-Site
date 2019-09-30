import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { tap, map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class AuthGenericService {
  // userData: Observable<firebase.User>;
  userCollection: AngularFirestoreCollection<Users>;
  userDoc: AngularFirestoreDocument<Users>
  userAuth;
  

  constructor(private router: Router,
    private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    ) {
     this.userCollection = this.afs.collection("Users");
     this.userAuth = this.angularFireAuth.auth.currentUser
    // this.userCollection = this.angularFirestore.collection("Users", ref => ref.orderBy('displayname', 'desc'))
  }




  doLogin(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          const token = this.getUserInfo();
          localStorage.setItem('userInfo', JSON.stringify(token));
          resolve(token);
          if (res.user.emailVerified !== true) {
            this.SendVerificationMail();
            window.alert('Please validate your email address. Kindly check your inbox.');
            this.router.navigate(['/login']);
          }
        }, err => reject(err));
    });
  }
  // Verification Email //
  SendVerificationMail() {
    return this.angularFireAuth.auth.currentUser.sendEmailVerification();
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

        this.addGeneralUserInfo(user, username);
        console.log('Successfully signed up!');
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  addGeneralUserInfo(user, username) {
    const userCollection = this.afs.collection("Users");
    userCollection.add({
      uid: user.uid,
      displayname: username,
      email: user.email,
      permission: "user"
    });
  }

  getUserInfo() {

    let name, email, permission, uid;

    // let userGeneral = 
    return this.afs.collection('Users', ref => ref.where('uid', '==', "hyAAOT4dIXWRRQk0wkqu8mypj232")).snapshotChanges().pipe(map(actions => {
        return actions.map(x => {
          const data = x.payload.doc.data() as any;
          const id = x.payload.doc.id;
          return {id, ...data}  
        })
      })) 

      // console.log("generalUser: ", generalUser)
  
      // return (
      //   {
      //     name: this.userAuth.displayName,
      //     email: this.userAuth.email,
      //     permission: "blank",
      //     uid: this.userAuth.uid  // The user's ID, unique to the Firebase project. Do NOT use
      //     // this value to authenticate with your backend server, if
      //     // you have one. Use User.getToken() instead.
      //   })
    }
  
  

  /* Sign out */
  signout() {
    this.angularFireAuth
      .auth
      .signOut();
  }
  // Retrieve User info (finds permission level)


  

  getAllUsers() {
    return this.userCollection
  }

}

export interface Users {
  uid?
  displayname?
  email?
  permission?
}