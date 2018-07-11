import { Component } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { CartModel } from './../../models/Cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  products: CartModel[];
  cartProducts: CartModel[] = [];

  constructor(public cartService: CartService) {
    this.cartProducts = cartService.getCarts();
  }

  onBuy(product: CartModel): void {
    this.cartService.addToCart(product);
  }

  onRemove(product: CartModel): void {
    this.cartService.removeFromCart(product.id);
  }

}
