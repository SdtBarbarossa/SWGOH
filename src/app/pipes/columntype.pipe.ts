import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columntype'
})
export class ColumnTypePipe implements PipeTransform {
  
  transform(value: number): string {

    if (value < 1)
      return "string";
    else
      return "number";
    }
}
