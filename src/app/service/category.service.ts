import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService<Category> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://localhost:44397/api/Categories');
  }

  getByName(name: string): Observable<ListResponseModel<Category>> {
    let url = 'https://localhost:44397/api/Categories/getbyname?name=' + name;
    return this.httpClient.get<ListResponseModel<Category>>(url);
  }
}
