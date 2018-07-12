import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CartComponent, CartListComponent } from '.';
import { CartService } from './services/cart.service';
import { ProductSumPipe } from './pipes/pruduct-sum.pipe';

@NgModule({
  declarations: [CartComponent, CartListComponent, ProductSumPipe],
  imports: [CommonModule, SharedModule],
  exports: [CartListComponent, ProductSumPipe],
  providers: [CartService]
})
export class CartModule { }
