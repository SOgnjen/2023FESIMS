import { Component, OnInit } from '@angular/core';
import { HealthReview } from '../../hospital/model/health-review.model';
import { HealthReviewService } from '../../hospital/services/health-review.service';
import { HealthInfoService } from '../../hospital/services/health-info.service';

@Component({
  selector: 'app-create-health-review',
  templateUrl: './create-health-review.component.html',
  styleUrls: ['./create-health-review.component.css'],
})
export class CreateHealthReviewComponent implements OnInit {
  healthReview: HealthReview = new HealthReview();
  selectedAppointmentDate: string = '';
  showForm: boolean = false;

  healthInfo: any = {
    date: '',
    ownersJmbg: '',
    upperBloodPressure: '',
    lowerBloodPressure: '',
    sugarLevel: '',
    fatPercentage: '',
    weight: '',
    lastMenstruation: '1900-01-01',
  };

  constructor(
    private healthReviewService: HealthReviewService,
    private healthInfoService: HealthInfoService
  ) {}

  ngOnInit(): void {}

  createHealthReview() {
    this.healthReviewService.createHealthInfo(this.healthReview).subscribe(
      (response) => {
        console.log('Health review created successfully:', response);
      },
      (error) => {
        console.error('Failed to create health review:', error);
      }
    );
  }

  createHealthInfo() {
    this.healthInfoService.createHealthInfo(this.healthInfo).subscribe(
      (response) => {
        console.log('Health info created successfully:', response);
      },
      (error) => {
        console.error('Failed to create health info:', error);
      }
    );
  }
}
