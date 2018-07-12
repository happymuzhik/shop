import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartModel } from './../../models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() product: CartModel;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() addQuantity: EventEmitter<any> = new EventEmitter();
  @Output() subQuantity: EventEmitter<any> = new EventEmitter();

  constructor() { }

  removeFromCart() {
    this.remove.emit(this.product);
  }

  onAddQuantity() {
    this.addQuantity.emit(this.product);
  }
  onSubQuantity() {
    this.subQuantity.emit(this.product);
  }

}
