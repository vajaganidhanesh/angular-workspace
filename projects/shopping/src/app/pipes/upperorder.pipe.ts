import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperorder'
})
export class UpperorderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
