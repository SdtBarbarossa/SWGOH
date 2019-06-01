import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';

@Component({
  selector: 'squadsearch',
  templateUrl: './squadsearch.html',
  styleUrls: ['./squadsearch.css']
})
export class SquadSearchComponent {
  teamToSearch: any;
  squadsFromGildenInfos: any;
  myTeams: squad[] = new Array();
  selectedTeam: any;

  squadName: any;
  selectedLeader: any;
  selectedChar2: any;
  selectedChar3: any;
  selectedChar4: any;
  selectedChar5: any;

  autoCompleteConfig = {
    displayKey: "name", //if objects array passed which key to be displayed defaults to description,
    search: true //enables the search plugin to search in the list
  };

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

    this.getMyTeams();
    if (this.myTeams.length < 1) {
      var mySquad = new squad();
      mySquad.Name = 'Phönix';
      mySquad.Charaktere.push('Hera Syndulla');
      mySquad.Charaktere.push('Ezra Bridger');
      mySquad.Charaktere.push('Garazeb "Zeb" Orrelios');
      mySquad.Charaktere.push('Kanan Jarrus');
      mySquad.Charaktere.push('Chopper');
      this.myTeams.push(mySquad);
      this.selectedTeam = mySquad;
    } else {
      this.selectedTeam = this.myTeams[0];
    }
    this.getSquadsFromGildenInfos();
  }

  getMyTeams() {
    if (localStorage.midiMyTeams != null)
      this.myTeams = JSON.parse(localStorage.midiMyTeams);
  }

  saveMyTeams() {
    localStorage.midiMyTeams = JSON.stringify(this.myTeams);
  }

  // When the user clicks the button, open the modal 
  openModal(){
  // Get the modal
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal(){  // Get the modal
    var modal = document.getElementById('myModal');
  modal.style.display = "none";
  }

  deleteThisTeam() {

    var index = this.myTeams.indexOf(this.selectedTeam);
    if (index > -1) {
      this.myTeams.splice(index, 1);
    }

    this.saveMyTeams();

  }

  addSquadToMyTeams() {
    var teamNow = new squad();
    teamNow.Name = this.squadName;

      teamNow.Charaktere.push(this.selectedLeader);
      teamNow.Charaktere.push(this.selectedChar2);
      teamNow.Charaktere.push(this.selectedChar3);
      teamNow.Charaktere.push(this.selectedChar4);
      teamNow.Charaktere.push(this.selectedChar5);

    console.log(teamNow);

    this.myTeams.push(teamNow);
    this.saveMyTeams();
    this.closeModal();
  }

  getSquadsFromGildenInfos() {
    this.squadsFromGildenInfos = this.gildenService.findSquads(this.selectedTeam);
  }

  roundNumber(number) {
    return Math.round(number);
  }

  getPowerOfSquad(charakters) {
    var tempPower = 0;
    for (var i = 0; i < charakters.length; i++) {
      tempPower += charakters[i].Power;
    }
    return tempPower
  }

  formatGearLevel(level) {
    switch (level) {
      case 0:
        return '0';
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      case 6:
        return 'VI';
      case 7:
        return 'VII';
      case 8:
        return 'VIII';
      case 9:
        return 'IX';
      case 10:
        return 'X';
      case 11:
        return 'XI';
      case 12:
        return 'XII';
      default:
        return 'Unknown';
    }
  }

}

class squad{

  Name: string = 'SquadName';
  Charaktere: string[] = new Array();
  
}
