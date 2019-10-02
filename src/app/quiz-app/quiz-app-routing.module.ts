import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component'
import { QuizGuardComponent } from './quiz-guard/quiz-guard.component'
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';


import { QuizAdminComponent } from './admin/quiz-admin.component';

import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component'
import { UserGuard } from '../shared/guards/user.guard';
import { TeacherGuard } from '../shared/guards/teacher.guard';
import { AdminGuard } from '../shared/guards/admin.guard';
import { QuizAppComponent } from './quiz-app.component';

const routes: Routes = [

  { path: 'quiz-app', children: [
  { path: '', component: QuizAppComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard] },
  { path: 'quiz-form', component: QuizFormComponent, canActivate: [TeacherGuard] },
  { path: 'quiz-guard', component: QuizGuardComponent, canActivate: [UserGuard]},
  { path: 'take-quiz/:id',  component: DisplayQuizComponent, canActivate: [UserGuard]},
  { path: 'admin', component: QuizAdminComponent, canActivate: [AdminGuard]  },
  { path: 'my-quizzes', component: MyQuizzesComponent, canActivate: [TeacherGuard] },
  { path: 'quiz-results', component: QuizResultsComponent, canActivate: [UserGuard] },
  
]}];

export const QuizAppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
