import { Pipe, PipeTransform } from '@angular/core';
import { Charakter, gildenService } from '../../services/gildenService';

@Pipe({
  name: 'charimagelink'
})
export class CharImageLinkPipe implements PipeTransform {

  gildenservice: gildenService;

  constructor(GildenService : gildenService) {
    this.gildenservice = GildenService;
  }

  transform(value: Charakter): string {

    var charInfoNow = this.gildenservice.charInfos.find(info => info.base_id == value.defId);

    if (charInfoNow != null) {
      if (charInfoNow.image.indexOf('/tex.') > 0) {
        return "/assets/picture/" + charInfoNow.image.substr(charInfoNow.image.indexOf('/tex.') + 5, (charInfoNow.image.length - charInfoNow.image.indexOf('/tex.')) - 5);
      }
    }

    return value.nameKey;
  }
}
