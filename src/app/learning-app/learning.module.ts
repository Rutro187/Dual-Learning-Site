import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '../shared/common.module';
import { MaterialModule } from '../shared/material.module';
import { SharedServicesModule } from '../shared/shared-service.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SharedServicesModule
  ]
})
export class AppModule { }
