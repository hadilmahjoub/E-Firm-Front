import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCasesComponent } from './lawyer-cases.component';

describe('LawyerCasesComponent', () => {
  let component: LawyerCasesComponent;
  let fixture: ComponentFixture<LawyerCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
