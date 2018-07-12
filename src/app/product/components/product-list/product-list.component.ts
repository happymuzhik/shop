import { Component } from '@angular/core';
import { ProductModel } from './../../models/Product';
import { CartModel } from './../../../cart/models/Cart';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: ProductModel[];
  cartProducts: CartModel[] = [];

  constructor(public productService: ProductService,
              public cartService: CartService) {
    this.products = productService.getProducts();
  }

  onBuy(product: ProductModel): void {
    this.productService.buy(product.id);
    this.cartService.addToCart(product);
  }

}
