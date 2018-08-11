import { Component } from '@angular/core';
import { SettingsService, Settings } from '../services/settingsService';
import { Router } from '@angular/router';

@Component({
  selector: 'setting',
  templateUrl: './setting.html',
  styleUrls: ['./setting.css']
})
export class SettingComponent {

  settings: Settings;

  constructor(private settingsService: SettingsService, private router: Router) {
    this.settings = this.settingsService.getSettings();
  }

  saveSettings() {
    this.settings.autoSyncNow = true;
    this.settingsService.saveSettings(this.settings);
    this.router.navigate(['./home']);
  }

  changedAllycode() {
    if (this.settings.allycode != "" && this.settings.allycode != null) {
      var numb = this.settings.allycode.match(/\d/g);
      this.settings.allycode = numb.join("");
    }
  }

}
