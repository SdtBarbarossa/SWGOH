import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';

@Component({
  selector: 'charsearch',
  templateUrl: './charsearch.html',
  styleUrls: ['./charsearch.css']
})
export class CharSearchComponent {
  charToSearch: string = "";
  charsFromGildenInfos: any;

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

  }

  getCharsFromGildenInfos() {
    this.charsFromGildenInfos = this.gildenService.findMappedCharByName(this.charToSearch);
  }

  roundNumber(number) {
    return Math.round(number);
  }

  formatGearLevel(level) {
    switch (level) {
      case 0:
        return '0';
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      case 6:
        return 'VI';
      case 7:
        return 'VII';
      case 8:
        return 'VIII';
      case 9:
        return 'IX';
      case 10:
        return 'X';
      case 11:
        return 'XI';
      case 12:
        return 'XII';
      default:
        return 'Unknown';
    }
  }

}
