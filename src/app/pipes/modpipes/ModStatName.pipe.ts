import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'modstatname'
})
export class ModStatNamePipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: number): string {

    var ModStatsNow = this.gildenservice.ModStats[value];

    if (ModStatsNow != null) {
      return ModStatsNow.name;
    }

    return value.toString();
  }
}
