import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'modslotname'
})
export class ModSlotNamePipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: number): string {

    switch (value) {
      case 1:
        return "Transmitter";
      case 2:
        return "Receiver";
      case 3:
        return "Processor";
      case 4:
        return "Holo-Array";
      case 5:
        return "Data-Bus";
      case 6:
        return "Multiplexer";
      default:
        return value.toString();
    }
    
  }
}
