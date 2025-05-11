import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

import { Notyf } from 'notyf';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailDto } from 'src/app/models/product-detail-dto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductDetailDto[];
  searchQuery: string = '';
  imageBasePath: string = 'https://localhost:44397/uploads/images/';

  private notyf = new Notyf();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const categoryId = params.get('categoryId');
    //   if (categoryId) {
    //     this.getProductsByCategoryId(categoryId.toString());
    //   } else {
    //     this.getProducts();
    //   }
    // });
  }

  getProducts(): void {
    this.productService.getProductsByDetail().subscribe((response) => {
      this.products = response.data;
    });
  }

  // getProductsByCategoryId(categoryId: string): void {
  //   this.productService.getByCategoryId(categoryId).subscribe((response) => {
  //     this.products = response.data;
  //   });
  // }

  filteredProducts(): ProductDetailDto[] {
    if (!this.searchQuery) return this.products;
    return this.products.filter((product) =>
      product.productName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  getImageUrl(product: ProductDetailDto): string {
    if (product.productImages && product.productImages.length > 0) {
      return this.imageBasePath + product.productImages[0];
    }
    return 'assets/default-image.png';
  }

  // addToCart(product: ProductDetailDto) {
  //   this.cartService.addToCart(product.);
  //   this.notyf.success('Ürün Sepete Eklendi');
  // }
}
