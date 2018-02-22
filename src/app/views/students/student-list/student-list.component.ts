import {
  Component,
  OnInit
} from '@angular/core';
import {
  StudentsService,
  WriteStudentDto,
  ReadStudentDto
} from '../services/students.service';

import {
  StudentSelectionService
} from '../services/student-selection.service';
import {

  Observable
} from 'rxjs/Observable';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public columnsToDisplay = ['studentNumber', 'firstName', 'lastName', 'email', 'actions']

  public students$: Observable < ReadStudentDto[] > ;

  constructor(
    private readonly studentsService: StudentsService,
    private readonly studentSelectionService: StudentSelectionService,
  ) {}

  ngOnInit() {

    this.students$ = this.studentsService.getAll();

  }


  onEdit(student: ReadStudentDto) {
    console.log('On Edit');
    this.studentSelectionService.onSelectedStudentIdChange(student.id);
  }

  onDelete(student: ReadStudentDto) {
    this.studentsService.delete(student.id);
  }

}
