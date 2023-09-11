import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HealthReview } from '../model/health-review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthReviewService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getHealthReviews(): Observable<HealthReview[]> {
    return this.http.get<HealthReview[]>(this.apiHost + 'api/healthReviews', {
      headers: this.headers,
    });
  }

  getHealthReview(id: number): Observable<HealthReview> {
    return this.http.get<HealthReview>(
      this.apiHost + 'api/healthReviews/' + id,
      {
        headers: this.headers,
      }
    );
  }

  deleteHealthReview(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/healthReviews/' + id, {
      headers: this.headers,
    });
  }

  createHealthInfo(healthReview: any): Observable<any> {
    return this.http.post<any>(
      this.apiHost + 'api/healthReviews',
      healthReview,
      {
        headers: this.headers,
      }
    );
  }

  updateHealthInfo(healthReview: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/healthReviews/' + healthReview.id,
      healthReview,
      {
        headers: this.headers,
      }
    );
  }

  getHealthReviewsByPatient(patientsJmbg: number): Observable<HealthReview[]> {
    return this.http.get<HealthReview[]>(
      this.apiHost + 'patientsJmbg/' + patientsJmbg,
      {
        headers: this.headers,
      }
    );
  }
}
