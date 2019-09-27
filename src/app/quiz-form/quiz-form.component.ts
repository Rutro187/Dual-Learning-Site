import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { QuizService, Quiz, Questions } from '../services/quiz-service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { AuthGenericService } from '../services/auth-generic.service';

// export class RadioNgModelExample {


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  title: string; // Question itself
  answers: Array<string>; // Array of answers, entered by creator
  correct: number; // index of answers array with correct answer
  type: string; // type of question, multiChoice, trueFalse
  points: number; // number of points question is worth
  creator: string; // ID of who is making the quiz
  quizTitle: string; // title of quiz
  desc: string; // description of quiz


  constructor(private quizService: QuizService, private router: Router, private authService: AuthGenericService) { }

  questions: Array<Object> = [{
    title: '',
    answers: ['', ''],
    correct: 0,
    type: 'multiChoice',
    points: 0,
  }]; // array of all questions in quiz, defaults to one blank question with first answer listed as correct

  trackByFn(index: any, item: any) {
    return index;
 }

  removeQuestion(idx) {
    this.questions.splice(idx, 1)
  }

  addQuestion() {
    this.questions.push({
      title: '',
      answers: ['', ''],
      correct: 0,
      type: 'multiChoice',
      points: 0,
    })
    console.log(this.questions);

  }
  
  removeAnswer(question, idx) {
    console.log(idx);
    question['answers'].splice(idx, 1);
    console.log(this.questions);
  }

  addAnswer(val) {
    this.questions[val]['answers'].push('');

  }
  hideCreateQuiz() {
    let sideBar = document.getElementById('sideBarContent');
    sideBar.remove();
  }

  showThankYou() {
    document.getElementById('thankYou').id = 'visible';
  }
  dashboardButton() {
    this.router.navigate(['/dashboard']);
  }
  quizFormSubmit() {
    let quiz: any = {
      title: this.quizTitle,
      description: this.desc,
      creator: this.authService.getUserInfo().uid,
      questions: this.questions
    };
    console.log(quiz);
      // this.quizToken = res;
      // this.currentQuizToken = res['token'];
    this.quizService.postQuiz(quiz);
    this.hideCreateQuiz();
    this.showThankYou();
  }
  
  ngOnInit() {

  }
}
