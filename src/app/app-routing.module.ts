import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizGuardComponent } from './quiz-guard/quiz-guard.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { UserGuard } from './guards/user.guard';
import { TeacherGuard } from './guards/teacher.guard';

import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
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

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard] },
  { path: 'quiz-form', component: QuizFormComponent, canActivate: [TeacherGuard] },
  { path: 'quiz-guard', component: QuizGuardComponent, canActivate: [UserGuard]},
  { path: 'take-quiz/:id',  component: DisplayQuizComponent, canActivate: [UserGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]  },
  { path: 'my-quizzes', component: MyQuizzesComponent, canActivate: [TeacherGuard] },
  { path: 'quiz-results', component: QuizResultsComponent, canActivate: [UserGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
