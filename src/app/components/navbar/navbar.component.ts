import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCartOpen = false;

  cartItems = [
    { name: 'Ürün 1', price: 99.99 },
    { name: 'Ürün 2', price: 49.5 },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleCartDropdown() {
    this.isCartOpen = !this.isCartOpen;
  }
}
