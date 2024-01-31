import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemadeComponent } from './home-remade.component';

describe('HomeRemadeComponent', () => {
  let component: HomeRemadeComponent;
  let fixture: ComponentFixture<HomeRemadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRemadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRemadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
