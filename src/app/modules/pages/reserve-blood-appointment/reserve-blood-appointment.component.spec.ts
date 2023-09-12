import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveBloodAppointmentComponent } from './reserve-blood-appointment.component';

describe('ReserveBloodAppointmentComponent', () => {
  let component: ReserveBloodAppointmentComponent;
  let fixture: ComponentFixture<ReserveBloodAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveBloodAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveBloodAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
