import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGuard } from '../shared/guards/user.guard';
import { TeacherGuard } from '../shared/guards/teacher.guard';
import { AdminGuard } from '../shared/guards/admin.guard';
import { LearningAppComponent } from './learning-app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UploaderComponent } from './uploader/uploader.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { ViewContentComponent } from './view-content/view-content.component';


const routes: Routes = [

  { path: 'learning-app', children: [
  { path: '', component: LearningAppComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'uploader',  component: UploaderComponent },
  { path: 'testimonial', component: TestimonialComponent},
  { path: 'content', component: PublicContentComponent},
  // { path: '**', redirectTo: '/homepage' },
  { path: 'user', component: PublicContentComponent},
  { path: 'details/:id', component: ViewContentComponent  },
  
]}];

export const LearningAppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
