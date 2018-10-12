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
    console.log('value changed');
    if (MemberSelectBoxA.value != null && MemberSelectBoxB.value != null && charSelectBox.value != null && MemberSelectBoxA.value.nameKey != MemberSelectBoxB.value.nameKey) {

      var charA = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.nameKey, MemberSelectBoxA.value);
      var charB = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.nameKey, MemberSelectBoxB.value);

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

    console.log(AorB);

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

    console.log("mods", char.mods);

    for (var i = 0; i < char.mods.length; i++) {
      var primaryType = char.mods[i].primaryStat.unitStat;
      var primaryBonusValue = Number(char.mods[i].primaryStat.value);
      var secondaryType_1 = char.mods[i].secondaryStat[0].unitStat;
      var secondaryType_2 = char.mods[i].secondaryStat[1].unitStat;
      var secondaryType_3 = char.mods[i].secondaryStat[2].unitStat;
      var secondaryType_4 = char.mods[i].secondaryStat[3].unitStat;
      var secondaryValue_1 = Number(char.mods[i].secondaryStat[0].value);
      var secondaryValue_2 = Number(char.mods[i].secondaryStat[1].value);;
      var secondaryValue_3 = Number(char.mods[i].secondaryStat[2].value);;
      var secondaryValue_4 = Number(char.mods[i].secondaryStat[3].value);;
      
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

      if (modSetsTotal[char.mods[i].set] == null) {
        modSetsTotal[char.mods[i].set] = 1
      }
      else {
        modSetsTotal[char.mods[i].set] += 1;
      }

    }

    console.log("modSetsTotal", modSetsTotal);
    console.log("modValuesTotal", modValuesTotal);

    for (let key in modSetsTotal) {
      var ModSetNow = this.GildenService.ModSets.find(modset => modset.id == key);
      
      if (ModSetNow != null) {

        if (ModSetNow.setCount <= modSetsTotal[key]) {
          
          if (charData.total[this.mapKeyOfModStat(ModSetNow.nameKey)] != null) {
            console.log(charData.total[this.mapKeyOfModStat(ModSetNow.nameKey)]);
            charData.total[this.mapKeyOfModStat(ModSetNow.nameKey)] = Number(charData.total[this.mapKeyOfModStat(ModSetNow.nameKey)]) + ((((Number(ModSetNow.maxLevelBonus.stat.statValueDecimal)) / 100) * 2) / 100) * Number(charData.base[this.mapKeyOfModStat(ModSetNow.nameKey)]);
            console.log(charData.total[this.mapKeyOfModStat(ModSetNow.nameKey)]);
          } else {
            console.log("cant calculate modset ", ModSetNow);
          }

        }

      }

    }

    for (let key in modValuesTotal) {
      let value = modValuesTotal[key];

      key = this.mapKeyOfModStat(key);

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
            case "Offense":
              charData.total["Physical Damage"] += value;
              charData.total["Special Damage"] += value;
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

          switch (keyWithoutPercent) {
            case "Offense":
              charData.total["Physical Damage"] = Number(charData.total["Physical Damage"]) + (charData.base["Physical Damage"] * (value / 100));
              charData.total["Special Damage"] = Number(charData.total["Special Damage"]) + (charData.base["Special Damage"] * (value / 100));
              break;
            default:
              console.log("Konnte nicht berechnen : ", key, value.toString());
              break;
          }

        }

      }

    }
    
  }

  mapKeyOfModStat(value: string) {

    switch (value) {
      case "UNITSTATOFFENSEPERCENTADDITIVE":
        return "Offense %";
      case "UNITSTATOFFENSE":
        return "Offense";
      case "UNITSTATACCURACY":
        return "Accuracy";
      case "UNITSTATSPEED":
        return "Speed";
      case "UNITSTATRESISTANCE":
        return "Resistance";
      case "UNITSTATMAXHEALTH":
        return "Health";
      case "UNITSTATMAXHEALTHPERCENTADDITIVE":
        return "Health %";
      case "UNITSTATDEFENSE":
        return "Health";
      case "UNITSTATMAXHEALTH":
        return "Defense";
      case "UNITSTATDEFENSEPERCENTADDITIVE":
        return "Defense %";
      case "UNITSTATCRITICALCHANCEPERCENTADDITIVE":
        return "Critical Chance";
      case "UNITSTATMAXSHIELDPERCENTADDITIVE":
        return "Protection %";
      case "UNITSTATCRITICALDAMAGE":
        return "Critical Damage";
      case "UNITSTATMAXSHIELD":
        return "Protection";
      case "UNITSTATEVASIONNEGATEPERCENTADDITIVE":
        return "Evasion %";
      case "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE":
        return "Critical Avoidance %";
      case "STATMODSETBONUS_SETBONUSSTAT_RESISTANCE_NAME":
        return "Critical";
      case "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE":
        return "Resistance";
      case "STATMODSETBONUS_SETBONUSSTAT_OFFENSEPERCENTADDITIVE_NAME":
        return "Offense";
      case "STATMODSETBONUS_SETBONUSSTAT_DEFENSEPERCENTADDITIVE_NAME":
        return "Defense";
      case "STATMODSETBONUS_SETBONUSSTAT_MAXHEALTHPERCENTADDITIVE_NAME":
        return "Health";
      case "STATMODSETBONUS_SETBONUSSTAT_ACCURACY_NAME":
        return "Accuracy";
      case "STATMODSETBONUS_SETBONUSSTAT_SPEEDPERCENTADDITIVE_NAME":
        return "Speed";
      case "STATMODSETBONUS_SETBONUSSTAT_CRITICALCHANCEPERCENTADDITIVE_NAME":
        return "Critical Chance";
      case "STATMODSETBONUS_SETBONUSSTAT_CRITICALDAMAGE_NAME":
        return "Critical Damage";
      default:
        return value;
    }

  }

  getModStatName(value: number): string {

    var ModStatsNow = this.GildenService.ModStats[value];

    if (ModStatsNow != null) {
      return ModStatsNow;
    }

    return value.toString();
  }

  getModStatValue(valueAsString: string, modStatName: string): number {

    var value = Number(valueAsString.replace("%", "").replace("+", ""));

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
