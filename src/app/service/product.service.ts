import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { BaseService } from './base.service';
import { ProductDetailDto } from '../models/product-detail-dto';

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

  getByBrandId(brandId: string): Observable<ListResponseModel<Product>> {
    let newUrl =
      'https://localhost:44397/api/Products/getbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  add(product: Product): Observable<ListResponseModel<Product>> {
    let url = 'https://localhost:44397/api/Products/add';

    return this.httpClient.post<ListResponseModel<Product>>(url, product);
  }

  update(product: Product): Observable<ListResponseModel<Product>> {
    let url = 'https://localhost:44397/api/Products/update';
    return this.httpClient.put<ListResponseModel<Product>>(url, product);
  }

  delete(product: Product): Observable<ListResponseModel<Product>> {
    let url = 'https://localhost:44397/api/Products/delete';
    return this.httpClient.delete<ListResponseModel<Product>>(url, {
      body: product,
    });
  }

  getProductsByDetail(): Observable<ListResponseModel<ProductDetailDto>> {
    let url = 'https://localhost:44397/api/Products/getproductdetails';
    return this.httpClient.get<ListResponseModel<ProductDetailDto>>(url);
  }
}
