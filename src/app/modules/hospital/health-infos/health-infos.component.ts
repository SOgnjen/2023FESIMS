import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HealthInfo } from '../model/health-info.model';
import { HealthInfoService } from '../services/health-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-infos',
  templateUrl: './health-infos.component.html',
  styleUrls: ['./health-infos.component.css'],
})
export class HealthInfosComponent implements OnInit {
  public dataSource = new MatTableDataSource<HealthInfo>();
  public displayedColumns = [
    'date',
    'ownersJmbg',
    'upperBloodPreassure',
    'lowerBloodPreassure',
    'sugarLevel',
    'fatPercentage',
    'weight',
    'lastMenstruation',
  ];
  public healthInfos: HealthInfo[] = [];

  constructor(
    private healthInfoService: HealthInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.healthInfoService.getHealthInfos().subscribe((res) => {
      this.healthInfos = res;
      this.dataSource.data = this.healthInfos;
    });
  }

  public addHealthInfo() {
    this.router.navigate(['/healthInfos/add']);
  }

  public chooseHealthInfo(id: number) {
    this.router.navigate(['/healthInfos', id]);
  }

  public updateHealthInfo(id: number) {
    this.router.navigate(['/healthInfos/' + id + '/update']);
  }

  public deleteHealthInfo(id: number) {
    this.healthInfoService.deleteHealthInfo(id).subscribe((res) => {
      this.healthInfoService.getHealthInfos().subscribe((res) => {
        this.healthInfos = res;
        this.dataSource.data = this.healthInfos;
      });
    });
  }
}
