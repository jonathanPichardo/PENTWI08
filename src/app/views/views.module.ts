import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ViewsRoutingModule } from './views-routing.module';
import { StudentsModule } from './students/students.module';

@NgModule({
  imports: [
    ViewsRoutingModule,
    StudentsModule
  ],
  exports: [
    RouterModule,
    StudentsModule
  ]
})
export class ViewsModule { }
