import { Injectable } from '@angular/core';
import { ProductModel } from './../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: ProductModel[] = [];

  constructor() {}

  getCarts(): ProductModel[] {
    return this.products;
  }

  addToCart(product: ProductModel): void {
    this.products.push(product);
  }

  removeFromCart(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
  }
}
