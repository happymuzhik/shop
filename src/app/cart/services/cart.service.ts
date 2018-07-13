import { Injectable } from '@angular/core';
import { CartModel } from './../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: CartModel[] = [];
  productsSum = 0;

  constructor() {}

  getCarts(): CartModel[] {
    return this.products;
  }

  getProductsSum(): number {
    this.calcProductsSum();
    return this.productsSum;
  }

  calcProductsSum(): void {
    this.productsSum = this.products.reduce((totalSum, item) => totalSum + item.sumPrice, 0);
  }

  addToCart(product: any): void {
    this.products = [...this.products, new CartModel(product)];
    this.calcProductsSum();
  }

  removeFromCart(id: number): void {
    const index = this.products.findIndex((product) => product.id === id);
    this.products.splice(index, 1);
    this.calcProductsSum();
  }

  addQuantity(product: CartModel): void {
    product.quantity++;
    product.sumPrice = product.price * product.quantity;
    this.calcProductsSum();
  }

  subQuantity(product: CartModel): void {
    if (product.quantity > 1) {
      product.quantity--;
      product.sumPrice = product.price * product.quantity;
      this.calcProductsSum();
    }
  }
}
