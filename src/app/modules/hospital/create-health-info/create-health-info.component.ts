import { Component, OnInit } from '@angular/core';
import { HealthInfo } from '../model/health-info.model';
import { HealthInfoService } from '../services/health-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-health-info',
  templateUrl: './create-health-info.component.html',
  styleUrls: ['./create-health-info.component.css'],
})
export class CreateHealthInfoComponent {
  public healthInfo: HealthInfo = new HealthInfo();

  constructor(
    private healthInfoService: HealthInfoService,
    private router: Router
  ) {}

  public createHealthInfo() {
    if (!this.isValidInput()) return;
    if (!this.healthInfo.lastMenstruation) {
      this.healthInfo.lastMenstruation = new Date('1900-01-01');
    }
    this.healthInfoService
      .createHealthInfo(this.healthInfo)
      .subscribe((res) => {
        this.router.navigate(['/home']);
      });
  }

  private isValidInput(): boolean {
    return (
      this.healthInfo?.ownersJmbg.toString() != '' &&
      this.healthInfo?.fatPercentage.toString() != ''
    );
  }
}
