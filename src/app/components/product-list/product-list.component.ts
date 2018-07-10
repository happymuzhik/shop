import { ProductModel } from './../../models/Product';
import { Component } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: ProductModel[];
  cartProducts: ProductModel[] = [];

  constructor(public productService: ProductsService,
              public cartService: CartService) {
    this.products = productService.getProducts();
    this.cartProducts = cartService.getCarts();
  }

  onBuy(product: ProductModel): void {
    this.productService.buy(product.id);
    this.cartService.addToCart(product);
  }

  onRemove(product: ProductModel): void {
    this.productService.removeFromCart(product.id);
    this.cartService.removeFromCart(product.id);
  }

}
