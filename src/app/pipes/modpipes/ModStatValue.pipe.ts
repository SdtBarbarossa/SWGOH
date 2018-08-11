import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'modstatvalue'
})
export class ModStatValuePipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: number, modStatName: string): string {
    
    switch (modStatName) {
      case "Speed":
        return (value / 100000000).toString();
      case "Potency":
        return (value / 1000000).toString();
      case "Health":
        return (value / 100000000).toString();
      case "Offense %":
        return (value / 1000000).toString();
      case "Critical Chance":
        return (value / 1000000).toString();
      case "Health %":
        return (value / 1000000).toString();
      case "Defense %":
        return (value / 1000000).toString();
      case "Protection %":
        return (value / 1000000).toString();
      case "Critical Damage":
        return (value / 1000000).toString();
      case "Offense":
        return (value / 100000000).toString();
      case "Protection":
        return (value / 100000000).toString();
      case "Tenacity":
        return (value / 1000000).toString();
      case "Defense":
        return (value / 100000000).toString();
      case "Critical Avoidance":
        return (value / 10000000).toString();
      case "Accuracy":
        return (value / 1000000).toString();
      default:
        return value.toString();
    }

  }
}
