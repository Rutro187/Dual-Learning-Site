import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from './shared/common.module';
import { SharedServicesModule } from './shared/shared-service.module';
import { QuizAppModule } from './quiz-app/quiz-app.module';
import { AdminComponent } from './admin/admin.component';
import { LearningAppModule } from './learning-app/learning-app.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterFormComponent,
    AdminComponent
  ],
  imports: [
    QuizAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    LearningAppModule,
    SharedServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
