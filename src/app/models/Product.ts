import { Categories } from '../enums/categories.enum';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;
}

export class ProductModel {

  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;

  constructor(product: Product) {
    this.id = product.id;
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
