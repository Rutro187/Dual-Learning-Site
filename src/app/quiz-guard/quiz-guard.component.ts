import { Component, OnInit, Inject } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-guard',
  templateUrl: './quiz-guard.component.html',
  styleUrls: ['./quiz-guard.component.scss']
})
export class QuizGuardComponent implements OnInit {

  token: string;

  submit() {
    this.quizService.getQuizByToken(this.token);
    // Need to pass error back somehow
  };

  constructor(private quizService: QuizServiceService, private router: Router, public dialogRef: MatDialogRef<QuizGuardComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() { 
  }

}
 