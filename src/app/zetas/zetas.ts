import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper, Charakter, CharFindHelper, Skill } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';


@Component({
  selector: 'zetas',
  templateUrl: './zetas.html',
  styleUrls: ['./zetas.css']
})
export class ZetasComponent {
  
  allZetas: ZetaReportHelper[];

  constructor(public GildenService: gildenService) {
    
    var allZetasTemps: ZetaReportHelper[] = new Array();
    
    for (var i = 0; i < GildenService.gildenInfos.roster.length; i++)
    {
      var allZetaCharsNow = GildenService.gildenInfos.roster[i].roster.filter(char => char.skills.find(skill => skill.isZeta == true && skill.tier == 8));

      if (allZetaCharsNow != null)
      {
        for (var x = 0; x < allZetaCharsNow.length; x++)
        {
          var CharName = allZetaCharsNow[x].nameKey;

          for (var z = 0; z < allZetaCharsNow[x].skills.length; z++) {

            if (allZetaCharsNow[x].skills[z].isZeta == true && allZetaCharsNow[x].skills[z].tier == 8) {

              var tempZetaReporter = allZetasTemps.find(skill => skill.skillName == allZetaCharsNow[x].skills[z].nameKey);

              if (tempZetaReporter != null)
              {
                tempZetaReporter.anzahl++;
                tempZetaReporter.Membernames.push(GildenService.gildenInfos.roster[i].name);
              }
              else
              {
                var ZetaNow = new ZetaReportHelper();
                ZetaNow.CharName = CharName;
                ZetaNow.anzahl = 1;
                ZetaNow.skillName = allZetaCharsNow[x].skills[z].nameKey;
                ZetaNow.Membernames = new Array();
                ZetaNow.Membernames.push(GildenService.gildenInfos.roster[i].name);
                allZetasTemps.push(ZetaNow);
              }

            }

          }
          
        }
      }

    }

    allZetasTemps.sort(function (a, b) {

      return b.anzahl - a.anzahl;

    });

    this.allZetas = allZetasTemps;

    console.log(this.allZetas);

  }

  ShowMemberNames(data) {

    var tempString = "";

    tempString += data.data.skillName + ": \n\r";

    for (var u = 0; u < data.data.Membernames.length; u++) {
      tempString += data.data.Membernames[u] + "\n\r";
    }

    alert(tempString);

  }

}



export class ZetaReportHelper {
  CharName: string;
  anzahl: number;
  skillName: string;
  Membernames: string[];
}
