import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { UserHomeComponent } from './modules/pages/user-home/user-home.component';
import { AdminHomeComponent } from './modules/pages/admin-home/admin-home.component';
import { MedicHomeComponent } from './modules/pages/medic-home/medic-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'medic-home', component: MedicHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
