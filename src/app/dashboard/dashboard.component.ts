import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz-service';
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
  displayedColumns = ['score', 'email', 'datestamp', ];
  constructor(private quizService: QuizService, private userServ: UserService, public navbar: NavbarService) { }
  getQuizzes(creatorId){

      console.log(this.quizzes);
    }
  
  getScores(){

    }
  
  ngOnInit() {

    }
  

}
