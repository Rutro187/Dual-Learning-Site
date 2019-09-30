import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizGuardComponent } from './quiz-guard/quiz-guard.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

import { AdminComponent } from './admin/admin.component';
import { OwnerGuard } from './guards/owner.guard';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterFormComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'quiz-form', component: QuizFormComponent },
  // { path: 'quiz-guard', component: QuizGuardComponent},
  // { path: 'take-quiz',  component: DisplayQuizComponent },
  // { path: 'admin', component: AdminComponent }
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'quiz-form', component: QuizFormComponent },
  { path: 'quiz-guard', component: QuizGuardComponent},
  { path: 'take-quiz/:id',  component: DisplayQuizComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'my-quizzes', component: MyQuizzesComponent},
  { path: 'quiz-results', component: QuizResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
