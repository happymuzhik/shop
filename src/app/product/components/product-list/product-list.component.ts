import { Component } from '@angular/core';
import { ProductModel } from './../../models/Product';
import { CartModel } from './../../../cart/models/Cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: ProductModel[];
  cartProducts: CartModel[] = [];

  constructor(public productService: ProductService) {
    this.products = productService.getProducts();
    // this.cartProducts = cartService.getCarts();
  }

  onBuy(product: ProductModel): void {
    this.productService.buy(product.id);
    // this.cartService.addToCart(product);
  }

  onRemove(product: ProductModel): void {
    this.productService.removeFromCart(product.id);
    // this.cartService.removeFromCart(product.id);
  }

}
