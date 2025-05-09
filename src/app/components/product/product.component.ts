import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

import { Notyf } from 'notyf';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  searchQuery: string = '';

  private notyf = new Notyf();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');

      if (categoryId) {
        this.getProductsByCategoryId(categoryId.toString());
      } else {
        this.getProducts();
      }
    });
  }

  getProducts(): void {
    this.productService.getAll().subscribe((response) => {
      this.products = response.data;
    });
  }

  getProductsByCategoryId(categoryId: string): void {
    this.productService.getByCategoryId(categoryId).subscribe((response) => {
      this.products = response.data;
    });
  }

  filteredProducts() {
    if (!this.searchQuery) return this.products;
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.notyf.success('Ürün Sepete Eklendi');
  }
}
