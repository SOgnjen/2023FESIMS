import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { Router } from '@angular/router';
import { HealthInfoService } from '../../hospital/services/health-info.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  loggedInUser: User | null = null;
  genderText: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private healthInfoService: HealthInfoService
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.genderText = this.loggedInUser?.gender === 0 ? 'Female' : 'Male';
  }

  goToHealthInfos() {
    this.router.navigate(['/users-health-infos']);
  }
}
