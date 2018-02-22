import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { switchMap, takeUntil, first } from 'rxjs/operators';

import { WriteStudentDto, StudentsService, ReadStudentDto } from '../services/students.service';
import { StudentSelectionService } from '../services/student-selection.service';

@Component({
    selector: 'app-student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnDestroy {

    private ngUnsubscribe = new Subject < void > ();

    private currentStudentId: string;
    public student: WriteStudentDto = new WriteStudentDto();

    constructor(
        private readonly studentService: StudentsService,
        private readonly studentSelectionService: StudentSelectionService
    ) {}

    ngOnInit() {

        this.studentSelectionService.selectedStudentId$
            .pipe(
                takeUntil(this.ngUnsubscribe),
                switchMap(id => this.studentService.getById(id).pipe(first()))

            )
            .subscribe((studentDto: ReadStudentDto) => {
                let { id, ...student } = studentDto;

                this.currentStudentId = id;
                this.student = student;
            });

    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    save() {

        this.currentStudentId ?
            this.studentService.update(this.currentStudentId, this.student) :
            this.studentService.add(this.student);

        this.student = new WriteStudentDto();
        this.currentStudentId = '';
    }

}
