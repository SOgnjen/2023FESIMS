import { Component, OnInit } from '@angular/core';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onLoginSubmit(): void {
    this.errorMessage = ''; // Clear any previous error message

    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        (response) => {
          // Handle successful login here, e.g., navigate to another page
          console.log('Successful login:', response);
        },
        (error) => {
          // Handle login error here and display a message
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
