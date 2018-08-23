import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService, MappedCharakter } from '../../services/gildenService';

@Pipe({
  name: 'squadpower'
})
export class SquadPowerPipe implements PipeTransform {
  
  constructor() {
  }

  transform(value: MappedCharakter[]): number {
    var tempPower = 0;

    for (var i = 0; i < value.length; i++)
      tempPower += value[i].Power;

    return tempPower;
  }

}
