import { Injectable } from '@angular/core';
import { CartModel } from './../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: CartModel[] = [];

  constructor() {}

  getCarts(): CartModel[] {
    return this.products;
  }

  addToCart(product: CartModel): void {
    this.products.push(product);
  }

  removeFromCart(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
  }
}
