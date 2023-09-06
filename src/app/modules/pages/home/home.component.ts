import { Component, OnInit } from '@angular/core';
import { UserService } from '../../hospital/services/user.service';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  loggedInUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onLoginSubmit(): void {
    this.errorMessage = '';

    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        (response) => {
          console.log('Successful login:', response);
          this.loggedInUser = response.user;
        },
        (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Bad credentials';
          } else {
            this.errorMessage = 'An error occurred during login';
          }
        }
      );
    } else {
      this.errorMessage = 'Please enter both email and password.';
    }
  }
}
