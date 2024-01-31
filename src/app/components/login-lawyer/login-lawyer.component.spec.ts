import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLawyerComponent } from './login-lawyer.component';

describe('LoginLawyerComponent', () => {
  let component: LoginLawyerComponent;
  let fixture: ComponentFixture<LoginLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
