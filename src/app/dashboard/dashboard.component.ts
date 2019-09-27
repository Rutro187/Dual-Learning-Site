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
  displayedColumns = ['score', 'email', 'datestamp', ];
  constructor(

    private userServ: UserService,
    public navbar: NavbarService,
    private authService: AuthGenericService
    ) { }
  isAnAdmin(){
    const status = this.authService.getUserInfo().permission;
    if (status === 'owner' || status === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  getQuizzes(creatorId){
      console.log(this.quizzes);
    }
  
  getScores(quizId){
    console.log(quizId);

  }
  ngOnInit() {

    }
  

}
