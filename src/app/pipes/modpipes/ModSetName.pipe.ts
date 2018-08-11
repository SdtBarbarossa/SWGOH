import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'modsetname'
})
export class ModSetNamePipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: number): string {

    var ModSetNow = this.gildenservice.ModSets[value];

    if (ModSetNow != null) {
      return ModSetNow.name;
    }

    return value.toString();
  }
}
