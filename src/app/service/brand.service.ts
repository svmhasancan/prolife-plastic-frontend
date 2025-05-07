import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Brand>> {
    let url = 'https://localhost:44397/api/Brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(url);
  }

  getByName(name: string): Observable<ListResponseModel<Brand>> {
    let url = 'https://localhost:44397/api/Brands/getbyname?name=' + name;
    return this.httpClient.get<ListResponseModel<Brand>>(url);
  }
}
