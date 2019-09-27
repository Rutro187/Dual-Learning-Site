import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class QuizServiceService {
  quizCollection: AngularFirestoreCollection<Quiz>;
  quizDoc: AngularFirestoreDocument<Quiz>;
  resultsCollection: AngularFirestoreCollection<Results>
  resultsDoc: AngularFirestoreDocument<Results>

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute) { 
    this.quizCollection = this.afs.collection('quiz');
    this.resultsCollection = this.afs.collection('results');
  }

  postQuiz(quiz) {
    this.quizCollection.add(quiz);
  }

  getStudentsByQuizId(id) {
    // return this.http.get(`/quizzes/getScoresAdmin/${id}`)
  }

  getQuizByAdmin(creatorId) {
    return this.afs.collection('quiz', ref => ref.where('creatorId', '==', creatorId)).snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as Quiz;
        const id = x.payload.doc.id;
        return { id, ...data}  
      })
    }))
  }

  quiz: Quiz;
  errorMsg: string;
  token: string;

  getAllQuizes() {
    return this.quizCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as any
        const id = x.payload.doc.id
        return { id, ...data}
      })
    }))
  }

  getQuizByToken(id: string) {
    this.quizDoc = this.afs.doc<Quiz>(`quiz/${id}`);
    console.log(this.quizDoc);
    return this.quizDoc.valueChanges();
  }

  getAllData(apiItem: String): any {
    // return this.http.get(this.baseURL+apiItem, {responseType: 'json'}); 
  }

  getQuizResultsByQuizId(id) {
    return this.afs.collection('results', ref => ref.where('quizId', '==', id)).snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data() as Results;
        const id = x.payload.doc.id;
        return { id, ...data}  
      })
    }))  
  }

  postUserAnswersByQuizId() {
    // return this.http.post("/quizzes/postAnswersByQuizId", Observable);
  }

  getUserQuizScores(userAnswers) {
    let request = {
      answers: userAnswers,
      token: this.token,
      userId: "1",
    }
    // return this.http.post('/quizzes/getScore', request);
  }
  getAllUserQuizScores() {
    // return this.http.post("quizzes/getAllUserScoresByQuizId", Observable);
  }


}

export interface Quiz {
  title?: string
  description?: string
  questions?: Array<Questions>
  creator?: string
}

export interface Questions {
  answers?: []
  correct?: number
  points?: number
  title?: string
  type?: string
}

export interface Results {
  quizId: string
  score: number
  userId: string
  userName: string
  date: string
}
