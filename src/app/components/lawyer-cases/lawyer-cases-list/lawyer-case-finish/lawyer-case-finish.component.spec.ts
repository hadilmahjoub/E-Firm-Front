import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCaseFinishComponent } from './lawyer-case-finish.component';

describe('LawyerCaseFinishComponent', () => {
  let component: LawyerCaseFinishComponent;
  let fixture: ComponentFixture<LawyerCaseFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCaseFinishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCaseFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
