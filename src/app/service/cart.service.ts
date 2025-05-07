import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  constructor() {
    this.loadToLocalStorage();
  }

  addToCart(product: Product) {
    let item = this.cartItems.find((c) => c.product.id == product.id);

    if (item) {
      item.quantity += 1;
    } else {
      let cartItem: CartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      this.cartItems.push(cartItem);
    }

    this.saveToLocalStorage();
  }

  list(): CartItem[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    let total = 0;

    this.cartItems.forEach((c) => {
      total += c.product.unitPrice;
    });

    return total;
  }

  removeFromCart(cartItem: CartItem) {
    let index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
    this.saveToLocalStorage();
  }

  clearCart() {
    this.cartItems = [];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  private loadToLocalStorage() {
    const data = localStorage.getItem('cart');
    if (data) {
      this.cartItems = JSON.parse(data);
    }
  }
}
