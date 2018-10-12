import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'fleetimagelink'
})
export class FleetImageLinkPipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: Charakter): string {

    var shipInfoNow = this.gildenservice.shipInfos.find(info => info.base_id == value.defId);

    if (shipInfoNow != null) {
      if (shipInfoNow.image.indexOf('/tex.') > 0) {
        return "/assets/picture/" + shipInfoNow.image.substr(shipInfoNow.image.indexOf('/tex.') + 5, (shipInfoNow.image.length - shipInfoNow.image.indexOf('/tex.')) - 5);
      }
    }

    return value.nameKey;
  }
}
