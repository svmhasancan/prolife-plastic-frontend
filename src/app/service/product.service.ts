import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService<Product> {
  constructor(httpClient: HttpClient) {
    super(httpClient, 'https://localhost:44397/api/Products');
  }

  getByCategoryId(categoryId: string): Observable<ListResponseModel<Product>> {
    let newUrl =
      'https://localhost:44397/api/Products/getbycategoryid?categoryId=' +
      categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
}
