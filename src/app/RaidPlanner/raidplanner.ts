import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';

@Component({
  selector: 'raidplanner',
  templateUrl: './raidplanner.html',
  styleUrls: ['./raidplanner.css']
})
export class RaidPlannerComponent {
  
  public dmgP4 = 100;
  public squads: squad[] = null;
  public selectedSquad: squad;
  public raidDataSource: any;
  public columns: string[] = new Array();
  
  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

    this.getRaidPlannerTeams();

    if (this.squads == null)
    {
    this.squads = new Array();

    var jtr = new squad();
    jtr.Name = "JTR P1"

    jtr.Charaktere.push("Rey (Jedi Training)");
    jtr.Charaktere.push("BB-8");
    jtr.Charaktere.push("R2-D2");
    jtr.Charaktere.push("Resistance Trooper");
    jtr.Charaktere.push("Rey (Scavenger)");

    jtr.Zetas.push(1);
    jtr.Zetas.push(1);
    jtr.Zetas.push(1);
    jtr.Zetas.push(0);
    jtr.Zetas.push(0);

    this.squads.push(jtr);

    var jedi = new squad();
    jedi.Name = "Jedi P1"

    jedi.Charaktere.push("Grand Master Yoda");
    jedi.Charaktere.push("Hermit Yoda");
    jedi.Charaktere.push("Ezra Bridger");
    jedi.Charaktere.push("Aayla Secura");
    jedi.Charaktere.push("Visas Marr");

    jedi.Zetas.push(1);
    jedi.Zetas.push(1);
    jedi.Zetas.push(1);
    jedi.Zetas.push(0);
    jedi.Zetas.push(0);

    this.squads.push(jedi);

    var trooper = new squad();
    trooper.Name = "Truppler P2"

    trooper.Charaktere.push("General Veers");
    trooper.Charaktere.push("Grand Admiral Thrawn");
    trooper.Charaktere.push("Colonel Starck");
    trooper.Charaktere.push("Shoretrooper");
    trooper.Charaktere.push("Snowtrooper");

    trooper.Zetas.push(1);
    trooper.Zetas.push(0);
    trooper.Zetas.push(0);
    trooper.Zetas.push(0);
    trooper.Zetas.push(0);

    this.squads.push(trooper);

    var ewoks = new squad();
    ewoks.Name = "Ewoks P2"

    ewoks.Charaktere.push("Chief Chirpa");
    ewoks.Charaktere.push("Wicket");
    ewoks.Charaktere.push("Logray");
    ewoks.Charaktere.push("Ewok Scout");
    ewoks.Charaktere.push("Ewok Elder");

    ewoks.Zetas.push(1);
    ewoks.Zetas.push(1);
    ewoks.Zetas.push(1);
    ewoks.Zetas.push(0);
    ewoks.Zetas.push(0);

    this.squads.push(ewoks);

    var halunken = new squad();
    halunken.Name = "Halunken P2"

    halunken.Charaktere.push("Bossk");
    halunken.Charaktere.push("Greedo");
    halunken.Charaktere.push("Boba Fett");
    halunken.Charaktere.push("IG-88");
    halunken.Charaktere.push("Dengar");

    halunken.Zetas.push(2);
    halunken.Zetas.push(1);
    halunken.Zetas.push(1);
    halunken.Zetas.push(1);
    halunken.Zetas.push(1);

    this.squads.push(halunken);

    var leia = new squad();
    leia.Name = "Leia P2"

    leia.Charaktere.push("Admiral Ackbar");
    leia.Charaktere.push("Princess Leia");
    leia.Charaktere.push("General Kenobi");
    leia.Charaktere.push("Barriss Offee");
    leia.Charaktere.push("Stormtrooper Han");

    leia.Zetas.push(0);
    leia.Zetas.push(0);
    leia.Zetas.push(0);
    leia.Zetas.push(1);
    leia.Zetas.push(0);

    this.squads.push(leia);

    var impP2 = new squad();
    impP2.Name = "Imp Darth P2"

    impP2.Charaktere.push("Emperor Palpatine");
    impP2.Charaktere.push("Darth Vader");
    impP2.Charaktere.push("Darth Sion");
    impP2.Charaktere.push("Darth Nihilus");
    impP2.Charaktere.push("Sith Trooper");

    impP2.Zetas.push(1);
    impP2.Zetas.push(0);
    impP2.Zetas.push(0);
    impP2.Zetas.push(0);
    impP2.Zetas.push(0);

    this.squads.push(impP2);

    var phoenix = new squad();
    phoenix.Name = "Phoenix P2"

    phoenix.Charaktere.push("Hera Syndulla");
    phoenix.Charaktere.push("Sabine Wren");
    phoenix.Charaktere.push("Ezra Bridger");
    phoenix.Charaktere.push("Garazeb \"Zeb\" Orrelios");
    phoenix.Charaktere.push("Kanan Jarrus");

    phoenix.Zetas.push(1);
    phoenix.Zetas.push(1);
    phoenix.Zetas.push(1);
    phoenix.Zetas.push(1);
    phoenix.Zetas.push(1);

    this.squads.push(phoenix);

    var chexMix1 = new squad();
    chexMix1.Name = "ChexMix (orig) P3"

    chexMix1.Charaktere.push("Commander Luke Skywalker");
    chexMix1.Charaktere.push("Han Solo");
    chexMix1.Charaktere.push("Pao");
    chexMix1.Charaktere.push("Chirrut Îmwe");
    chexMix1.Charaktere.push("Death Trooper");

    chexMix1.Zetas.push(2);
    chexMix1.Zetas.push(1);
    chexMix1.Zetas.push(0);
    chexMix1.Zetas.push(0);
    chexMix1.Zetas.push(0);

    this.squads.push(chexMix1);

    var chexMix2 = new squad();

    chexMix2.Name = "ChexMix (Greedo) P3"

    chexMix2.Charaktere.push("Boba Fett");
    chexMix2.Charaktere.push("Greedo");
    chexMix2.Charaktere.push("Pao");
    chexMix2.Charaktere.push("Chirrut Îmwe");
    chexMix2.Charaktere.push("Death Trooper");

    chexMix2.Zetas.push(0);
    chexMix2.Zetas.push(0);
    chexMix2.Zetas.push(0);
    chexMix2.Zetas.push(0);
    chexMix2.Zetas.push(0);

    this.squads.push(chexMix2);

    var nsP4 = new squad();

    nsP4.Name = "NS P4"

    nsP4.Charaktere.push("Asajj Ventress");
    nsP4.Charaktere.push("Mother Talzin");
    nsP4.Charaktere.push("Talia");
    nsP4.Charaktere.push("Nightsister Zombie");
    nsP4.Charaktere.push("Old Daka");

    nsP4.Zetas.push(2);
    nsP4.Zetas.push(1);
    nsP4.Zetas.push(0);
    nsP4.Zetas.push(0);
    nsP4.Zetas.push(0);

    this.squads.push(nsP4);

    var firstOrder = new squad();

    firstOrder.Name = "FO P4"

    firstOrder.Charaktere.push("Kylo Ren (Unmasked)");
    firstOrder.Charaktere.push("First Order Executioner");
    firstOrder.Charaktere.push("First Order SF TIE Pilot");
    firstOrder.Charaktere.push("First Order Stormtrooper");
    firstOrder.Charaktere.push("First Order Officer");

    firstOrder.Zetas.push(0);
    firstOrder.Zetas.push(0);
    firstOrder.Zetas.push(0);
    firstOrder.Zetas.push(0);
    firstOrder.Zetas.push(0);

    this.squads.push(firstOrder);

    this.saveRaidPlannerTeams(this.squads);

    }

