import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  settings: Settings = new Settings();

  constructor() {

  }

  getSettings() {
    if (localStorage.midiSettings != null)
      this.settings = JSON.parse(localStorage.midiSettings);
    return this.settings;
  }

  saveSettings(settings: Settings) {
    localStorage.midiSettings = JSON.stringify(settings);
  }

}

export class Settings {
  apiUrl: string = "";
  gildenUrl: string = "";
  sortMemberBy: string = "OGM";
  showErrors: boolean = true;
  useAutoComplete: boolean = true;
  autoSyncNow: boolean = false;
}
