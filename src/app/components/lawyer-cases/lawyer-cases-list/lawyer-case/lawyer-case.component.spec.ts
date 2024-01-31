import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCaseComponent } from './lawyer-case.component';

describe('LawyerCaseComponent', () => {
  let component: LawyerCaseComponent;
  let fixture: ComponentFixture<LawyerCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
