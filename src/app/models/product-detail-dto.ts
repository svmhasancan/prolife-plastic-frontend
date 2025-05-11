import { ProductImage } from './productImage';

export interface ProductDetailDto {
  productName: string;
  categoryName: string;
  brandName: string;
  isInStock: boolean;
  unitPrice: number;
  productImages: ProductImage[];
  description?: string;
}
