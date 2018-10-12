import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'membertracking',
  templateUrl: './membertracking.html',
  styleUrls: ['./membertracking.css']
})
export class MemberTrackingComponent {
  
  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

  }

}
