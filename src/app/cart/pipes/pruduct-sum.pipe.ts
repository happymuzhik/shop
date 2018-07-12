import { Pipe, PipeTransform } from '@angular/core';
import { CartModel } from './../models/Cart';

@Pipe({
  name: 'productSum',
  pure: false
})
export class ProductSumPipe implements PipeTransform {
  transform(products: CartModel[]): number {
    return products.reduce((totalSum, item) => totalSum + item.sumPrice, 0);
  }
}
