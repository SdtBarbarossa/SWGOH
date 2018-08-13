import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnwidth'
})
export class ColumnWidthPipe implements PipeTransform {
  
  transform(value: number): number {

    if (value < 1)
      return 100;
    else
      return 70;
    }
}
