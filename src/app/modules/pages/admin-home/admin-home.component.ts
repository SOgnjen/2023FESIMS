import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  loggedInUser: User | null = null;
  genderText: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.genderText = this.loggedInUser?.gender === 0 ? 'Female' : 'Male';
  }

  goToBadUsers() {
    this.router.navigate(['/bad-users']);
  }

  goToWaitingInformation() {
    this.router.navigate(['/waiting-information']);
  }
}
