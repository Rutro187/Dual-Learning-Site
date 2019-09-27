import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { QuizServiceService, Quiz, Results, Questions } from '../services/quiz-service.service';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton } from '@angular/material';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { ActivatedRoute, Router } from '@angular/router';
import { BIG_ENDIAN } from 'bytebuffer';
import { map } from 'rxjs/operators';

// Object Interface for data



@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})


export class DisplayQuizComponent implements OnInit {

  quizId: string;
  creator: string;
  description: string;
  questions: Object[];
  title: string;
  correct: number;

  currentQuestion;
  currentChoices;
  correctAnswer;

  formControl = new FormControl('');
  x = 0;
  matButton: MatButton;
  selectedRadio: string;
  userAnswers: any[] = [];
  token;
  quiz: Quiz;
  selectedAnswer;
  userAnswerText: any[] = [];
  userScore: any = {
    score: ''
  };
  correctAnswerText;
  nextButton: Boolean = false;


  constructor(private quizService: QuizServiceService, private questionService: QuizServiceService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.getQuiz()
    this.currentQuestion = this.quiz.questions[this.x].title;
    this.currentChoices = this.quiz.questions[this.x].answers;
    this.quizId = this.route.snapshot.paramMap.get('id');
    this.correctAnswer = this.quiz.questions[this.x].answers[this.correct];
    // console.log(this.quiz);
    // });
  }

  getQuestions() {
  }

  getQuiz() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.quizService.getQuizByToken(id).subscribe(data => 
      this.quiz = data);
  }

  // identifying which radio button is selected
  onSelectionChange(currentChoice, i) {
    this.selectedRadio = i;
    this.selectedAnswer = currentChoice;
    console.log(this.selectedRadio);
  }

  unhideSubmitButton() {
    document.getElementById('searchsubmit').id = 'visible';
  }

  unhidePreviousButton() {
    document.getElementById('previousB').id = 'visible2';
  }

  hidePreviousButton() {
    document.getElementById('previousB').id = 'hidden2';
  }

  hideNextButton() {
    document.getElementById('nextBt').id = 'hidden';
  }

  // function that activates on click of "next button." Changes the question.
  nextQuestion() {
    this.userAnswers.push(this.selectedRadio);
    this.userAnswerText.push(this.selectedAnswer);
    console.log(this.userAnswers);
    this.x = this.x + 1;
    if (this.x < this.quiz[`questions`].length) {
      console.log('back');
      this.currentQuestion = this.quiz[`questions`][this.x].title;
      this.currentChoices = this.quiz[`questions`][this.x].answers;
      // this.correctAnswer = this.quiz[`questions`][this.x].correct;
    }
    console.log({length: this.quiz['questions'].length});
    console.log({x: this.x})
    if (this.x === 1) {
      this.unhidePreviousButton();
    }
    if (this.x === this.quiz[`questions`].length) {
      this.unhideSubmitButton();
      this.nextButton = true;
      console.log(this.nextButton);
    }
  }

  // previous button
  previousQuestion() {
    this.nextButton = false;
    this.userAnswers.pop();
    this.userAnswerText.pop();
    console.log(this.userAnswers);
    this.x = this.userAnswers.length;
    this.currentQuestion = this.quiz[`questions`][this.x].title;
    this.currentChoices = this.quiz[`questions`][this.x].answers;
    // this.correctAnswer = this.quiz[`questions`][this.x].correct;
  }

  submitButton() {
    this.getScore();
    const questionArea = document.getElementsByClassName('questionContainer')[0];
    questionArea.remove();
    document.getElementById('thankYou').id = 'visible';
    for (let z = 0; z < this.userAnswers.length; z++) {
      const correctAnswer = document.getElementById('hidden2').id = 'visible';
    
    }
  }

  onButtonChange() {
    if (this.currentQuestion.length === this.currentQuestion.length ) {
      this.hideNextButton();
    }
    if (this.currentQuestion.length === 0 ) {
      this.hidePreviousButton();
    }
  }
  getScore() {
    // this.questionService.getUserQuizScores(this.userAnswers).subscribe(res =>{
    //   console.log(res);
    //   this.userScore = res;
    // });
  }

}

