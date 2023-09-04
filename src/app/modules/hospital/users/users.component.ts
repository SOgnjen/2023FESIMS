import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public dataSource = new MatTableDataSource<User>();
  public displayedColumns = [
    'emails',
    'firstName',
    'lastName',
    'role',
    'address',
    'phoneNumber',
    'jmbg',
    'gender',
    'update',
    'delete',
  ];
  public users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      this.dataSource.data = this.users;
    });
  }

  public chooseUser(id: number) {
    this.router.navigate(['/users', id]);
  }

  public updateUser(id: number) {
    this.router.navigate(['/users/' + id + '/update']);
  }

  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      this.userService.getUsers().subscribe((res) => {
        this.users = res;
        this.dataSource.data = this.users;
      });
    });
  }

  public addUser() {
    this.router.navigate(['/users/add']);
  }
}
