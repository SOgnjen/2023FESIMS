import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HealthInfo } from '../../hospital/model/health-info.model';
import { HealthInfoService } from '../../hospital/services/health-info.service';
import { Router } from '@angular/router';
import { UserService } from '../../hospital/services/user.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-users-health-infos',
  templateUrl: './users-health-infos.component.html',
  styleUrls: ['./users-health-infos.component.css'],
})
export class UsersHealthInfosComponent implements OnInit {
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
  public chartData: ChartData = {
    labels: [],
    upperBloodPressure: [],
    lowerBloodPressure: [],
    sugarLevel: [],
    fatPercentage: [],
    weight: [],
  };

  constructor(
    private healthInfoService: HealthInfoService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loggedInUser = this.userService.getLoggedInUser();
    if (loggedInUser) {
      const ownersJmbg = loggedInUser.jmbg;
      this.healthInfoService
        .getHealthInfosByOwner(ownersJmbg)
        .subscribe((res) => {
          this.healthInfos = res;
          this.dataSource.data = this.healthInfos;
          this.generateChart();
        });
    }
  }

  addHealthInfo() {
    this.router.navigate(['/users-new-health-info']);
  }

  generateChart(): void {
    const canvas = document.getElementById(
      'healthInfoChart'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (ctx) {
      const dates = this.healthInfos.map(
        (info) => new Date(info.date).toISOString().split('T')[0]
      );

      const upperBloodPressure = this.healthInfos.map(
        (info) => info.upperBloodPreassure
      );
      const lowerBloodPressure = this.healthInfos.map(
        (info) => info.lowerBloodPreassure
      );
      const sugarLevel = this.healthInfos.map((info) => info.sugarLevel);
      const fatPercentage = this.healthInfos.map((info) => info.fatPercentage);
      const weight = this.healthInfos.map((info) => info.weight);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Upper Blood Pressure',
              data: upperBloodPressure,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            },
            {
              label: 'Lower Blood Pressure',
              data: lowerBloodPressure,
              borderColor: 'rgba(255, 99, 132, 1)',
              fill: false,
            },
            {
              label: 'Sugar Level',
              data: sugarLevel,
              borderColor: 'rgba(255, 159, 64, 1)',
              fill: false,
            },
            {
              label: 'Fat Percentage',
              data: fatPercentage,
              borderColor: 'rgba(54, 162, 235, 1)',
              fill: false,
            },
            {
              label: 'Weight',
              data: weight,
              borderColor: 'rgba(255, 206, 86, 1)',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Value',
              },
            },
          },
        },
      });
    }
  }
}

interface ChartData {
  labels: string[];
  upperBloodPressure: number[];
  lowerBloodPressure: number[];
  sugarLevel: number[];
  fatPercentage: number[];
  weight: number[];
}
