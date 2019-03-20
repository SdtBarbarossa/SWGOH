import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageReadyness'
})
export class AverageReadyness implements PipeTransform {
  
  transform(value: any): number {

    try {
      var allValues = value.values as any[];
      var length = allValues.length-1;

      var averageSum = 0;

      for (var i = 1; i < length; i++) {
        averageSum += allValues[i] as number;
      }

      return Math.round(averageSum/(length-1));
    }
    catch (err) {
      return 0;
    }
    
    }
}
