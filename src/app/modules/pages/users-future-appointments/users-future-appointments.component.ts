import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { Appointment } from '../../hospital/model/appointment.model';
import { AppointmentService } from '../../hospital/services/appointment.service';
import { UserService } from '../../hospital/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-future-appointments',
  templateUrl: './users-future-appointments.component.html',
  styleUrls: ['./users-future-appointments.component.css'],
})
export class UsersFutureAppointmentsComponent implements OnInit {
  user: User | null = null;
  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();

    this.fetchUserFutureAppointments();
  }

  fetchUserFutureAppointments() {
    if (this.user?.jmbg) {
      this.appointmentService
        .getFutureAppointments(this.user.jmbg)
        .subscribe((appointments) => {
          console.log('Future Appointments:', appointments); // Log the future appointments
          this.appointments = appointments;
        });
    }
  }

  declineAppointment(appointmentId: number): void {
    this.appointmentService.declineAppointment(appointmentId).subscribe(
      (response) => {
        console.log('Appointment declined successfully:', response);

        if (this.user) {
          this.userService
            .updateNumberOfDeclines(
              this.user.id,
              this.user.numberOfDeclines + 1
            )
            .subscribe(
              (updatedUser) => {
                console.log(
                  'User updated with new numberOfDeclines:',
                  updatedUser
                );
              },
              (error) => {
                console.error('Error updating user:', error);
              }
            );
        }
      },
      (error) => {
        console.error('Error declining appointment:', error);
      }
    );
  }
}
