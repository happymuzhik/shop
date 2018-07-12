import { Component } from '@angular/core';
import { ProductService } from './../../../product/services/product.service';
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

  constructor(public cartService: CartService,
              public productService: ProductService) {
    this.cartProducts = cartService.getCarts();
  }

  onRemove(product: CartModel): void {
    this.productService.removeFromCart(product.id);
    this.cartService.removeFromCart(product.id);
  }

  onAddQuantity(product: CartModel): void {
    this.cartService.addQuantity(product);
  }

  onSubQuantity(product: CartModel): void {
    this.cartService.subQuantity(product);
  }

}
