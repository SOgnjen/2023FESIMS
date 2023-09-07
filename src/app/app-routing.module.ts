import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { UserHomeComponent } from './modules/pages/user-home/user-home.component';
import { AdminHomeComponent } from './modules/pages/admin-home/admin-home.component';
import { MedicHomeComponent } from './modules/pages/medic-home/medic-home.component';
import { UsersHealthInfosComponent } from './modules/pages/users-health-infos/users-health-infos.component';
import { UsersNewHealthInfoComponent } from './modules/pages/users-new-health-info/users-new-health-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'medic-home', component: MedicHomeComponent },
  { path: 'users-health-infos', component: UsersHealthInfosComponent },
  { path: 'users-new-health-info', component: UsersNewHealthInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
