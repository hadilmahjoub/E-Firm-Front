import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRemadeComponent } from './navbar-remade.component';

describe('NavbarRemadeComponent', () => {
  let component: NavbarRemadeComponent;
  let fixture: ComponentFixture<NavbarRemadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRemadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRemadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
