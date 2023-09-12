import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BloodAppointment } from '../model/blood-appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BloodAppointmentService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getAllBloodAppointments(): Observable<BloodAppointment[]> {
    return this.http.get<BloodAppointment[]>(
      this.apiHost + 'api/bloodappointment',
      {
        headers: this.headers,
      }
    );
  }

  getBloodAppointment(id: number): Observable<BloodAppointment> {
    return this.http.get<BloodAppointment>(
      this.apiHost + 'api/bloodappointment/' + id,
      {
        headers: this.headers,
      }
    );
  }

  deleteBloodAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/bloodappointment/' + id, {
      headers: this.headers,
    });
  }

  createBloodAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(
      this.apiHost + 'api/bloodappointment',
      appointment,
      {
        headers: this.headers,
      }
    );
  }

  updateBloodAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/bloodappointment/' + appointment.id,
      appointment,
      {
        headers: this.headers,
      }
    );
  }

  getAllFreeBloodAppointments(): Observable<BloodAppointment[]> {
    return this.http.get<BloodAppointment[]>(
      this.apiHost + 'api/bloodappointment/free',
      {
        headers: this.headers,
      }
    );
  }

  reserveBloodAppointment(
    bloodAppointment: BloodAppointment,
    userJmbg: number
  ): Observable<any> {
    const requestDto = {
      BloodAppointment: bloodAppointment,
      UserJmbg: userJmbg,
    };

    return this.http.post<any>(
      this.apiHost + 'api/bloodappointment/reserve',
      requestDto,
      {
        headers: this.headers,
      }
    );
  }
}
