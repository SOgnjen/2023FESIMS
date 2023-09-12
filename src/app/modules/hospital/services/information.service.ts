import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from '../model/information.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getInformations(): Observable<Information[]> {
    return this.http.get<Information[]>(this.apiHost + 'api/informations', {
      headers: this.headers,
    });
  }

  getInformation(id: number): Observable<Information> {
    return this.http.get<Information>(this.apiHost + 'api/informations/' + id, {
      headers: this.headers,
    });
  }

  deleteInformation(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/informations/' + id, {
      headers: this.headers,
    });
  }

  createInformation(information: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/informations', information, {
      headers: this.headers,
    });
  }

  updateInformation(information: any): Observable<any> {
    return this.http.put<any>(
      this.apiHost + 'api/informations/' + information.id,
      information,
      {
        headers: this.headers,
      }
    );
  }

  getAllAcceptedInformation(): Observable<Information[]> {
    return this.http.get<Information[]>(
      this.apiHost + 'api/informations/accepted',
      {
        headers: this.headers,
      }
    );
  }

  getAllWaitingInformation(): Observable<Information[]> {
    return this.http.get<Information[]>(
      this.apiHost + 'api/informations/waiting',
      {
        headers: this.headers,
      }
    );
  }

  acceptInformation(id: number): Observable<any> {
    return this.http.post<any>(
      this.apiHost + 'api/informations/accept/' + id,
      {},
      {
        headers: this.headers,
        observe: 'response',
      }
    );
  }

  declineInformation(id: number): Observable<any> {
    return this.http.post<any>(
      this.apiHost + 'api/informations/decline/' + id,
      {},
      {
        headers: this.headers,
        observe: 'response',
      }
    );
  }
}
