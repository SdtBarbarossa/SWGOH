import { Component } from '@angular/core';
import { SettingsService } from './services/settingsService';
import { gildenService } from './services/gildenService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SWGOH-Midi';
  settings: any;
  jsonResponse: any;
  private gildenServiceHere: gildenService;

  constructor(private settingsService: SettingsService, private gildenService: gildenService) {
    this.settings = this.settingsService.getSettings();
    this.gildenServiceHere = gildenService;
  }

  /* Set the width of the side navigation to 250px */
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

}
