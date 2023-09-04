import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  public user: User | undefined = undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userService.getUser(params['id']).subscribe((res) => {
        this.user = res;
      });
    });
  }

  public updateUser(): void {
    if (!this.isValidInput()) return;
    this.userService.updateUser(this.user).subscribe((res) => {
      this.router.navigate(['/users']);
    });
  }

  private isValidInput(): boolean {
    return this.user?.emails != '' && this.user?.jmbg.toString() != '';
  }
}
