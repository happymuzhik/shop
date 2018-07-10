import { Categories } from '../enums/categories.enum';

export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;
}

export class ProductModel {

  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;

  constructor(product: Product) {
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
    this.isAvailable = product.isAvailable;
  }

  get availability() {
    return (this.isAvailable) ? 'Available' : 'Not Available';
  }
}
