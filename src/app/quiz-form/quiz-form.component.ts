import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { QuizServiceService, Quiz, Questions } from '../services/quiz-service.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

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


  constructor(private quizService: QuizServiceService, private router: Router, private userServ: UserServiceService) { }

  questions: Array<Object> = [{
    title: '',
    answers: ['', ''],
    correct: 0,
    type: 'multiChoice',
    points: 0,
  }]; // array of all questions in quiz, defaults to one blank question with first answer listed as correct

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
  // onChange(event) {
  //   this.type = event.target.value;
  // }


  removeChoice(question, idx) {
    console.log(idx);
    question['answers'].splice(idx, 1);
    console.log(this.questions);
  }

  addChoice(val) {
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
      title: this.title,
      description: this.desc,
      creator: this.creator, // need to pull this data from instance
      questions: this.questions,
    };
    console.log(quiz);
    this.quizService.postQuiz(quiz).subscribe(res => {
      console.log(res);
      // this.quizToken = res;
      // this.currentQuizToken = res['token'];
    });
    this.hideCreateQuiz();
    this.showThankYou();
  }


  ngOnInit() {

  }
}
