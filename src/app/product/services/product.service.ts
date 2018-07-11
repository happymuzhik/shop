import { Injectable } from '@angular/core';
import { ProductModel } from './../models/Product';
import { Products } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [];

  constructor() {
    this.products = Products.map((product) => new ProductModel(product));
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  findProduct(id: number): ProductModel {
    return this.products.find((product) => product.id === id);
  }

  buy(id: number): void {
    const product = this.findProduct(id);
    product.isAvailable = false;
  }

  removeFromCart(id: number): void {
    const product = this.findProduct(id);
    product.isAvailable = true;
  }
}
