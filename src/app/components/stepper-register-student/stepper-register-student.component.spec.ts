import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperRegisterStudentComponent } from './stepper-register-student.component';

describe('StepperRegisterStudentComponent', () => {
  let component: StepperRegisterStudentComponent;
  let fixture: ComponentFixture<StepperRegisterStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperRegisterStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperRegisterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
