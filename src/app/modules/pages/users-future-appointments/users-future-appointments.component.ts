import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { Appointment } from '../../hospital/model/appointment.model';
import { AppointmentService } from '../../hospital/services/appointment.service';
import { UserService } from '../../hospital/services/user.service';

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
    private userService: UserService
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
}
