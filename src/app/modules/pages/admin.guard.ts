import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../hospital/model/user-role.enum';
import { UserService } from '../hospital/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const loggedInUser = this.userService.getLoggedInUser();

    if (loggedInUser && loggedInUser.role === UserRole.Role_Administrator) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/home']); // Redirect to home or another page if not authorized
      return false; // Block access to the route
    }
  }
}
