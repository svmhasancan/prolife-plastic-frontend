import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 💡 Burası kritik
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  productForm: FormGroup;
  categories = [];
  brands = [];
  products = [];
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(0)]],
      isInStock: [false],
      description: ['', Validators.required],
    });

    this.fetchCategories();
    this.fetchBrands();
  }

  fetchCategories() {
    // Kategorileri veritabanından al
  }

  fetchBrands() {
    // Markaları veritabanından al
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      console.log(this.selectedFile);
    }
  }
}
