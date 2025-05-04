import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

export class BaseService<T> {
  constructor(protected httpClient: HttpClient, protected apiUrl: string) {}

  getAll(): Observable<ListResponseModel<T>> {
    return this.httpClient.get<ListResponseModel<T>>(this.apiUrl);
  }
}
