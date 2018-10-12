import { Pipe, PipeTransform } from '@angular/core';
import { ArenaChar } from '../services/gildenService';

@Pipe({
  name: 'skillmembernames'
})
export class SkillMemberNames implements PipeTransform {
  
  transform(data: any): string {

    var tempString = "";

    tempString += data.data.skillName + ": \n\r";

    for (var u = 0; u < data.data.Membernames.length; u++) {
      tempString += data.data.Membernames[u] + ", \n\r";
    }

    return tempString;

    }
}
