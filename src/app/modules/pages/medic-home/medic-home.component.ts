import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medic-home',
  templateUrl: './medic-home.component.html',
  styleUrls: ['./medic-home.component.css'],
})
export class MedicHomeComponent implements OnInit {
  loggedInUser: User | null = null;
  genderText: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.genderText = this.loggedInUser?.gender === 0 ? 'Female' : 'Male';
  }

  goToCreateHealthReview() {
    this.router.navigate(['/create-health-review']);
  }

  goToCreateNewBlog() {
    this.router.navigate(['/new-medic-blog']);
  }

  goToWaitingInformation() {
    this.router.navigate(['/waiting-information']);
  }
}
