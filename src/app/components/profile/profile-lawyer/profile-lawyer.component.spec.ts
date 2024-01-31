import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLawyerComponent } from './profile-lawyer.component';

describe('ProfileLawyerComponent', () => {
  let component: ProfileLawyerComponent;
  let fixture: ComponentFixture<ProfileLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
