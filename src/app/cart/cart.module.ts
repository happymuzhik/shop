import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartListComponent } from '.';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [CommonModule],
  providers: [CartService]
})
export class CartModule { }
