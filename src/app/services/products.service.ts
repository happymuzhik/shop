import { Injectable } from '@angular/core';
import { Categories } from '../enums/categories.enum';
import { ProductModel } from './../models/Product';

const Products = [
  {
    name: 'Product 1',
    description: 'Some description',
    price: '100$',
    category: Categories.category1,
    isAvailable: true
  },
  {
    name: 'Product 2',
    description: 'Some description',
    price: '200$',
    category: Categories.category2,
    isAvailable: false
  },
  {
    name: 'Product 3',
    description: 'Some description',
    price: '300$',
    category: Categories.category2,
    isAvailable: true
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductModel[] = [];

  constructor() {
    this.products = Products.map((product) => new ProductModel(product));
  }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
