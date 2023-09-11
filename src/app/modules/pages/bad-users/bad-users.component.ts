import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-bad-users',
  templateUrl: './bad-users.component.html',
  styleUrls: ['./bad-users.component.css'],
})
export class BadUsersComponent implements OnInit {
  badUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllBadUsers().subscribe(
      (users) => {
        this.badUsers = users;
      },
      (error) => {
        console.error('Error fetching bad users:', error);
      }
    );
  }

  toggleBlockUser(user: User) {
    this.userService.blockUser(user.id).subscribe(
      (updatedUser) => {
        // User has been successfully blocked/unblocked
        // Update the user's status locally
        user.isBlocked = updatedUser.isBlocked;

        // Toggle the button text
        const button = document.getElementById(`blockButton_${user.id}`);
        if (button) {
          button.textContent = updatedUser.isBlocked ? 'Unblock' : 'Block';
        }
      },
      (error) => {
        console.error('Failed to block/unblock user:', error);
      }
    );
  }
}
