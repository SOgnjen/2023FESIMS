import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MedicHomeComponent } from './medic-home/medic-home.component';
import { MatCardModule } from '@angular/material/card';
import { UsersHealthInfosComponent } from './users-health-infos/users-health-infos.component';
import { UsersNewHealthInfoComponent } from './users-new-health-info/users-new-health-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { CreateHealthReviewComponent } from './create-health-review/create-health-review.component';
import { UsersHealthReviewsComponent } from './users-health-reviews/users-health-reviews.component';
import { UsersPreviousAppointmentsComponent } from './users-previous-appointments/users-previous-appointments.component';
import { UsersFutureAppointmentsComponent } from './users-future-appointments/users-future-appointments.component';
import { NewMedicBlogComponent } from './new-medic-blog/new-medic-blog.component';
import { BadUsersComponent } from './bad-users/bad-users.component';
import { WaitingInformationsComponent } from './waiting-informations/waiting-informations.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    MedicHomeComponent,
    UsersHealthInfosComponent,
    UsersNewHealthInfoComponent,
    MakeReservationComponent,
    CreateHealthReviewComponent,
    UsersHealthReviewsComponent,
    UsersPreviousAppointmentsComponent,
    UsersFutureAppointmentsComponent,
    NewMedicBlogComponent,
    BadUsersComponent,
    WaitingInformationsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
  ],
})
export class PagesModule {}
