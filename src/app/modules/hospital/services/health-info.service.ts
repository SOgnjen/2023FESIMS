import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HealthInfo } from '../model/health-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthInfoService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getHealthInfos(): Observable<HealthInfo[]> {
    return this.http.get<HealthInfo[]>(this.apiHost + 'api/healthInfos', {
      headers: this.headers,
    });
  }

  getHealthInfo(id: number): Observable<HealthInfo> {
    return this.http.get<HealthInfo>(this.apiHost + 'api/healthInfos/' + id, {
      headers: this.headers,
    });
  }

  deleteHealthInfo(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/healthInfos/' + id, {
      headers: this.headers,
    });
  }

  createHealthInfo(healthInfo: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/healthInfos', healthInfo, {
      headers: this.headers,
    });
  }

  updateHealthInfo(healthInfo: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/healthInfos/' + healthInfo.id,
      healthInfo,
      {
        headers: this.headers,
      }
    );
  }

  getHealthInfosByOwner(ownerJmbg: number): Observable<HealthInfo[]> {
    return this.http.get<HealthInfo[]>(
      this.apiHost + 'ownersJmbg/' + ownerJmbg,
      {
        headers: this.headers,
      }
    );
  }
}
