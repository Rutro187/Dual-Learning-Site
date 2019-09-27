import { QuizServiceService, Quiz, Results, Questions } from '../services/quiz-service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { QuizGuardComponent } from '../quiz-guard/quiz-guard.component';

// Object Interface for data



@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})


export class DisplayQuizComponent implements OnInit {

  quizId: string = this.route.snapshot.paramMap.get('id');
  creator: string;
  description: string;
  questions: Object[];
  title: string;
  correct: number;

  formControl = new FormControl('');
  x = 0;
  matButton: MatButton;

  selectedRadio: string;

  userAnswers: number[] = [];
  correctAnswers: number[] = [];
  numberCorrect: number = 0;
  percent;
  completed = false;

  token;
  quiz: Quiz;
  selectedAnswer;
  userScore: any = {
    score: ''
  };
  correctAnswerText;
  nextButton: Boolean = false;


  constructor(private quizService: QuizServiceService, private route: ActivatedRoute, public dialog: MatDialog) { 
  }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.quizService.getQuizByToken(id).subscribe(data => {
      this.quiz = data;
      this.userAnswers.length = this.quiz.questions.length;
      this.getCorrectAnswers();
    });
    
  }

  onSelectionChange(j, i) {
    this.userAnswers[j] = i;
    console.log(this.userAnswers);
  }

  getCorrectAnswers() {
    for (let i = 0; i < this.quiz.questions.length; i++) {
      let x = this.quiz.questions[i].correct;
      this.correctAnswers.push(x);
      console.log(this.correctAnswers);
    }
  }

  submitButton() {
    this.getCorrectAnswers();
    this.compare(this.userAnswers, this.correctAnswers);
    this.getScore();
    this.completed = true;
    document.getElementById('thankYou').id = 'visible';
    document.getElementById('submitButton').id = 'hidden';

    let data = {
      date: new Date(),
      quizId: this.quizId,
      score: this.percent,
      // userId: this.auth.currentUserId,
      // userName: this.auth.authState.email
    }
    this.quizService.postUserAnswers(data);
  }

  compare(userAnswers, correctAnswers) {
    for (let i = 0; i < correctAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        this.numberCorrect++;
      }
    } 
    console.log(this.numberCorrect);
  }

  getScore() {
    this.percent = ((this.numberCorrect / this.quiz.questions.length) * 100).toFixed(2);
    console.log(this.percent);
  }

  takeQuiz(): void {
    const dialogRef = this.dialog.open(QuizGuardComponent, {
      width: '60vw',
    });
    dialogRef.afterClosed()
  }

}


