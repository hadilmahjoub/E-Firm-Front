import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerTableComponent } from './lawyer-table.component';

describe('LawyerTableComponent', () => {
  let component: LawyerTableComponent;
  let fixture: ComponentFixture<LawyerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
