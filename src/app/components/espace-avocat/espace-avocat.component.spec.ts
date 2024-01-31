import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAvocatComponent } from './espace-avocat.component';

describe('EspaceAvocatComponent', () => {
  let component: EspaceAvocatComponent;
  let fixture: ComponentFixture<EspaceAvocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAvocatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAvocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
