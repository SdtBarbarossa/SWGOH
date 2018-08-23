import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'fleetTeams',
  templateUrl: './fleetTeams.html',
  styleUrls: ['./fleetTeams.css']
})
export class FleetTeamsComponent {

  AllFleetTeams: ArenaTeamHelper[];
  public showMods: boolean[] = new Array();

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {
    this.AllFleetTeams = gildenService.getAllFleetArenaTeams();
    this.AllFleetTeams.sort(function (a, b) { return a.rang - b.rang });
  }
  
}
