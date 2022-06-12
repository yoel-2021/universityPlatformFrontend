import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCategoriesComponent } from './register-categories.component';

describe('RegisterCategoriesComponent', () => {
  let component: RegisterCategoriesComponent;
  let fixture: ComponentFixture<RegisterCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
