import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'raidplanner',
  templateUrl: './raidplanner.html',
  styleUrls: ['./raidplanner.css']
})
export class RaidPlannerComponent {

  public ActualPlayer: any;
  public SelectedChars: any[];
  public TempEditChars: any[];
  public TempIndexOfPhase: number;

  public Phase1: squadForRaid[];
  public Phase2: squadForRaid[];
  public Phase3: squadForRaid[];
  public Phase4: squadForRaid[];
  public SelectedPhase: number;
  public DamageNow: number;

  public dmgP1 = 100;
  public dmgP2 = 100;
  public dmgP3 = 100;
  public dmgP4 = 100;

  squadsFromGildenInfos: any;
  myTeams: squad[] = new Array();
  selectedTeam: any;

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

    this.ActualPlayer = gildenService.gildenInfos.Members[0];
    this.SelectedChars = new Array();
    this.SelectedPhase = 1;
    this.DamageNow = 0.1;

    this.Phase1 = new Array();
    this.Phase2 = new Array();
    this.Phase3 = new Array();
    this.Phase4 = new Array();

    this.dmgP1 = 100;
    this.dmgP2 = 100;
    this.dmgP3 = 100;
    this.dmgP4 = 100;


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

    this.loadRaidPlan();

  }
  
  loadRaidPlan() {
    if (localStorage.raidPhase1 != null)
      this.Phase1 = JSON.parse(localStorage.raidPhase1);
    if (localStorage.raidPhase2 != null)
      this.Phase2 = JSON.parse(localStorage.raidPhase2);
    if (localStorage.raidPhase3 != null)
      this.Phase3 = JSON.parse(localStorage.raidPhase3);
    if (localStorage.raidPhase4 != null)
      this.Phase4 = JSON.parse(localStorage.raidPhase4);
  }

  saveRaidPlan() {
    localStorage.raidPhase1 = JSON.stringify(this.Phase1);
    localStorage.raidPhase2 = JSON.stringify(this.Phase2);
    localStorage.raidPhase3 = JSON.stringify(this.Phase3);
    localStorage.raidPhase4 = JSON.stringify(this.Phase4);
  }

  selectChar(charakter) {

    if (this.SelectedChars.indexOf(charakter) > -1)
    {
      this.SelectedChars.splice(this.SelectedChars.indexOf(charakter), 1);
    }
    else
    {
      if (this.SelectedChars.length > 4)
      {
        alert('a team can only hold 5 members');
      }
      else
      {
        this.SelectedChars.push(charakter);
      }
    }

  }

  removeSquadP1(squadForRaid)
  {
    var strconfirm = confirm("Are you sure you want to delete this squad?");
    if (strconfirm)
    {
      this.dmgP1 = 100;
      this.Phase1.splice(this.Phase1.indexOf(squadForRaid), 1);
      this.saveRaidPlan();
    }
  }

  removeSquadP2(squadForRaid)
  {
    var strconfirm = confirm("Are you sure you want to delete this squad?");
    if (strconfirm)
    {
      this.dmgP2 = 100;
      this.Phase2.splice(this.Phase2.indexOf(squadForRaid), 1);
      this.saveRaidPlan();
    }
  }

  removeSquadP3(squadForRaid)
  {
    var strconfirm = confirm("Are you sure you want to delete this squad?");
    if (strconfirm)
    {
      this.dmgP3 = 100;
      this.Phase3.splice(this.Phase3.indexOf(squadForRaid), 1);
      this.saveRaidPlan();
    }
  }

  removeSquadP4(squadForRaid)
  {
    var strconfirm = confirm("Are you sure you want to delete this squad?");
    if (strconfirm)
    {
      this.dmgP4 = 100;
      this.Phase4.splice(this.Phase4.indexOf(squadForRaid), 1);
      this.saveRaidPlan();
    }
   }

  resetDmgDone() {
    this.dmgP1 = 100;
    this.dmgP2 = 100;
    this.dmgP3 = 100;
    this.dmgP4 = 100;
  }

  getDmg1Now(Damage) {
    this.dmgP1 = this.dmgP1 - Damage;
    return this.dmgP1.toFixed(2);
  }

  getDmg2Now(Damage) {
    this.dmgP2 = this.dmgP2 - Damage;
    return this.dmgP2.toFixed(2);
  }

  getDmg3Now(Damage) {
    this.dmgP3 = this.dmgP3 - Damage;
    return this.dmgP3.toFixed(2);
  }

  getDmg4Now(Damage) {
    this.dmgP4 = this.dmgP4 - Damage;
    return this.dmgP4.toFixed(2);
  }

  charInTemp(charakter) {
    for (var i = 0; i < this.TempEditChars.length; i++) {
      if (this.TempEditChars[i].Name == charakter.Name && this.TempEditChars[i].Besitzer == charakter.Besitzer) {
        console.log('true for ' + charakter.Name);
          return true;
      }
    }
    return false;
  }

  charAlreadyPlaced(charakter)
  {

    for (var i = 0; i < this.Phase1.length; i++)
    {
      for (var x = 0; x < this.Phase1[i].charaktere.length; x++)
      {
        if (this.Phase1[i].charaktere[x].Name == charakter.Name && this.Phase1[i].charaktere[x].Besitzer == charakter.Besitzer )
        {
          return true;
        }
      }
    }

    for (var i = 0; i < this.Phase2.length; i++) {
      for (var x = 0; x < this.Phase2[i].charaktere.length; x++) {
        if (this.Phase2[i].charaktere[x].Name == charakter.Name && this.Phase2[i].charaktere[x].Besitzer == charakter.Besitzer) {
          return true;
        }
      }
    }

    for (var i = 0; i < this.Phase3.length; i++) {
      for (var x = 0; x < this.Phase3[i].charaktere.length; x++) {
        if (this.Phase3[i].charaktere[x].Name == charakter.Name && this.Phase3[i].charaktere[x].Besitzer == charakter.Besitzer) {
          return true;
        }
      }
    }

    for (var i = 0; i < this.Phase4.length; i++) {
      for (var x = 0; x < this.Phase4[i].charaktere.length; x++) {
        if (this.Phase4[i].charaktere[x].Name == charakter.Name && this.Phase4[i].charaktere[x].Besitzer == charakter.Besitzer) {
          return true;
        }
      }
    }

    return false;;
  }

  editSquadInPhase() {

    var nowSquad = new squadForRaid();

    for (var i = 0; i < this.SelectedChars.length; i++) {
      nowSquad.charaktere.push(new charNameAndMember(this.SelectedChars[i].Name, this.SelectedChars[i].Besitzer));
    }

    nowSquad.owner = this.SelectedChars[0].Besitzer;
    nowSquad.damage = this.DamageNow;

    if (this.SelectedPhase == 1)
      this.Phase1[this.TempIndexOfPhase] = nowSquad;
    if (this.SelectedPhase == 2)
      this.Phase2[this.TempIndexOfPhase] = nowSquad;
    if (this.SelectedPhase == 3)
      this.Phase3[this.TempIndexOfPhase] = nowSquad;
    if (this.SelectedPhase == 4)
      this.Phase4[this.TempIndexOfPhase] = nowSquad;

    this.SelectedChars = new Array();

    this.closeModalEDIT();
    this.saveRaidPlan();
  }

  addSquadToPhase() {

    var nowSquad = new squadForRaid();

    for (var i = 0; i < this.SelectedChars.length; i++) {
      nowSquad.charaktere.push(new charNameAndMember(this.SelectedChars[i].Name, this.SelectedChars[i].Besitzer));
    }
    
    nowSquad.owner = this.SelectedChars[0].Besitzer;
    nowSquad.damage = this.DamageNow;

    if(this.SelectedPhase == 1)
      this.Phase1.push(nowSquad);
    if (this.SelectedPhase == 2)
      this.Phase2.push(nowSquad);
    if (this.SelectedPhase == 3)
      this.Phase3.push(nowSquad);
    if (this.SelectedPhase == 4)
      this.Phase4.push(nowSquad);

    this.SelectedChars = new Array();
    
    this.closeModal();
    this.saveRaidPlan();

  }

  roundNumber(number) {
    return Math.round(number);
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


  //FROM SquadSearch


  getPowerOfSquad(charakters) {
    var tempPower = 0;
    for (var i = 0; i < charakters.length; i++) {
      tempPower += charakters[i].Power;
    }
    return tempPower
  }

  getSquadsFromGildenInfos() {
    this.squadsFromGildenInfos = this.gildenService.findSquads(this.selectedTeam);
  }

  getMyTeams() {
    if (localStorage.midiMyTeams != null)
      this.myTeams = JSON.parse(localStorage.midiMyTeams);
  }

  saveMyTeams() {
    localStorage.midiMyTeams = JSON.stringify(this.myTeams);
  }


  // When the user clicks the button, open the modal 
  openModal() {
    this.SelectedChars = new Array();
    if (this.ActualPlayer == null) {
      alert('please pick a player');
      return;
    } else {
      this.ActualPlayer.Charaktere = this.ActualPlayer.Charaktere.sort((a, b) => a.Power > b.Power ? -1 : a.Power < b.Power ? 1 : 0)
    }
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal() {  // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  // When the user clicks the button, open the modal 
  openModalEDIT(squadForRaid: squadForRaid, phase:number, index:number) {

    this.DamageNow = squadForRaid.damage;
    this.SelectedPhase = phase;
    this.TempIndexOfPhase = index;
    console.log(index);

    this.ActualPlayer = this.gildenService.getMemberByName(squadForRaid.owner);
    if (this.ActualPlayer == null) {
      alert('couldnt find member with name ' + squadForRaid.owner);
      return;
    }
    this.ActualPlayer.Charaktere = this.ActualPlayer.Charaktere.sort((a, b) => a.Power > b.Power ? -1 : a.Power < b.Power ? 1 : 0)

    this.SelectedChars = new Array();
    this.TempEditChars = new Array();
    for (var i = 0; i < squadForRaid.charaktere.length; i++) {
      var currChar = this.gildenService.findCharbyNameAndMember(squadForRaid.owner, squadForRaid.charaktere[i].Name);
      this.SelectedChars.push(currChar);
      this.TempEditChars.push(currChar);
    }

    console.log(this.TempEditChars);

    // Get the modal
    var modal = document.getElementById('myModalEDIT');
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModalEDIT() {  // Get the modal
    var modal = document.getElementById('myModalEDIT');
    modal.style.display = "none";
  }



  // When the user clicks the button, open the modal 
  openModalSQUAD() {

    alert('not ready yet');
    // Get the modal
    var modal = document.getElementById('myModalSQUAD');
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModalSQUAD() {  // Get the modal
    var modal = document.getElementById('myModalSQUAD');
    modal.style.display = "none";
  }
}

export class squadForRaid {

  public charaktere: charNameAndMember[];
  public owner: string;
  public damage: number;

  constructor() {
    this.charaktere = new Array();
  }

}

export class charNameAndMember {

  public Name: string;
  public Besitzer: string;

  constructor(name, besitzer) {
    this.Name = name;
    this.Besitzer = besitzer;
  }

}

class squad {

  Name: string = 'SquadName';
  Charaktere: string[] = new Array();

}
