import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})

export class QuizService {


constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private angularFirestore: AngularFirestore) {}
  quizCollection = this.angularFirestore.collection('quiz');


  postQuiz(quiz) {
    console.log("postquizservice", quiz);
    this.quizCollection.doc(quiz.title).set(quiz);
}
getStudentsByQuizId(id) {
 
}
getQuizByAdmin(creatorId){
 
}
quiz: Quiz;
  errorMsg: string;
token: string;
  getQuizByToken(token){
 
  }

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
  };
}
getAllUserQuizScores(){

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
