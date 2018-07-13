import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './../../../product/services/product.service';
import { CartService } from './../../services/cart.service';
import { CartModel } from './../../models/Cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnDestroy {

  cartProductsSubscription: Subscription;
  cartProducts: CartModel[] = [];
  cartProductsSum = 0;

  constructor(public cartService: CartService,
              public productService: ProductService) {
    this.cartProductsSubscription = cartService.getCarts()
      .subscribe(cartProducts => {
        console.log('cartProducts', cartProducts);
        this.cartProducts = cartProducts;
        this.cartProductsSum = this.cartService.getProductsSum();
      });
  }

  ngOnDestroy() {
    this.cartProductsSubscription.unsubscribe();
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
