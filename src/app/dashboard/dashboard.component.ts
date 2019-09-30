import { AuthGenericService } from './../services/auth-generic.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';
import { NavbarService } from '../navbar.service';

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
  displayedColumns = ['score', 'email', 'datestamp',];
  canSeeMyQuizes = false;

  constructor(

    private userServ: UserService,
    public navbar: NavbarService,
    private authService: AuthGenericService
  ) { }

  getQuizzes(creatorId) {
    console.log(this.quizzes);
  }

  getScores(quizId) {
    console.log(quizId);

  }
  ngOnInit() {
    console.log('ngOnInit in the dashboard component');
    
    this.authService.getUserInfo();
  }


}
