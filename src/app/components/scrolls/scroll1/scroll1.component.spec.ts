import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scroll1Component } from './scroll1.component';

describe('Scroll1Component', () => {
  let component: Scroll1Component;
  let fixture: ComponentFixture<Scroll1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scroll1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scroll1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
