import { Pipe, PipeTransform } from '@angular/core';
import { Charakter } from '../../services/gildenService';

@Pipe({
  name: 'gearlink'
})
export class gearLinkPipe implements PipeTransform {
  transform(value: Charakter): string {
    return "/assets/GearPNG/gear-icon-g" + value.gear + ".png";
  }
}
