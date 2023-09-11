import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { UserHomeComponent } from './modules/pages/user-home/user-home.component';
import { AdminHomeComponent } from './modules/pages/admin-home/admin-home.component';
import { MedicHomeComponent } from './modules/pages/medic-home/medic-home.component';
import { UsersHealthInfosComponent } from './modules/pages/users-health-infos/users-health-infos.component';
import { UsersNewHealthInfoComponent } from './modules/pages/users-new-health-info/users-new-health-info.component';
import { CreateUserComponent } from './modules/hospital/create-user/create-user.component';
import { MakeReservationComponent } from './modules/pages/make-reservation/make-reservation.component';
import { CreateHealthReviewComponent } from './modules/pages/create-health-review/create-health-review.component';
import { UsersHealthReviewsComponent } from './modules/pages/users-health-reviews/users-health-reviews.component';
import { UsersPreviousAppointmentsComponent } from './modules/pages/users-previous-appointments/users-previous-appointments.component';
import { UsersFutureAppointmentsComponent } from './modules/pages/users-future-appointments/users-future-appointments.component';
import { NewMedicBlogComponent } from './modules/pages/new-medic-blog/new-medic-blog.component';
import { BadUsersComponent } from './modules/pages/bad-users/bad-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'medic-home', component: MedicHomeComponent },
  { path: 'users-health-infos', component: UsersHealthInfosComponent },
  { path: 'users-new-health-info', component: UsersNewHealthInfoComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'make-reservation', component: MakeReservationComponent },
  { path: 'create-health-review', component: CreateHealthReviewComponent },
  { path: 'users-health-reviews', component: UsersHealthReviewsComponent },
  { path: 'new-medic-blog', component: NewMedicBlogComponent },
  { path: 'bad-users', component: BadUsersComponent },
  {
    path: 'users-previous-appointments',
    component: UsersPreviousAppointmentsComponent,
  },
  {
    path: 'users-future-appointments',
    component: UsersFutureAppointmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