    this.selectedSquad = this.squads[0];

    this.loadGridDatasource();

  }
  
  getRaidPlannerTeams() {
    if (localStorage.midiSquads != null)
      this.squads = JSON.parse(localStorage.midiSquads);
    console.log('squads', this.squads);
  }

  saveRaidPlannerTeams(squads: squad[]) {
    localStorage.midiSquads = JSON.stringify(squads);
    this.squads = squads;
    console.log('squads', this.squads);
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
      location: 'before',
      template: 'totalGroupCount'
    }, {
        location: 'before',
        widget: 'dxSelectBox',
        options: {
          width: 200,
          items: [{
            value: 'CustomerStoreState',
            text: 'Grouping by State'
          }, {
            value: 'Employee',
            text: 'Grouping by Employee'
          }],
          displayExpr: 'text',
          valueExpr: 'value',
          value: 'CustomerStoreState',
        }
      }, 
    );
  }

  deleteThisSquad() {
    var index = this.squads.indexOf(this.selectedSquad);
    if (index > -1) {
      this.squads.splice(index, 1);
    }
    this.selectedSquad = this.squads[this.squads.length-1];
    this.saveRaidPlannerTeams(this.squads);
  }

  addNewSquad() {
    var template = new squad();
    template.Name = "New Squad"

    template.Charaktere.push("BB-8");
    template.Charaktere.push("BB-8");
    template.Charaktere.push("BB-8");
    template.Charaktere.push("BB-8");
    template.Charaktere.push("BB-8");

    template.Zetas.push(0);
    template.Zetas.push(0);
    template.Zetas.push(0);
    template.Zetas.push(0);
    template.Zetas.push(0);

    this.squads.push(template);
    this.selectedSquad = this.squads[this.squads.length - 1];

    this.saveRaidPlannerTeams(this.squads);
  }

  // When the user clicks the button, open the modal 
  openModal() {
    // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal() {  // Get the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    this.loadGridDatasource();
    this.saveRaidPlannerTeams(this.squads);
  }

  loadGridDatasource() {

    var dataSourceTemp = new Array();

    var columnNames = new Array();

    columnNames.push("Member");

    for (var i = 0; i < this.squads.length; i++)
      columnNames.push(this.squads[i].Name);

    this.columns = columnNames;

    for (var i = 0; i < this.gildenService.gildenInfos.roster.length; i++)
    {

      var memberNow = new Array();
      memberNow.push(this.gildenService.gildenInfos.roster[i].name);

      for (var x = 0; x < this.squads.length; x++) {
        memberNow.push(this.playerGotSquadExact(this.gildenService.gildenInfos.roster[i], this.squads[x]));
      }

      dataSourceTemp.push(memberNow);

    }

    this.raidDataSource = dataSourceTemp;

    console.log(this.raidDataSource);

  }

  colorizeCell(event) {
    if (event.columnIndex == 0)
      return;
    
    // debugger;
    if (event.value < 5)
      event.cellElement.bgColor = "FF0000";
    else if (event.value < 10)
      event.cellElement.bgColor = "FF1900";
    else if (event.value < 15)
      event.cellElement.bgColor = "FF3300";
    else if (event.value < 20)
      event.cellElement.bgColor = "FF4C00";
    else if (event.value < 25)
      event.cellElement.bgColor = "FF6600";
    else if (event.value < 30)
      event.cellElement.bgColor = "FF7F00";
    else if (event.value < 35)
      event.cellElement.bgColor = "FF9900";
    else if (event.value < 40)
      event.cellElement.bgColor = "FFB200";
    else if (event.value < 45)
      event.cellElement.bgColor = "FFCC00";
    else if (event.value < 50)
      event.cellElement.bgColor = "FFE500";
    else if (event.value < 55)
      event.cellElement.bgColor = "FFFF00";
    else if (event.value < 60)
      event.cellElement.bgColor = "FFF000";
    else if (event.value < 65)
      event.cellElement.bgColor = "E5F100";
    else if (event.value < 70)
      event.cellElement.bgColor = "CCF300";
    else if (event.value < 75)
      event.cellElement.bgColor = "B2F400";
    else if (event.value < 80)
      event.cellElement.bgColor = "99F600";
    else if (event.value < 85)
      event.cellElement.bgColor = "7FF700";
    else if (event.value < 90)
      event.cellElement.bgColor = "66F900";
    else if (event.value < 95)
      event.cellElement.bgColor = "4CFA00";
    else if (event.value < 100)
      event.cellElement.bgColor = "32FC00";
    else if (event.value > 99)
      event.cellElement.bgColor = "32FC00";
  }

  playerGotSquadExact(player, squad) {

    var squadNow = squad;
    
    if (squadNow == null)
      return -100;

    var squadFound = this.gildenService.findSquadWithMember(squadNow, player);

    var zetasInSquad = 0;
    for (var i = 0; i < squadFound.length; i++) {
      zetasInSquad += squadNow.Zetas[i]
    }

    var onehundredPercent = (1 * 7 * 5) + (2 * 12 * 5) + (5*zetasInSquad);

    if (squadFound.length < 1)
      return 0;

    var sterneSum = 0;
    var GearSum = 0;
    var ZetasSum = 0;

    for (var i = 0; i < squadFound.length; i++) {

      sterneSum += squadFound[i].Sterne;
      GearSum += squadFound[i].gearLevel;
      ZetasSum += squadFound[i].Zetas;

    }

    var getPercent = (1 * sterneSum) + (2 * GearSum) + (5 * ZetasSum);
    
    return ((getPercent / onehundredPercent) * 100).toFixed(0);
  }

  playerGotSquad(player, squadName) {

    var squadNow = this.squads.find(s => s.Name == squadName);

    var tempBewertung =  0;

    if (squadNow == null)
      return tempBewertung;
    
    var squadFound = this.gildenService.findSquadWithMember(squadNow, player);

    var hasAll7Star = true;
    var hasAllG11 = true;
    var hasAllZeta = true;

    if(squadFound.length < 5)
      return -1;
    
    for (var i = 0; i < squadFound.length; i++) {
      if (squadFound[i].Sterne < 7) {
        hasAll7Star = false;
      }
      if (squadFound[i].gearLevel < 11) {
        hasAllG11 = false;
      }
      if (squadFound[i].Zetas < squadNow.Zetas[i]) {
        hasAllZeta = false;
      }
    }

    if (hasAll7Star == true)
      tempBewertung += 1;
    if (hasAllG11 == true)
      tempBewertung += 1;
    if (hasAllZeta == true)
      tempBewertung += 1;
    
    return tempBewertung;
  }

  alertSquad(squadNow: squad) {

    var charString = "";

    for (var i = 0; i < squadNow.Charaktere.length; i++) {
      charString += "Name : '" + squadNow.Charaktere[i] + "' Zetas needed: " + squadNow.Zetas[i] + "\n\r";
    }

    alert('The squad ' + squadNow.Name + ' has the following Charackters: \n\r ' + charString);

  }
  
}

class squad {

  Name: string = 'SquadName';
  Charaktere: string[] = new Array();
  Zetas: number[] = new Array();

}
