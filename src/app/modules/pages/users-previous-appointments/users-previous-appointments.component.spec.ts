import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPreviousAppointmentsComponent } from './users-previous-appointments.component';

describe('UsersPreviousAppointmentsComponent', () => {
  let component: UsersPreviousAppointmentsComponent;
  let fixture: ComponentFixture<UsersPreviousAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPreviousAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersPreviousAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
