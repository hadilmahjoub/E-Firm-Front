import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scroll4Component } from './scroll4.component';

describe('Scroll4Component', () => {
  let component: Scroll4Component;
  let fixture: ComponentFixture<Scroll4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scroll4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scroll4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
