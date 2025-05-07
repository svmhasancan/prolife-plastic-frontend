import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  totalPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cartService.list();
  }

  getTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
    console.log(this.cartService.getTotalPrice());
  }

  payWithCard() {}

  submitCustomOrderForm() {}

  submitAddress() {}
}
