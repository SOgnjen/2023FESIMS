import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../hospital/services/user.service';
import { UserRole } from '../hospital/model/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class MedicGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const loggedInUser = this.userService.getLoggedInUser();

    if (
      loggedInUser &&
      (loggedInUser.role === UserRole.Role_Medic ||
        loggedInUser.role === UserRole.Role_Dermatologist ||
        loggedInUser.role === UserRole.Role_Neurologist ||
        loggedInUser.role === UserRole.Role_Psychiatrist)
    ) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
