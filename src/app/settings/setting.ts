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
    if (this.settings.gildenUrl.startsWith("https://swgoh.gg/g/"))
    {
      this.settings.gildenUrl = this.settings.gildenUrl;
      var urlTemp = this.settings.gildenUrl.replace("https://swgoh.gg/g/", "");
      console.log(urlTemp);
      var n = urlTemp.indexOf('/');
      urlTemp = urlTemp.substring(0, n != -1 ? n : urlTemp.length);
      console.log(urlTemp);
      var urlTemp2 = "https://swgoh.gg/api/guilds/" + urlTemp + "/units/";
      this.settings.apiUrl = urlTemp2;
      console.log(this.settings.apiUrl);
    }
    this.settings.autoSyncNow = true;
    this.settingsService.saveSettings(this.settings);
    this.router.navigate(['./home']);
  }

}
