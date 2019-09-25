import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';
import { NavbarService } from '../navbar.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  title = 'quizApp';
  constructor (public navbar: NavbarService, public dialog: MatDialog) {}

  takeQuiz(): void {
    const dialogRef = this.dialog.open(QuizGuardComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed()
  }

  admin(): void {
    const dialogRef = this.dialog.open(AdminComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed()
  }

  ngOnInit() {
  }
}

