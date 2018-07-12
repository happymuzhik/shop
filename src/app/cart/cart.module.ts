import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartListComponent } from '.';
import { CartService } from './services/cart.service';
import { ProductSumPipe } from './pipes/pruduct-sum.pipe';

@NgModule({
  declarations: [CartComponent, CartListComponent, ProductSumPipe],
  imports: [CommonModule],
  exports: [CartListComponent, ProductSumPipe],
  providers: [CartService]
})
export class CartModule { }
