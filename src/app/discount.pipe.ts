import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
// args.forEach(item => {
//   item *0.3
// })
let res =0;
     res = value*0.7;

    return res;
  }

}
