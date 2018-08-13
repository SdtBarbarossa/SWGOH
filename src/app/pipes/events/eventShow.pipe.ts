import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'eventShow'
})
export class EventShowPipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: string): boolean {
    
    if (value.indexOf('restrictedmodbattle_') != -1 || value.indexOf('shipevent_') != -1 || value.indexOf('challenge_') != -1 ) {
      return false;
    }

    return true;
  }
}
