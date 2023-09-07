import { Component, OnInit } from '@angular/core';
import { HealthInfo } from '../model/health-info.model';
import { HealthInfoService } from '../services/health-info.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update-health-info',
  templateUrl: './update-health-info.component.html',
  styleUrls: ['./update-health-info.component.css'],
})
export class UpdateHealthInfoComponent implements OnInit {
  public healthInfo: HealthInfo | undefined = undefined;

  constructor(
    private healthInfoService: HealthInfoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.healthInfoService.getHealthInfo(params['id']).subscribe((res) => {
        this.healthInfo = res;
      });
    });
  }

  public updateHealthInfo(): void {
    if (!this.isValidInput()) return;
    this.healthInfoService
      .updateHealthInfo(this.healthInfo)
      .subscribe((res) => {
        this.router.navigate(['/healthInfos']);
      });
  }

  private isValidInput(): boolean {
    return (
      this.healthInfo?.ownersJmbg.toString() != '' &&
      this.healthInfo?.fatPercentage.toString() != ''
    );
  }
}
