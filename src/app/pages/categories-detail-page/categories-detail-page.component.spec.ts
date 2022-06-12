import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailPageComponent } from './categories-detail-page.component';

describe('CategoriesDetailPageComponent', () => {
  let component: CategoriesDetailPageComponent;
  let fixture: ComponentFixture<CategoriesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
