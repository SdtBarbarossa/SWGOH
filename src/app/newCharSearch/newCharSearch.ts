import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper, Charakter, CharFindHelper } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'newCharSearch',
  templateUrl: './newCharSearch.html',
  styleUrls: ['./newCharSearch.css']
})
export class newCharSearchComponent {

  public charaktere: CharFindHelper[];
  public showMods = false;
  public charToSearch: string;

  constructor(public settingsService: SettingsService, public GildenService: gildenService) {

  }

  searchCharaktere() {
    if (this.charToSearch != null && this.charToSearch != "" && this.charToSearch.length > 1)
    this.charaktere = this.GildenService.getAllCharsByName(this.charToSearch);
  }

  switchShowMods() {

    if (this.showMods == true)
    {
      this.showMods = false;
    }
    else {
      this.showMods = true;
    }
      
  }
  
}
