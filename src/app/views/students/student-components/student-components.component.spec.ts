import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponentsComponent } from './student-components.component';

describe('StudentComponentsComponent', () => {
  let component: StudentComponentsComponent;
  let fixture: ComponentFixture<StudentComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
