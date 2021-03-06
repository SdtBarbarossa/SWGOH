import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  isSyncing: boolean = false;
  windowNow: any;

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {
    console.log(this.settingsService.settings);
    this.windowNow = window;
    if (this.settingsService.settings.autoSyncNow == true) {
      this.settingsService.settings.autoSyncNow = false;
      this.settingsService.saveSettings(this.settingsService.settings);
      this.syncApi();
    }
  }

  syncApi() {
    this.isSyncing = true;
    this.gildenService.syncGildenInfos();
  }

}
