import { AuthGenericService } from '../../shared/services/auth-generic.service';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz-service';
import { UserStoreService } from '../../shared/services/user-store.service';
import { async } from '@angular/core/testing';

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
  user$


  constructor(private authService: AuthGenericService, private quizService: QuizService, public userStore: UserStoreService) { }

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
    this.user$ = this.userStore.user$;
    this.getScores();
    this.getAdminScores();
  }
}
