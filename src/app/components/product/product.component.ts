import { Component, Input } from '@angular/core';
import { ProductModel } from './../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: ProductModel;

  constructor() { }

  onBuy() {
    console.log(this.product);
  }

}
