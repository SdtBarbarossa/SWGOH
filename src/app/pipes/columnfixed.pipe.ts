import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnfixed'
})
export class ColumnFixedPipe implements PipeTransform {
  
  transform(value: number): boolean {

    if (value < 1)
      return true;
    else
      return false;
    }
}
