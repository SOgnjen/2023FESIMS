import { Component, OnInit } from '@angular/core';
import { HealthInfo } from '../../hospital/model/health-info.model';
import { HealthInfoService } from '../../hospital/services/health-info.service';
import { Router } from '@angular/router';
import { UserService } from '../../hospital/services/user.service';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-users-new-health-info',
  templateUrl: './users-new-health-info.component.html',
  styleUrls: ['./users-new-health-info.component.css'],
})
export class UsersNewHealthInfoComponent implements OnInit {
  public healthInfo: HealthInfo = new HealthInfo();
  public loggedInUser: User | null = null;

  constructor(
    private healthInfoService: HealthInfoService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();

    if (this.loggedInUser) {
      this.healthInfo.ownersJmbg = this.loggedInUser.jmbg;
      if (this.loggedInUser.gender === 1) {
        this.healthInfo.lastMenstruation = new Date('1900-01-01');
      }
    }
  }

  public createHealthInfo() {
    if (!this.isValidInput()) return;
    this.healthInfoService
      .createHealthInfo(this.healthInfo)
      .subscribe((res) => {
        this.router.navigate(['/user-home']);
      });
  }

  private isValidInput(): boolean {
    return (
      this.healthInfo?.ownersJmbg.toString() != '' &&
      this.healthInfo?.fatPercentage.toString() != ''
    );
  }
}
