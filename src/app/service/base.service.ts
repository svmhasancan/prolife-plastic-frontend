import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

export class BaseService<T> {
  constructor(protected httpClient: HttpClient, protected apiUrl: string) {}

  getAll(): Observable<ListResponseModel<T>> {
    let newUrl = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<T>>(newUrl);
  }

  // getByCategoryId(categoryId : number) : Observable<ListResponseModel<T>>{
  //   let newUrl = this.apiUrl +
  // }
}
