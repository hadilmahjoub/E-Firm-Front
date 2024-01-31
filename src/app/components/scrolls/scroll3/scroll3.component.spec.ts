import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scroll3Component } from './scroll3.component';

describe('Scroll3Component', () => {
  let component: Scroll3Component;
  let fixture: ComponentFixture<Scroll3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scroll3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scroll3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
