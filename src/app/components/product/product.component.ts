import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from './../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: ProductModel;
  @Output() buy: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onBuy() {
    this.buy.emit(this.product);
  }

}
