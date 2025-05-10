import { ProductImage } from './productImage';

export interface ProductDetailDto {
  productName: string;
  categoryName: string;
  brandName: string;
  unitPrice: number;
  isInStock: boolean;
  productImages: ProductImage[];
  description: string;
}
