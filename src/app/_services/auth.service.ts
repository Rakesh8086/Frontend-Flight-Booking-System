import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:8082/authentication-service/api/auth/';
const TEST_API = 'https://localhost:8082/authentication-service/api/test/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      { username, password },
      { withCredentials: true }
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      { username, email, password },
      { withCredentials: true }
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      AUTH_API + 'signout',
      {},
      { withCredentials: true }
    );
  }

  changePassword(email: string, existingPassword: string, newPassword: string): 
  Observable<any>{
    return this.http.put(TEST_API + 'change/password',
      {
        email,
        existingPassword,
        newPassword
      },
      {
        // withCredentials: true,
        responseType: 'text' as 'json'
      },
    );
  }
}