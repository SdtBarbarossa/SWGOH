import { Pipe, PipeTransform } from '@angular/core';
import { ArenaChar } from '../services/gildenService';

@Pipe({
  name: 'squadtostring'
})
export class SquadToStringPipe implements PipeTransform {
  
  transform(value: ArenaChar[]): string {

    var tempString = "";

    for (var i = 0; i < value.length; i++)
    {
      if (tempString == "")
        tempString = value[i].defId + "(L)"
      else
        tempString += ", " + value[i].defId;
    }

    return tempString;

    }
}
