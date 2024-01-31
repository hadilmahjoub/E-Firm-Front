import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerCasesListComponent } from './lawyer-cases-list.component';

describe('LawyerCasesListComponent', () => {
  let component: LawyerCasesListComponent;
  let fixture: ComponentFixture<LawyerCasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerCasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerCasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
