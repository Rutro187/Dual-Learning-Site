import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGuard } from '../shared/guards/user.guard';
import { TeacherGuard } from '../shared/guards/teacher.guard';
import { AdminGuard } from '../shared/guards/admin.guard';
import { LearningAppComponent } from './learning-app.component';


const routes: Routes = [

  { path: 'quiz-app', children: [
  { path: '', component: LearningAppComponent },
  
]}];

export const QuizAppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
