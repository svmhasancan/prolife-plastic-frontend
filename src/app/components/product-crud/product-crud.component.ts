import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  productForm: FormGroup;
  products: Product[];
  categories: Category[];
  brands: Brand[];
  selectedProduct: Product;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getCategories();
    this.getProducts();
    this.createProductForm();
  }

  getProducts() {
    this.productService.getAll().subscribe((response) => {
      this.products = response.data;
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe((response) => {
      this.categories = response.data;
    });
  }

  getCategoryName(product: Product): string {
    let deneme: Product[] = [];
    let categoryName = 'p';
    this.productService
      .getByCategoryId(product.categoryId.toString())
      .subscribe((response) => {
        deneme = response.data;
        console.log(deneme);
      });
    return categoryName;
  }

  getBrands() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getBrandName(product: Product): string {
    let brandName = '';

    return brandName;
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      isInStock: ['', Validators.required],
      unitPrice: ['', Validators.required],
      description: [''],
    });
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.productForm.patchValue({
      name: product.name,
      categoryId: product.categoryId,
      brandId: product.brandId,
      isInStock: product.isInStock,
      unitPrice: product.unitPrice,
      description: product.description,
    });
  }

  onSubmit() {
    if (this.selectedProduct) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    if (this.productForm.valid) {
      let productModel = Object.assign({}, this.productForm.value);
      this.productService.add(productModel).subscribe((response) => {
        console.log(response);
        console.log('Ürün Eklendi');
      });
    } else {
      console.log('İnputları Kontrol Et');
    }
  }

  updateProduct() {
    if (this.productForm.valid && this.selectedProduct) {
      const updatedProduct: Product = {
        ...this.selectedProduct,
        ...this.productForm.value,
      };
      this.productService.update(updatedProduct).subscribe((response) => {
        this.getProducts();
        this.clearForm();
      });
    } else {
      console.log('Inputları Kontrol Et');
    }
  }

  deleteProduct(product: Product) {
    this.productService.delete(product).subscribe((response) => {
      this.getProducts();
    });
  }

  clearForm() {
    this.productForm.reset();
  }
}
