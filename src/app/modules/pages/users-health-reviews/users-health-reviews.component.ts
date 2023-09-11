import { Component, OnInit } from '@angular/core';
import { HealthReview } from '../../hospital/model/health-review.model';
import { HealthReviewService } from '../../hospital/services/health-review.service';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-users-health-reviews',
  templateUrl: './users-health-reviews.component.html',
  styleUrls: ['./users-health-reviews.component.css'],
})
export class UsersHealthReviewsComponent implements OnInit {
  public healthReviews: HealthReview[] = [];
  public displayedColumns: string[] = [
    'id',
    'date',
    'patientJmbg',
    'diagnosis',
    'cure',
  ];

  constructor(
    private healthReviewService: HealthReviewService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const loggedInUser = this.userService.getLoggedInUser();
    if (loggedInUser) {
      const userJmbg = loggedInUser.jmbg;
      this.healthReviewService
        .getHealthReviewsByPatient(userJmbg)
        .subscribe((res) => {
          this.healthReviews = res;
        });
    }
  }
}
