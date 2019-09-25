import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';
import { NavbarService } from '../navbar.service';

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

    dialogRef.afterClosed().subscribe(result => {})
    //   this.allIncome = [...this.addService.allIncome];
    // });
  }
  ngOnInit() {
  }
}

