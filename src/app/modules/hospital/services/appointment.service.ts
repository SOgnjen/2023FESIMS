import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/appointments', {
      headers: this.headers,
    });
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiHost + 'api/appointments/' + id, {
      headers: this.headers,
    });
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/appointments/' + id, {
      headers: this.headers,
    });
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/appointments', appointment, {
      headers: this.headers,
    });
  }

  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/appointments/' + appointment.id,
      appointment,
      {
        headers: this.headers,
      }
    );
  }

  findAppointment(
    doctorJmbg: number,
    date: Date,
    priority: number
  ): Observable<Appointment | null> {
    const url = this.apiHost + 'api/appointments/find';

    const body = {
      DoctorJmbg: doctorJmbg,
      Date: date.toISOString(),
      Priority: priority,
    };

    return this.http.post<Appointment | null>(url, body, {
      headers: this.headers,
    });
  }

  reserveAppointmentTextResponse(
    appointmentId: number | undefined,
    userJmbg: number | undefined
  ): Observable<string> {
    if (appointmentId && userJmbg) {
      const url = `${this.apiHost}api/appointments/reserve/${appointmentId}`;

      const body = {
        PatientJmbg: userJmbg,
      };

      return this.http.post(url, body, {
        headers: this.headers,
        responseType: 'text', // Set responseType to 'text'
      });
    } else {
      console.error('Invalid appointmentId or userJmbg.');
      return of('Invalid appointmentId or userJmbg.'); // Return an observable with an error message
    }
  }

  getPreviousAppointments(patientJmbg: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.apiHost}api/appointments/previous/${patientJmbg}`,
      {
        headers: this.headers,
      }
    );
  }

  getFutureAppointments(patientJmbg: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.apiHost}api/appointments/future/${patientJmbg}`,
      {
        headers: this.headers,
      }
    );
  }

  declineAppointment(appointmentId: number): Observable<string> {
    const url = `${this.apiHost}api/appointments/decline/${appointmentId}`;

    return this.http.post(url, null, {
      headers: this.headers,
      responseType: 'text',
    });
  }
}
