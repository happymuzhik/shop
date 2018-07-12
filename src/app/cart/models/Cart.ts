export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  sumPrice?: number;
}

export class CartModel {

  id: number;
  name: string;
  price: number;
  quantity: number;
  sumPrice: number;

  constructor(cart: Cart) {
    this.id = cart.id;
    this.name = cart.name;
    this.price = cart.price;
    this.quantity = cart.quantity || 1;
    this.sumPrice = cart.price;
  }

}
