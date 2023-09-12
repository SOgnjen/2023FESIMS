import { Component, OnInit } from '@angular/core';
import { User } from '../../hospital/model/user.model';
import { UserService } from '../../hospital/services/user.service';
import { AppointmentService } from '../../hospital/services/appointment.service';
import { Router } from '@angular/router';
import { Appointment } from '../../hospital/model/appointment.model';
import { GuidanceTo } from '../../hospital/model/guidance-to.enum';

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
      return;
    }

    const parsedDate = new Date(this.selectedAppointmentDate);

    if (!isNaN(parsedDate.getTime())) {
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

              // Update the logged-in user's guidance to None
              if (this.loggedInUser) {
                this.loggedInUser.guidance = GuidanceTo.None;
                this.userService.updateUser(this.loggedInUser).subscribe(
                  () => {
                    console.log('Guidance updated to None for logged-in user.');
                  },
                  (error) => {
                    console.error('Error updating guidance:', error);
                  }
                );
              }
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
          console.log('Appointment reserved successfully.', response);
        },
        (error) => {
          console.error('Error reserving appointment:', error);
        }
      );
  }

  closeAppointmentDetails(): void {
    this.appointment = null;
    this.noAppointmentsFound = true;
  }
}
