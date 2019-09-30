import { Component, OnInit, Inject } from '@angular/core';
import { QuizService } from '../services/quiz-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-guard',
  templateUrl: './quiz-guard.component.html',
  styleUrls: ['./quiz-guard.component.scss']
})
export class QuizGuardComponent implements OnInit {
  
  quiz: any;
  token: string;

  submit() {
    this.quizService.getQuizByToken(this.token);
    // Need to pass error back somehow
  };

  constructor(private quizService: QuizService, private router: Router, public dialogRef: MatDialogRef<QuizGuardComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
    ) 
    { }

   accessQuiz(token: string) {
      this.quizService.getQuizByToken(token).subscribe(data => 
          console.log(data)
      )
      this.router.navigate([`/take-quiz/${token}`]);
      this.dialogRef.close();
  };

  ngOnInit() { 
  }

}
 