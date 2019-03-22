import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';
import ODataContext from "devextreme/data/odata/context";
import DataSource from "devextreme/data/data_source";
import { ZetaReportHelper } from '../zetas/zetas';

@Component({
  selector: 'guildcharts',
  templateUrl: './guildcharts.html',
  styleUrls: ['./guildcharts.css']
})
export class GuildchartsComponent {

  public arenaLeaderDataSource: any;
  public fleetLeaderDataSource: any;
  public allZetas: ZetaReportHelper[];

  public possiblestats = ["Arenaleaders", "Fleetleaders", "Zetas"];

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

    this.initialiseArenaLeaderDataSource();
    this.initialiseFleetLeaderDataSource();
    this.initialiseZetaDataSource();

  }

  initialiseArenaLeaderDataSource() {
    var tempDataSource = new Array();

    this.gildenService.gildenInfos.roster.forEach(
      member => {
        var defId = member.arena.char.squad[0].defId;

        if (tempDataSource[defId] != null) {
          tempDataSource[defId] = { Value: ++tempDataSource[defId].Value, Name: (tempDataSource[defId].Name + "\n" + member.name) };
        }
        else {
          tempDataSource[defId] = { Value: 1, Name: member.name };
        }
      }
    );


    var tempDataSource2 = new Array();

    for (let key in tempDataSource) {

      tempDataSource2.push({ Leader: key, Value: tempDataSource[key].Value, Names: tempDataSource[key].Name });
    }

    this.arenaLeaderDataSource = tempDataSource2.sort((object1, object2) => {
      return object2.Value - object1.Value;
    });

  }



  initialiseFleetLeaderDataSource() {
    var tempDataSource = new Array();

    this.gildenService.gildenInfos.roster.forEach(
      member => {
        var defId = member.arena.ship.squad[0].defId;

        if (tempDataSource[defId] != null) {
          tempDataSource[defId] = { Value: ++tempDataSource[defId].Value, Name: (tempDataSource[defId].Name + "\n" + member.name) };
        }
        else {
          tempDataSource[defId] = { Value: 1, Name: member.name };
        }
      }
    );


    var tempDataSource2 = new Array();

    for (let key in tempDataSource) {

      tempDataSource2.push({ Leader: key, Value: tempDataSource[key].Value, Names: tempDataSource[key].Name });
    }

    this.fleetLeaderDataSource = tempDataSource2.sort((object1, object2) => {
      return object2.Value - object1.Value;
    });

  }

  initialiseZetaDataSource() {

    var allZetasTemps: ZetaReportHelper[] = new Array();

    for (var i = 0; i < this.gildenService.gildenInfos.roster.length; i++) {
      var allZetaCharsNow = this.gildenService.gildenInfos.roster[i].roster.filter(char => char.skills.find(skill => skill.isZeta == true && skill.tier == 8));

      if (allZetaCharsNow != null) {
        for (var x = 0; x < allZetaCharsNow.length; x++) {
          var CharName = allZetaCharsNow[x].nameKey;

          for (var z = 0; z < allZetaCharsNow[x].skills.length; z++) {

            if (allZetaCharsNow[x].skills[z].isZeta == true && allZetaCharsNow[x].skills[z].tier == 8) {

              var tempZetaReporter = allZetasTemps.find(skill => skill.skillName == allZetaCharsNow[x].skills[z].nameKey);

              if (tempZetaReporter != null) {
                tempZetaReporter.anzahl++;
                tempZetaReporter.Membernames.push(this.gildenService.gildenInfos.roster[i].name);
              }
              else {
                var ZetaNow = new ZetaReportHelper();
                ZetaNow.CharName = CharName;
                ZetaNow.anzahl = 1;
                ZetaNow.skillName = allZetaCharsNow[x].skills[z].nameKey;
                ZetaNow.Membernames = new Array();
                ZetaNow.Membernames.push(this.gildenService.gildenInfos.roster[i].name);
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
  }

  topZetasChanged(e) {
    this.initialiseZetaDataSource();
    this.allZetas = this.allZetas.filter(zeta => zeta.anzahl >= e.value);
  }

  customizeLeaderTooltip(arg) {
    
    var textNow = arg.argumentText + ": " + arg.valueText;

        return {
          text: textNow
        }
    }

}
