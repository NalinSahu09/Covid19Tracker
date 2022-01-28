import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19GuidelinesComponent } from './covid19-guidelines.component';

describe('Covid19GuidelinesComponent', () => {
  let component: Covid19GuidelinesComponent;
  let fixture: ComponentFixture<Covid19GuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19GuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19GuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
