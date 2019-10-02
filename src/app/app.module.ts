import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizGuardComponent} from './quiz-guard/quiz-guard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AdminComponent } from './admin/admin.component';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';

import { AuthGenericService } from './shared/services/auth-generic.service';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from './shared/common.module';
import { SharedServicesModule } from './shared/shared-service.module';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayQuizComponent,
    QuizFormComponent,
    HeaderComponent,
    DashboardComponent,
    QuizResultsComponent,
    NavBarComponent,
    LoginComponent,
    RegisterFormComponent,
    QuizGuardComponent,
    AdminComponent,
    MyQuizzesComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    SharedServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
