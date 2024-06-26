import { Injectable } from '@angular/core';
import { LoginModel } from './login-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) { }

  login(credentials: LoginModel): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }
}
