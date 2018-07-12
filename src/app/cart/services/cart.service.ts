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
    this.products.push(new CartModel(product));
  }

  removeFromCart(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
  }

  addQuantity(product: CartModel): void {
    product.quantity++;
  }

  subQuantity(product: CartModel): void {
    if (product.quantity > 0){
      product.quantity--;
    }
  }
}
