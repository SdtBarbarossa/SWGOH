import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper, Charakter, CharFindHelper, GildenInfos } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'comparer',
  templateUrl: './comparer.html',
  styleUrls: ['./comparer.css']
})
export class ComparerComponent {

  charCompletedA: any;
  charCompletedB: any;

  urlToBaseApi: string = "https://crinolo-swgoh.glitch.me/baseStats/api/";

  constructor(public http: HttpClient,public GildenService: gildenService) {
  }

  onValueChanged(charSelectBox, MemberSelectBoxA, MemberSelectBoxB)
  {

    if (MemberSelectBoxA.value != null && MemberSelectBoxB.value != null && charSelectBox.value != null && MemberSelectBoxA.value.name != MemberSelectBoxB.value.name) {

      var charA = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.name, MemberSelectBoxA.value);
      var charB = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.name, MemberSelectBoxB.value);

      if(charA != null)
        this.loadChar("A", charA);

      if(charB != null)
        this.loadChar("B", charB);

    }

  }

  loadChar(AorB: string, char:Charakter) {
    
    let params = new HttpParams();
    params = params.append('stars', char.rarity.toString());
    params = params.append('level', char.level.toString());
    params = params.append('gearLevel', char.gear.toString());

    var equippmentAdded = "";

    for (var i = 0; i < char.equipped.length; i++)
    {
      equippmentAdded += char.equipped[i].equipmentId;

      if (i + 1 < char.equipped.length)
        equippmentAdded += ",";
    }

    if (equippmentAdded != "")
      params = params.append('gear', equippmentAdded);

    this.http.get(this.urlToBaseApi + char.defId, { params: params })
      .subscribe(
      data =>
      {
        
        
        

        if (AorB == "A") {
          this.charCompletedA = data;
          console.log(this.charCompletedA);
          this.calculateTotalValues("A", char);
        }
        else {
          this.charCompletedB = data;
          console.log(this.charCompletedB);
          this.calculateTotalValues("B", char);
        }
      }
      );
    
  }

  calculateTotalValues(AorB: string, char : Charakter) {

    var charData = null;

    if (AorB == "A") {
      charData = this.charCompletedA;
    }
    else {
      charData = this.charCompletedB;
    }
    
    var modValuesTotal: { [id: string]: number; } = {
    };

    var modSetsTotal: { [id: number]: number; } = {
    };

    for (var i = 0; i < char.mods.length; i++) {
      var primaryType = this.getModStatName(char.mods[i].primaryBonusType);
      var primaryBonusValue = this.getModStatValue(char.mods[i].primaryBonusValue, this.getModStatName(char.mods[i].primaryBonusType));
      var secondaryType_1 = this.getModStatName(char.mods[i].secondaryType_1);
      var secondaryType_2 = this.getModStatName(char.mods[i].secondaryType_2);
      var secondaryType_3 = this.getModStatName(char.mods[i].secondaryType_3);
      var secondaryType_4 = this.getModStatName(char.mods[i].secondaryType_4);
      var secondaryValue_1 = this.getModStatValue(char.mods[i].secondaryValue_1, this.getModStatName(char.mods[i].secondaryType_1));
      var secondaryValue_2 = this.getModStatValue(char.mods[i].secondaryValue_2, this.getModStatName(char.mods[i].secondaryType_2));
      var secondaryValue_3 = this.getModStatValue(char.mods[i].secondaryValue_3, this.getModStatName(char.mods[i].secondaryType_3));
      var secondaryValue_4 = this.getModStatValue(char.mods[i].secondaryValue_4, this.getModStatName(char.mods[i].secondaryType_4));
      
      if (modValuesTotal[primaryType] == null)
        modValuesTotal[primaryType] = 0;
      if (modValuesTotal[secondaryType_1] == null)
        modValuesTotal[secondaryType_1] = 0;
      if (modValuesTotal[secondaryType_2] == null)
        modValuesTotal[secondaryType_2] = 0;
      if (modValuesTotal[secondaryType_3] == null)
        modValuesTotal[secondaryType_3] = 0;
      if (modValuesTotal[secondaryType_4] == null)
        modValuesTotal[secondaryType_4] = 0;

      modValuesTotal[primaryType] += primaryBonusValue;
      modValuesTotal[secondaryType_1] += secondaryValue_1;
      modValuesTotal[secondaryType_2] += secondaryValue_2;
      modValuesTotal[secondaryType_3] += secondaryValue_3;
      modValuesTotal[secondaryType_4] += secondaryValue_4;

      if (modSetsTotal[char.mods[i].setId] == null) {
        modSetsTotal[char.mods[i].setId] = 1
      }
      else {
        modSetsTotal[char.mods[i].setId] += 1;
      }

    }

    console.log(modValuesTotal);

    for (let key in modSetsTotal) {
      var ModSetNow = this.GildenService.ModSets[key];

      if (ModSetNow != null) {

        if (ModSetNow.count <= modSetsTotal[key]) {

          if (charData.total[ModSetNow.name] != null) {
            console.log(charData.total[ModSetNow.name]);
            charData.total[ModSetNow.name] = Number(charData.total[ModSetNow.name]) + ((((Number(ModSetNow.bonus.statValueDecimal)) / 100) * 2) / 100) * Number(charData.base[ModSetNow.name]);
            console.log(charData.total[ModSetNow.name]);
          } else {
            console.log("cant calculate modset ", ModSetNow);
          }

        }

      }

    }

    for (let key in modValuesTotal) {
      let value = modValuesTotal[key];

      if (key == 'None')
        continue;
      
      if (key.indexOf('%') < 0)
      {

        if (charData.total[key] != null) {
          charData.total[key] += value;
        }
        else
        {

          switch (key) {
            case "Critical Chance":
              charData.total["Physical Critical %"] = (Number(charData.total["Physical Critical %"].replace("%", "")) + value).toFixed(2) + "%";
              charData.total["Special Critical %"] = (Number(charData.total["Special Critical %"].replace("%", "")) + value).toFixed(2) + "%";
              break;
            case "Critical Damage":
              charData.total["Physical Critical Rating"] += value;
              charData.total["Special Critical Rating"] += value;
              break;
            default:
              console.log("Konnte nicht berechnen : ", key, value.toString());
              break;
          }

        }

      }
      else {

        var keyWithoutPercent = key.substr(0, key.length - 2);
        if (charData.total[keyWithoutPercent] != null)
        {
          charData.total[keyWithoutPercent] += (charData.base[keyWithoutPercent] * (value/100))
        }
        else
        {
          console.log("Konnte nicht berechnen : ", key, value.toString());
        }

      }

    }
    
  }

  getModStatName(value: number): string {

    var ModStatsNow = this.GildenService.ModStats[value];

    if (ModStatsNow != null) {
      return ModStatsNow;
    }

    return value.toString();
  }

  getModStatValue(value: number, modStatName: string): number {

    switch (modStatName) {
      case "Speed":
        return (value / 100000000);
      case "Potency":
        return (value / 1000000);
      case "Health":
        return (value / 100000000);
      case "Offense %":
        return (value / 1000000);
      case "Critical Chance":
        return (value / 1000000);
      case "Health %":
        return (value / 1000000);
      case "Defense %":
        return (value / 1000000);
      case "Protection %":
        return (value / 1000000);
      case "Critical Damage":
        return (value / 1000000);
      case "Offense":
        return (value / 100000000);
      case "Protection":
        return (value / 100000000);
      case "Tenacity":
        return (value / 1000000);
      case "Defense":
        return (value / 100000000);
      case "Critical Avoidance":
        return (value / 10000000);
      case "Accuracy":
        return (value / 1000000);
      default:
        return value;
    }

  }
    
}
