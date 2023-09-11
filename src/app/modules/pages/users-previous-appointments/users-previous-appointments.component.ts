import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { Appointment } from '../../hospital/model/appointment.model';
import { AppointmentService } from '../../hospital/services/appointment.service';
import { UserService } from '../../hospital/services/user.service';

@Component({
  selector: 'app-users-previous-appointments',
  templateUrl: './users-previous-appointments.component.html',
  styleUrls: ['./users-previous-appointments.component.css'],
})
export class UsersPreviousAppointmentsComponent implements OnInit {
  user: User | null = null;
  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();

    this.fetchUserPreviousAppointments();
  }

  fetchUserPreviousAppointments() {
    if (this.user?.jmbg) {
      this.appointmentService
        .getPreviousAppointments(this.user.jmbg)
        .subscribe((appointments) => {
          console.log('Previous Appointments:', appointments); // Log the previous appointments
          this.appointments = appointments;
        });
    }
  }
}
