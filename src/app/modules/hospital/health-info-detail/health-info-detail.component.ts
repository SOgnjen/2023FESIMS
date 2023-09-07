import { Component, OnInit } from '@angular/core';
import { HealthInfo } from '../model/health-info.model';
import { HealthInfoService } from '../services/health-info.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-health-info-detail',
  templateUrl: './health-info-detail.component.html',
  styleUrls: ['./health-info-detail.component.css'],
})
export class HealthInfoDetailComponent implements OnInit {
  public healthInfo: HealthInfo | undefined;

  constructor(
    private healthInfoService: HealthInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.healthInfoService.getHealthInfo(params['id']).subscribe((res) => {
        this.healthInfo = res;
      });
    });
  }

  isLastMenstruationValid(): boolean {
    if (this.healthInfo?.lastMenstruation) {
      const lastMenstruationDate = new Date(this.healthInfo.lastMenstruation);
      const comparisonDate = new Date('2000-01-01');
      return lastMenstruationDate > comparisonDate;
    }
    return false;
  }
}
