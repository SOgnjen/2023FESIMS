import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFutureAppointmentsComponent } from './users-future-appointments.component';

describe('UsersFutureAppointmentsComponent', () => {
  let component: UsersFutureAppointmentsComponent;
  let fixture: ComponentFixture<UsersFutureAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFutureAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFutureAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
