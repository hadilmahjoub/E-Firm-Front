import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCaseDemandComponent } from './lawyer-case-demand.component';

describe('LawyerCaseDemandComponent', () => {
  let component: LawyerCaseDemandComponent;
  let fixture: ComponentFixture<LawyerCaseDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCaseDemandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCaseDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
