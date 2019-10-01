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
  userDoc: AngularFirestoreDocument<Users>;
  userAuth;


  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private afs: AngularFirestore,
    ) {
     this.userCollection = this.afs.collection('Users');

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
        const user = this.angularFireAuth.auth.currentUser;
        // user.updateProfile({
        //   displayName: username,
        //   photoURL: "user"
        // })

        this.addGeneralUserInfo(user, username);
        console.log('Successfully signed up!');
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  addGeneralUserInfo(user, username) {
    const userCollection = this.afs.collection('Users');
    userCollection.add({
      uid: user.uid,
      displayname: username,
      email: user.email,
      permission: 'user'
    });
  }

  getUserbyID() {
    return this.afs.collection('Users', ref => ref.where('uid', '==', this.getUserInfo().uid))
    .snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as any;
        const id = x.payload.doc.id;
        return {id, ...data};
      });
    }));
  }


  getUserInfo() {
    this.userAuth = this.angularFireAuth.auth.currentUser;


    return (
        {
          name: this.userAuth.displayname,
          email: this.userAuth.email,
          uid: this.userAuth.uid
        });
    }



  /* Sign out */
  signout() {
    this.angularFireAuth
      .auth
      .signOut();
  }
  // Update a users permissions level in the firestore User Collection
  updateUserPerm(data, permission) {
    return this.afs.collection("Users")
    .doc(data.id)
    .set({permission: permission}, {merge: true });
  }

  //Get All users and pipe data changes so Material Design tables display correctly
  getAllUsers() {
    return this.afs.collection('Users').snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as any;
        const id = x.payload.doc.id;
        return {id, ...data};
      });

  }))}

      }

 



export interface Users {
  uid?;
  displayname?;
  email?;
  permission?;
}
