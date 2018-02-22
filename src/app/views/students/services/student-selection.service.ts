import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs/Subject';

@Injectable()
export class StudentSelectionService {

  private selectedStudentId = new Subject < string > ();

  public selectedStudentId$ = this.selectedStudentId.asObservable();

  constructor() {}

  onSelectedStudentIdChange(id: string) {
    this.selectedStudentId.next(id);
  }

}
