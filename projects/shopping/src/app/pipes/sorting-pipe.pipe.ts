import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingPipe',
})
export class SortingPipePipe implements PipeTransform {
  transform(collection: string[], reverse?: boolean) {
    if (reverse == true) {
      collection.sort();
      collection.reverse();
      return collection;
    } else {
      collection.sort();
      return collection;
    }
  }
}
