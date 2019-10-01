import { AuthGenericService } from './../services/auth-generic.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { QuizService } from '../services/quiz-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  creatorId: Number;
  quizzes: Object[] = [];
  quizResults: Object[] = [];
  results: Object[] = [];
  token;
  displayedColumns = ['score', 'email', 'datestamp', ];
  canSeeMyQuizes = false;

  userQuizes: Object[] = [];
  adminScores: Object[] = [];
  permission: string = '';


  constructor(public navbar: NavbarService, private authService: AuthGenericService, private quizService: QuizService) { }

  getQuizzes(creatorId) {
    console.log(this.quizzes);
  }

  getScores() {
    let id = this.authService.getUserInfo().uid;
    return this.quizService.getQuizResultsByUserId(id).subscribe(data => {
      this.userQuizes = data;
    })
  }

  getAdminScores() {
    let creatorId = this.authService.getUserInfo().uid;
    return this.quizService.getResultsByAdmin(creatorId).subscribe(data => {
      this.adminScores = data;
    });
  }

  ngOnInit() {
    this.permission = this.authService.userAuth.permission;
    console.log(this.permission);
    this.getScores();
    this.getAdminScores();
  }
}
