import { Component, OnInit } from '@angular/core';
import { BloodAppointmentService } from '../../hospital/services/blood-appointment.service';

@Component({
  selector: 'app-reserve-blood-appointment',
  templateUrl: './reserve-blood-appointment.component.html',
  styleUrls: ['./reserve-blood-appointment.component.css'],
})
export class ReserveBloodAppointmentComponent implements OnInit {
  freeBloodAppointments: any[] = [];
  ownerJmbgs: { [key: number]: number } = {};

  constructor(private bloodAppointmentService: BloodAppointmentService) {}

  ngOnInit(): void {
    this.bloodAppointmentService
      .getAllFreeBloodAppointments()
      .subscribe((appointments) => {
        this.freeBloodAppointments = appointments;
      });
  }

  reserveAppointment(appointment: any, ownerJmbg: number): void {
    if (ownerJmbg === 0) {
      alert('Please enter your JMBG.');
      return;
    }

    appointment.OwnerJmbg = ownerJmbg;
    this.bloodAppointmentService
      .reserveBloodAppointment(appointment, ownerJmbg)
      .subscribe(
        (response) => {
          console.log('Appointment reserved:', response);
        },
        (error) => {
          console.error('Reservation failed:', error);
        }
      );
  }
}
