import {
  NgModule
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';

import {
  CommonModule
} from '@angular/common';

import {
  StudentListComponent
} from './student-list/student-list.component';
import {
  StudentDetailsComponent
} from './student-details/student-details.component';

import {
  StudentsService
} from './services/students.service';
import {
  AngularFirestoreModule
} from 'angularfire2/firestore';
import {
  SharedModule
} from '../../shared/shared.module';
import {
  StudentSelectionService
} from './services/student-selection.service';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    AngularFirestoreModule
  ],
  declarations: [
    StudentListComponent,
    StudentDetailsComponent
  ],
  exports: [
    StudentListComponent,
    StudentDetailsComponent
  ],
  providers: [
    StudentsService,
    StudentSelectionService
  ]
})
export class StudentsModule {}
