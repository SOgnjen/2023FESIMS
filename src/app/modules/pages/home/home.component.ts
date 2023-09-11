import { Component, OnInit } from '@angular/core';
import { UserService } from '../../hospital/services/user.service';
import { User } from '../../hospital/model/user.model';
import { Router } from '@angular/router';
import { UserRole } from '../../hospital/model/user-role.enum';

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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
  }

  onLoginSubmit(): void {
    this.errorMessage = '';

    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        (response) => {
          console.log('Successful login:', response);
          this.loggedInUser = response.user;
          this.userService.setLoggedInUser(this.loggedInUser);

          switch (this.loggedInUser?.role) {
            case UserRole.Role_User:
              this.router.navigate(['user-home']);
              break;
            case UserRole.Role_Medic:
              this.router.navigate(['medic-home']);
              break;
            case UserRole.Role_Dermatologist:
              this.router.navigate(['medic-home']);
              break;
            case UserRole.Role_Neurologist:
              this.router.navigate(['medic-home']);
              break;
            case UserRole.Role_Psychiatrist:
              this.router.navigate(['medic-home']);
              break;
            case UserRole.Role_Administrator:
              this.router.navigate(['admin-home']);
              break;
            default:
              // Handle other roles or scenarios
              break;
          }
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
