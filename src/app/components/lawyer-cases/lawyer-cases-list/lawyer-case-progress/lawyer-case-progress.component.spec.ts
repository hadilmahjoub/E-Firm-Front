import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCaseProgressComponent } from './lawyer-case-progress.component';

describe('LawyerCaseProgressComponent', () => {
  let component: LawyerCaseProgressComponent;
  let fixture: ComponentFixture<LawyerCaseProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCaseProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCaseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
