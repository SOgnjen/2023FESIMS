import { TestBed } from '@angular/core/testing';

import { HealthInfoService } from './health-info.service';

describe('HealthInfoService', () => {
  let service: HealthInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
