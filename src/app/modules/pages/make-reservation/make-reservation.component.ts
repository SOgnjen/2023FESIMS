import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { AppointmentService } from '../../hospital/services/appointment.service';
import { Router } from '@angular/router';
import { Appointment } from '../../hospital/model/appointment.model';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],
})
export class MakeReservationComponent implements OnInit {
  loggedInUser: User | null = null;
  selectedDoctorId: number | undefined;
  doctors: User[] = [];
  selectedAppointmentDate: string | undefined;
  selectedPriority: number = 1;
  appointment: Appointment | null = null;
  noAppointmentsFound: boolean = true;

  constructor(
    private userService: UserService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.loadDoctorsBasedOnGuidance();
  }

  loadDoctorsBasedOnGuidance(): void {
    if (this.loggedInUser?.id) {
      this.userService
        .getUsersByGuidanceForUser(this.loggedInUser.id)
        .subscribe(
          (doctors) => {
            this.doctors = doctors;
          },
          (error) => {
            console.error('Error loading doctors based on guidance:', error);
          }
        );
    }
  }

  formatDate(): void {
    if (!this.selectedAppointmentDate) {
      return; // Exit if selectedAppointmentDate is undefined
    }

    const parsedDate = new Date(this.selectedAppointmentDate);

    if (!isNaN(parsedDate.getTime())) {
      // Check if the parsed date is a valid Date object
      this.selectedAppointmentDate = parsedDate.toISOString().slice(0, 10);
    }
  }

  submitReservation(): void {
    if (
      this.selectedPriority !== undefined &&
      (this.selectedPriority === 1 || this.selectedPriority === 2) &&
      this.selectedAppointmentDate !== undefined
    ) {
      console.log('Button clicked');

      // Parse the selectedAppointmentDate as a Date object
      const parsedDate = new Date(this.selectedAppointmentDate);

      this.appointmentService
        .findAppointment(
          this.selectedDoctorId || 0,
          parsedDate,
          this.selectedPriority
        )
        .subscribe(
          (result) => {
            if (result) {
              this.appointment = result;
              this.noAppointmentsFound = false;
            } else {
              this.noAppointmentsFound = true;
              this.appointment = null;
            }
          },
          (error) => {
            console.error('Error finding appointment:', error);
          }
        );
    } else {
      console.error('Bad parameter: Priority should be 1 or 2.');
    }
  }

  reserveAppointmentTextResponse(
    appointmentId: number | undefined,
    userJmbg: number | undefined
  ): void {
    this.appointmentService
      .reserveAppointmentTextResponse(appointmentId, userJmbg)
      .subscribe(
        (response) => {
          // Handle the plain text response here
          console.log('Appointment reserved successfully.', response);

          // You can update your UI or perform any other necessary actions.
        },
        (error) => {
          console.error('Error reserving appointment:', error);
          // Handle the error appropriately (e.g., show an error message).
        }
      );
  }

  closeAppointmentDetails(): void {
    // Implement the logic to close the appointment details here
    // You can reset the 'appointment' and 'noAppointmentsFound' variables
    this.appointment = null;
    this.noAppointmentsFound = true;
  }
}
