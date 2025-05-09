import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Register } from '../models/register';
import { TokenModel } from '../models/tokenModel';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44397/api/Auth';
  constructor(private httpClient: HttpClient) {}

  register(newUser: Register): Observable<SingleResponseModel<TokenModel>> {
    let newUrl = this.apiUrl + '/register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newUrl,
      newUser
    );
  }

  login(user: Login): Observable<SingleResponseModel<TokenModel>> {
    let newUrl = this.apiUrl + '/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newUrl, user);
  }

  getUserRoles(): string[] {
    const token = localStorage.getItem('token');

    if (!token) return [];

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      const roleClaim =
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

      const roles = payload[roleClaim];

      if (!roles) return [];

      return Array.isArray(roles) ? roles : [roles];
    } catch (e) {
      return [];
    }
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
