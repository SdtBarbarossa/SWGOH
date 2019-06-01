import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper, Charakter, CharFindHelper } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';


@Component({
  selector: 'newCharSearch',
  templateUrl: './newCharSearch.html',
  styleUrls: ['./newCharSearch.css']
})
export class newCharSearchComponent {

  public charaktere: CharFindHelper[];
  public charToSearch: string;
  public showMods: boolean[] = new Array();

  constructor(public settingsService: SettingsService, public GildenService: gildenService) {

  }

  searchCharaktere() {
    if (this.charToSearch != null && this.charToSearch != "" && this.charToSearch.length > 1)
    this.charaktere = this.GildenService.getAllCharsByName(this.charToSearch);
  }
  
}
