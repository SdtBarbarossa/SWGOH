import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'eventname'
})
export class EventNamePipe implements PipeTransform {
  
  constructor() {
  }

  transform(value: string): string {
    return value.replace(/\[\/?[^\]]*\]/g, '').replace("\\n"," ");
  }
}
