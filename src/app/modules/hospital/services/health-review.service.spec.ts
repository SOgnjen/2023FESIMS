import { TestBed } from '@angular/core/testing';

import { HealthReviewService } from './health-review.service';

describe('HealthReviewService', () => {
  let service: HealthReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
