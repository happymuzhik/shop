import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CartComponent, CartListComponent } from '.';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartListComponent],
  providers: [CartService]
})
export class CartModule { }
