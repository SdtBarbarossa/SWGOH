import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'charname'
})
export class CharNamePipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: Charakter): string {

    var charInfoNow = this.gildenservice.charInfos.find(info => info.base_id == value.defId);

    if (charInfoNow != null)
      return charInfoNow.name;

    return "name";
  }
}
