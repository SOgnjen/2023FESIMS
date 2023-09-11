import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHealthReviewsComponent } from './users-health-reviews.component';

describe('UsersHealthReviewsComponent', () => {
  let component: UsersHealthReviewsComponent;
  let fixture: ComponentFixture<UsersHealthReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHealthReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersHealthReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
