import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Register } from '../models/register';
import { TokenModel } from '../models/tokenModel';

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
}
