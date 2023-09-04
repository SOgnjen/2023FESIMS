import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserRole } from '../model/user-role.enum';
import { Gender } from '../model/gender.enum';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  public UserRole = UserRole;

  public Gender = Gender;

  public user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  public createUser() {
    if (!this.isValidInput()) return;
    this.userService.createUser(this.user).subscribe((res) => {
      this.router.navigate(['/home']);
    });
  }

  private isValidInput(): boolean {
    return this.user?.emails != '' && this.user?.jmbg.toString() != '';
  }
}
