import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { QuizServiceService, Quiz } from '../services/quiz-service.service';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton } from '@angular/material';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

// Object Interface for data



@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})


export class DisplayQuizComponent implements OnInit {
  formControl = new FormControl('');
  x = 0;
  matButton: MatButton;
  selectedRadio: string;
  userAnswers: any[] = [];
  token;
  quiz: Quiz = {
    title: '',
    description: '',
    questions: []
  };
  currentQuestion;
  currentChoices;
  correctAnswer;
  selectedAnswer;
  userAnswerText: any[] = [];
  userScore: any = {
    score: ''
  };
  correctAnswerText;
  nextButton: Boolean = false;


  constructor(private questionService: QuizServiceService) { }



  // hard coded json for testing
  // quizTestData: Quiz = {
  //   title: 'HTML Quiz',
  //   description: 'This is a quiz here',
  //   questions: [
  //     {
  //       type: 'asfasf'
  //       prompt: 'What does HTML Stand for?',
  //       choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Make Text Made Language'],
  //       correct: 'Hyper Text Markup Language'
  //     },
  //     {
  //       prompt: 'Which character is used to indicate an end tag?',
  //       choices: ['/', '^', '*', '<'],
  //       correct: '/'
  //     },
  //     {
  //       prompt: 'How can you make a numbered list?',
  //       choices: ['<ul>', '<list>', '<nl>', '<ol>'],
  //       correct: '<ol>'
  //     }
  //   ]
  // };


  // isolating the page question



  ngOnInit() {

      this.quiz = this.questionService.quiz;
      this.currentQuestion = this.quiz.questions[this.x].prompt;
      this.currentChoices = this.quiz.questions[this.x].choices;
      this.correctAnswer = this.quiz.questions[this.x].correct;
      console.log(this.quiz);
    // });
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
      this.currentQuestion = this.quiz[`questions`][this.x].prompt;
      this.currentChoices = this.quiz[`questions`][this.x].choices;
      this.correctAnswer = this.quiz[`questions`][this.x].correct;
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
    this.currentQuestion = this.quiz[`questions`][this.x].prompt;
    this.currentChoices = this.quiz[`questions`][this.x].choices;
    this.correctAnswer = this.quiz[`questions`][this.x].correct;
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
  this.questionService.getUserQuizScores(this.userAnswers).subscribe(res =>{
    console.log(res);
    this.userScore = res;
});
}

}

