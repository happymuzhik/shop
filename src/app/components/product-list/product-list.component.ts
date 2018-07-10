import { Product, ProductModel } from './../../models/Product';
import { Component } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: ProductModel[];

  constructor(public productService: ProductsService) {
    this.products = productService.getProducts();
  }

}
