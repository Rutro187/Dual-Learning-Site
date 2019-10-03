import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../shared/services/user-store.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthGenericService} from '../../shared/services/auth-generic.service';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../shared/interfaces/users';

@Component({
  selector: 'app-lc-nav-bar',
  templateUrl: './lc-nav-bar.component.html',
  styleUrls: ['./lc-nav-bar.component.scss']
})

export class LcNavBarComponent implements OnInit {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  userAuth;
  user$;
  constructor(public dialog: MatDialog,
              private authGenericService: AuthGenericService,
              public userStore: UserStoreService ) {}
  
  

  signOut() {
    this.authGenericService.signout();
  }

  ngOnInit() {
    this.user$ = this.userStore.user$;
  }
}