import { TestBed, inject } from '@angular/core/testing';

import { StudentSelectionService } from './student-selection.service';

describe('StudentSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSelectionService]
    });
  });

  it('should be created', inject([StudentSelectionService], (service: StudentSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
