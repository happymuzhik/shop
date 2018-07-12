import { Component } from '@angular/core';
import { ProductService } from './../../../product/services/product.service';
import { CartService } from './../../services/cart.service';
import { ProductModel } from './../../../product/models/Product';
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

  onRemove(product: ProductModel): void {
    this.productService.removeFromCart(product.id);
    this.cartService.removeFromCart(product.id);
  }

}
