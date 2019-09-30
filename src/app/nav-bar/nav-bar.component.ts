import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGenericService } from '../services/auth-generic.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  title = 'quizApp';
  constructor(public dialog: MatDialog, private authGenericService: AuthGenericService) {}
  userValidated() {
    return this.authGenericService.getUserbyID().pipe(map( user => {
      console.log(user[0].permission);
      if (user[0].permission === 'owner' || 'admin' || 'user') {
        return true;
      } else {
        return false;
      }
    }));
  }
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
  }
}

