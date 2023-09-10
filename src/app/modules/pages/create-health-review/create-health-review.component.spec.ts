import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthReviewComponent } from './create-health-review.component';

describe('CreateHealthReviewComponent', () => {
  let component: CreateHealthReviewComponent;
  let fixture: ComponentFixture<CreateHealthReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHealthReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHealthReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
