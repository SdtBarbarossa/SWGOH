import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';


@Component({
  selector: 'arenaTeams',
  templateUrl: './arenaTeams.html',
  styleUrls: ['./arenaTeams.css']
})
export class ArenaTeamsComponent {

  AllCharTeams: ArenaTeamHelper[];
  public showMods: boolean[] = new Array();

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {
    this.AllCharTeams = gildenService.getAllCharArenaTeams();
    this.AllCharTeams.sort(function (a, b) { return a.rang - b.rang });
  }
  
}
