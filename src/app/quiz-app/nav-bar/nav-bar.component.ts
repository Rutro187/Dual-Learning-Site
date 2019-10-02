import { UserStoreService } from '../../shared/services/user-store.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';
import { AuthGenericService} from '../../shared/services/auth-generic.service';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../shared/interfaces/users';



@Component({
  selector: 'quiz-app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
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

  signOut() {
    this.authGenericService.signout();
  }

  ngOnInit() {
    this.user$ = this.userStore.user$;
  }
}

