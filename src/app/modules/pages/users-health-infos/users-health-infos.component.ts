import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HealthInfo } from '../../hospital/model/health-info.model';
import { HealthInfoService } from '../../hospital/services/health-info.service';
import { Router } from '@angular/router';
import { UserService } from '../../hospital/services/user.service';
import { Chart } from 'chart.js/auto';

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

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

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

          this.createChart();
        });
    }
  }

  addHealthInfo() {
    this.router.navigate(['/users-new-health-info']);
  }

  createChart(): void {
    const chartData = {
      labels: this.healthInfos.map((info) => info.date),
      datasets: [
        {
          label: 'Upper Blood Pressure',
          data: this.healthInfos.map((info) => info.upperBloodPreassure),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
        },
        {
          label: 'Lower Blood Pressure',
          data: this.healthInfos.map((info) => info.lowerBloodPreassure),
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
        },
        {
          label: 'Sugar Level',
          data: this.healthInfos.map((info) => info.sugarLevel),
          borderColor: 'rgba(255, 206, 86, 1)',
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          fill: false,
        },
        {
          label: 'Fat Percentage',
          data: this.healthInfos.map((info) => info.fatPercentage),
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
        },
        {
          label: 'Weight',
          data: this.healthInfos.map((info) => info.weight),
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          fill: false,
        },
      ],
    };

    const chartOptions: Chart.ChartOptions = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'YYYY-MM-DD',
            },
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Values',
          },
        },
      },
    };

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });
  }
}
