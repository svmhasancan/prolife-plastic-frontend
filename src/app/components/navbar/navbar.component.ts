import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCartOpen = false;

  menuActive = false;
  dropdownOpen = false;
  isLoggedIn = true; // Bunu giriş durumuna göre ayarlarsın

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  toggleCartDropdown() {
    this.isCartOpen = !this.isCartOpen;
  }

  getCartItems() {
    this.cartItems = this.cartService.list();
  }

  removeItem(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem);
  }

  clearCart() {
    this.cartService.clearCart();
    this.getCartItems();
  }

  routeToCart() {
    this.route.navigate(['cart']);
  }
}
