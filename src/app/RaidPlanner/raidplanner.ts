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
  
  public dmgP4 = 100;
  public squads: squad[];

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

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
