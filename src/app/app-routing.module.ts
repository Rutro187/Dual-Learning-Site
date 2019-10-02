import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'quiz-app', loadChildren: './quiz-app/quiz.module#QuizAppComponent' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
