import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { UserServiceService } from '../services/user-service.service';

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
  constructor(private quizService: QuizServiceService, private userServ: UserServiceService) { }
  getQuizzes(creatorId){
    this.quizService.getQuizByAdmin(creatorId).subscribe((res: Object[]) =>{
      this.quizResults = res;
      this.quizResults.forEach(quizResult => {
        this.quizzes.push(quizResult);
      })
      console.log(this.quizzes);
    })
  }
  getScores(quizId){
    console.log(quizId);
    this.quizService.getStudentsByQuizId(quizId).subscribe((res: Object[]) => {
      this.results = res['scores'];
      this.token = res['token'];
      console.log(this.results);
    })
  }
  ngOnInit() {
    this.userServ.logger.subscribe(res => {
      this.creatorId = res;
      console.log(this.creatorId);
      this.getQuizzes(this.creatorId);
    })
  }

}
