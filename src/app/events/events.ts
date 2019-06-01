import { Component } from '@angular/core';
import { gildenService, ArenaTeamHelper, Charakter, CharFindHelper } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';


@Component({
  selector: 'events',
  templateUrl: './events.html',
  styleUrls: ['./events.css']
})
export class EventsComponent {
  
  constructor(public GildenService: gildenService) {
    GildenService.loginEventToSWGOHHelp();
  }
    
}
