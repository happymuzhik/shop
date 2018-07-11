export interface Cart {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;
}

export class CartModel {

  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  isAvailable: boolean;

  constructor(cart: Cart) {
    this.id = cart.id;
    this.name = cart.name;
    this.description = cart.description;
    this.price = cart.price;
    this.category = cart.category;
    this.isAvailable = cart.isAvailable;
  }

  get availability() {
    return (this.isAvailable) ? 'Available' : 'Not Available';
  }
}
