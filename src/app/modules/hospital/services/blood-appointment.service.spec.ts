import { TestBed } from '@angular/core/testing';

import { BloodAppointmentService } from './blood-appointment.service';

describe('BloodAppointmentService', () => {
  let service: BloodAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
