import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from '.';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
  providers: [ProductService]
})
export class ProductModule { }
