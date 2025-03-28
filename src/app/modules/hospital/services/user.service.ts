import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUser: User | null = null;
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUser = JSON.parse(storedUser);
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiHost + 'api/users', {
      headers: this.headers,
    });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiHost + 'api/users/' + id, {
      headers: this.headers,
    });
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/users/' + id, {
      headers: this.headers,
    });
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/users', user, {
      headers: this.headers,
    });
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/users/' + user.id, user, {
      headers: this.headers,
    });
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post(this.apiHost + 'api/users/login', body, {
      headers: this.headers,
    });
  }

  setLoggedInUser(user: User | null) {
    this.loggedInUser = user;
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('loggedInUser');
    }
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  getUsersByGuidanceForUser(userId: number): Observable<User[]> {
    return this.http.get<User[]>(
      this.apiHost + 'api/users/' + userId + '/guidance-users',
      {
        headers: this.headers,
      }
    );
  }

  updateNumberOfDeclines(
    userId: number,
    numberOfDeclines: number
  ): Observable<User> {
    const url = `${this.apiHost}api/users/update-declines/${userId}`;

    const updatedUser = { numberOfDeclines };

    return this.http.put<User>(url, updatedUser, {
      headers: this.headers,
    });
  }

  getAllBadUsers(): Observable<User[]> {
    const url = `${this.apiHost}api/users/all-bad-users`;

    return this.http.get<User[]>(url, {
      headers: this.headers,
    });
  }

  blockUser(userId: number): Observable<User> {
    const url = `${this.apiHost}api/users/block-user/${userId}`;

    return this.http.put<User>(url, null, {
      headers: this.headers,
    });
  }
}
