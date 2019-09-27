import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class QuizService {
//  token: {};

  
// getQuiz(){
//   this.http.get();\

constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}



  postQuiz(quiz) {
 
}
getStudentsByQuizId(id){
 
}
getQuizByAdmin(creatorId){
 
}
quiz: Quiz;
  errorMsg: string;
token: string;
  getQuizByToken(token){
 
  }

// getAllData(apiItem: String): any {
//   return this.http.get(this.baseURL+apiItem, {responseType: 'json'}); 
//   }
  getQuizResultsByQuizId() {
    return this.http.post("/quizzes/getQuizResultsByQuizId", Observable);
  }
  postUserAnswersByQuizId() {
    return this.http.post("/quizzes/postAnswersByQuizId", Observable);
  }
getUserQuizScores(userAnswers) {
  let request = {
    answers: userAnswers,
    token: this.token,
    userId: "1",
  }
  return this.http.post('/quizzes/getScore', request);
}
getAllUserQuizScores(){
  return this.http.post("quizzes/getAllUserScoresByQuizId", Observable);
}


}
export interface Quiz {
  title?: string;
  description?: string;
  questions?: Array <Questions>;
}
export interface Questions {
    type?: string;
    prompt?: string;
    choices?: Array<string>;
    correct?: string;
  }
