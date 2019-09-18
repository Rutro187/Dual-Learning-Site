import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { QuizServiceService, Quiz, Questions } from '../services/quiz-service.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  quizTitle;
  quizDescription;
  quizInstructions;
  quizQuestions;
  correctAnswers;
  currentQuizToken;
  quizToken;


  constructor( private quizService: QuizServiceService, private router: Router, private userServ: UserServiceService) { }

  questions: Array<Object> = [
    {
      type: "multi",
      prompt: "",
      choices: [],
      correct: "",

    }
  ]

  types: string[] = ["multi"]

  title = ""
  description = ""
  instructions = ""

  trackByFn(index: any, item: any) {
    return index;
 }
  removeQuestion(idx) {
    this.questions.splice(idx, 1)
  }

  addQuestion() {
    this.questions.push({
      type: "multi",
      prompt: "",
      choices: [],
      correct: "",

    })
  }

  removeChoice(question, cidx) {
    console.log(cidx);
   question['choices'].splice(cidx, 1);
   console.log(this.questions);
  }

  addChoice(val) {
    console.log(this.questions[val]);
    this.questions[val]['choices'].push('');

  }
hideCreateQuiz(){
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
      description: this.quizDescription,
      instrutions: this.quizInstructions,
      questions: this.questions,
      // creatorId: this.userServ.logger,
      creatorId: 20
    };
    console.log(quiz);
    this.quizService.postQuiz(quiz).subscribe(res => {
      console.log(res);
      this.quizToken = res;
      this.currentQuizToken = res['token'];
    });
    this.hideCreateQuiz();
this.showThankYou();
  }


  ngOnInit() {

  }
}
