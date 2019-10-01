import { UserStoreService } from './../user-store.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGenericService, Users } from '../services/auth-generic.service';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userCollection: AngularFirestoreCollection<Users>;
  userDoc: AngularFirestoreDocument<Users>;
  userAuth;
  user$;
  constructor(public dialog: MatDialog,
              private authGenericService: AuthGenericService,
              private angularFireAuth: AngularFireAuth,
              private afs: AngularFirestore,
              public userStore: UserStoreService ) {}
  takeQuiz(): void {
    const dialogRef = this.dialog.open(QuizGuardComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed();
  }

  admin(): void {
    const dialogRef = this.dialog.open(AdminComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed();
  }

  signOut() {
    this.authGenericService.signout();
  }

  ngOnInit() {
    this.user$ = this.userStore.user$;
  }
}

