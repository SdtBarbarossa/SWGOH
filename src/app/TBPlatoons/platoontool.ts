import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'platoontool',
  templateUrl: './platoontool.html',
  styleUrls: ['./platoontool.css']
})
export class TBPlatoonComponent {


  public ActualPhase: neededChar[] = new Array();

  public AllChars1: neededChar[] = new Array();
  public AllChars2: neededChar[] = new Array();
  public AllChars3: neededChar[] = new Array();
  public AllChars4: neededChar[] = new Array();
  public AllChars5: neededChar[] = new Array();
  public AllChars6: neededChar[] = new Array();
  public AllChars7: neededChar[] = new Array();

  public AllShips1: neededChar[] = new Array();
  public AllShips2: neededChar[] = new Array();
  public AllShips3: neededChar[] = new Array();
  public AllShips4: neededChar[] = new Array();
  public AllShips5: neededChar[] = new Array();
  public AllShips6: neededChar[] = new Array();
  public AllShips7: neededChar[] = new Array();

  public DSTB1: neededChar[] = new Array();
  public DSTB2: neededChar[] = new Array();
  public DSTB3: neededChar[] = new Array();

  public LSTB1: neededChar[] = new Array();
  public LSTB2: neededChar[] = new Array();
  public LSTB3: neededChar[] = new Array();

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {

    for (var x = 0; x < gildenService.charInfos.length; x++) {
      this.AllChars1.push(new neededChar(gildenService.charInfos[x].name, 10, 1, false));
      this.AllChars2.push(new neededChar(gildenService.charInfos[x].name, 10, 2, false));
      this.AllChars3.push(new neededChar(gildenService.charInfos[x].name, 10, 3, false));
      this.AllChars4.push(new neededChar(gildenService.charInfos[x].name, 10, 4, false));
      this.AllChars5.push(new neededChar(gildenService.charInfos[x].name, 10, 5, false));
      this.AllChars6.push(new neededChar(gildenService.charInfos[x].name, 10, 6, false));
      this.AllChars7.push(new neededChar(gildenService.charInfos[x].name, 10, 7, false));
    }

    for (var x = 0; x < gildenService.shipInfos.length; x++) {
      this.AllShips1.push(new neededChar(gildenService.shipInfos[x].name, 10, 1, true));
      this.AllShips2.push(new neededChar(gildenService.shipInfos[x].name, 10, 2, true));
      this.AllShips3.push(new neededChar(gildenService.shipInfos[x].name, 10, 3, true));
      this.AllShips4.push(new neededChar(gildenService.shipInfos[x].name, 10, 4, true));
      this.AllShips5.push(new neededChar(gildenService.shipInfos[x].name, 10, 5, true));
      this.AllShips6.push(new neededChar(gildenService.shipInfos[x].name, 10, 6, true));
      this.AllShips7.push(new neededChar(gildenService.shipInfos[x].name, 10, 7, true));
    }

    this.DSTB1.push(new neededChar("TIE Fighter Pilot", 11, 2, false ));
    this.DSTB1.push(new neededChar("Royal Guard", 11, 2, false ));
    this.DSTB1.push(new neededChar("Stormtrooper", 12, 2, false ));
    this.DSTB1.push(new neededChar("Magmatrooper", 11, 2, false ));
    this.DSTB1.push(new neededChar("Count Dooku", 7, 2, false ));
    this.DSTB1.push(new neededChar("IG-100 MagnaGuard", 6, 2, false ));
    this.DSTB1.push(new neededChar("B2 Super Battle Droid", 6, 2, false ));
    this.DSTB1.push(new neededChar("IG-86 Sentinel Droid", 6, 2, false ));
    this.DSTB1.push(new neededChar("Poggle the Lesser", 6, 2, false ));
    this.DSTB1.push(new neededChar("Death Trooper", 9, 2, false ));
    this.DSTB1.push(new neededChar("Sith Trooper", 5, 2, false ));
    this.DSTB1.push(new neededChar("Darth Maul", 5, 2, false ));
    this.DSTB1.push(new neededChar("Savage Opress", 5, 2, false ));
    this.DSTB1.push(new neededChar("Director Krennic", 5, 2, false ));
    this.DSTB1.push(new neededChar("Talia", 4, 2, false ));
    this.DSTB1.push(new neededChar("Old Daka", 4, 2, false ));
    this.DSTB1.push(new neededChar("Nightsister Initiate", 4, 2, false ));
    this.DSTB1.push(new neededChar("Nightsister Acolyte", 4, 2, false ));
    this.DSTB1.push(new neededChar("Asajj Ventress", 4, 2, false ));
    this.DSTB1.push(new neededChar("Sun Fac", 4, 2, false ));
    this.DSTB1.push(new neededChar("Imperial Super Commando", 2, 2, false ));
    this.DSTB1.push(new neededChar("Gar Saxon", 2, 2, false ));
    this.DSTB1.push(new neededChar("Darth Sidious", 3, 2, false ));
    this.DSTB1.push(new neededChar("Nute Gunray", 2, 2, false ));
    this.DSTB1.push(new neededChar("Grand Moff Tarkin", 4, 2, false ));
    this.DSTB1.push(new neededChar("Kylo Ren", 2, 2, false ));
    this.DSTB1.push(new neededChar("HK-47", 2, 2, false ));
    this.DSTB1.push(new neededChar("First Order TIE Pilot", 2, 2, false ));
    this.DSTB1.push(new neededChar("First Order Stormtrooper", 2, 2, false ));
    this.DSTB1.push(new neededChar("First Order Officer", 2, 2, false ));
    this.DSTB1.push(new neededChar("Captain Phasma", 2, 2, false ));
    this.DSTB1.push(new neededChar("Geonosian Spy", 2, 2, false ));
    this.DSTB1.push(new neededChar("Darth Nihilus", 2, 2, false ));
    this.DSTB1.push(new neededChar("Sith Assassin", 2, 2, false ));
    this.DSTB1.push(new neededChar("Shoretrooper", 3, 2, false ));
    this.DSTB1.push(new neededChar("Geonosian Soldier", 2, 2, false ));
    this.DSTB1.push(new neededChar("Gamorrean Guard", 3, 2, false ));
    this.DSTB1.push(new neededChar("Tusken Raider", 1, 2, false ));
    this.DSTB1.push(new neededChar("Mob Enforcer", 1, 2, false ));
    this.DSTB1.push(new neededChar("URoRRuR'R'R", 1, 2, false ));
    this.DSTB1.push(new neededChar("Tusken Shaman", 1, 2, false ));
    this.DSTB1.push(new neededChar("IG-88", 2, 2, false ));
    this.DSTB1.push(new neededChar("Greedo", 2, 2, false ));
    this.DSTB1.push(new neededChar("Dengar", 2, 2, false ));
    this.DSTB1.push(new neededChar("Boba Fett", 2, 2, false ));

    this.DSTB2.push(new neededChar("TIE Fighter Pilot", 13, 3, false ));
    this.DSTB2.push(new neededChar("Royal Guard", 11, 3, false ));
    this.DSTB2.push(new neededChar("Stormtrooper", 14, 3, false ));
    this.DSTB2.push(new neededChar("Magmatrooper", 13, 3, false ));
    this.DSTB2.push(new neededChar("Count Dooku", 7, 3, false ));
    this.DSTB2.push(new neededChar("IG-100 MagnaGuard", 7, 3, false ));
    this.DSTB2.push(new neededChar("B2 Super Battle Droid", 7, 3, false ));
    this.DSTB2.push(new neededChar("IG-86 Sentinel Droid", 7, 3, false ));
    this.DSTB2.push(new neededChar("Poggle the Lesser", 6, 3, false ));
    this.DSTB2.push(new neededChar("Death Trooper", 11, 3, false ));
    this.DSTB2.push(new neededChar("Sith Trooper", 4, 3, false ));
    this.DSTB2.push(new neededChar("Darth Maul", 4, 3, false ));
    this.DSTB2.push(new neededChar("Savage Opress", 4, 3, false ));
    this.DSTB2.push(new neededChar("Director Krennic", 7, 3, false ));
    this.DSTB2.push(new neededChar("Talia", 4, 3, false ));
    this.DSTB2.push(new neededChar("Old Daka", 4, 3, false ));
    this.DSTB2.push(new neededChar("Nightsister Initiate", 4, 3, false ));
    this.DSTB2.push(new neededChar("Nightsister Acolyte", 4, 3, false ));
    this.DSTB2.push(new neededChar("Asajj Ventress", 4, 3, false ));
    this.DSTB2.push(new neededChar("Sun Fac", 4, 3, false ));
    this.DSTB2.push(new neededChar("Imperial Super Commando", 2, 3, false ));
    this.DSTB2.push(new neededChar("Gar Saxon", 2, 3, false ));
    this.DSTB2.push(new neededChar("Darth Sidious", 2, 3, false ));
    this.DSTB2.push(new neededChar("Nute Gunray", 3, 3, false ));
    this.DSTB2.push(new neededChar("Grand Moff Tarkin", 4, 3, false ));
    this.DSTB2.push(new neededChar("Kylo Ren", 2, 3, false ));
    this.DSTB2.push(new neededChar("HK-47", 2, 3, false ));
    this.DSTB2.push(new neededChar("First Order TIE Pilot", 2, 3, false ));
    this.DSTB2.push(new neededChar("First Order Stormtrooper", 2, 3, false ));
    this.DSTB2.push(new neededChar("First Order Officer", 2, 3, false ));
    this.DSTB2.push(new neededChar("Captain Phasma", 2, 3, false ));
    this.DSTB2.push(new neededChar("Geonosian Spy", 2, 3, false ));
    this.DSTB2.push(new neededChar("Darth Nihilus", 2, 3, false ));
    this.DSTB2.push(new neededChar("Sith Assassin", 2, 3, false ));
    this.DSTB2.push(new neededChar("Shoretrooper", 3, 3, false ));
    this.DSTB2.push(new neededChar("Geonosian Soldier", 2, 3, false ));
    this.DSTB2.push(new neededChar("Gamorrean Guard", 1, 3, false ));
    this.DSTB2.push(new neededChar("Tusken Raider", 1, 3, false ));
    this.DSTB2.push(new neededChar("Mob Enforcer", 1, 3, false ));
    this.DSTB2.push(new neededChar("URoRRuR'R'R", 1, 3, false ));
    this.DSTB2.push(new neededChar("Tusken Shaman", 1, 3, false));

    this.DSTB3.push(new neededChar("TIE Fighter Pilot", 5, 4, false));
    this.DSTB3.push(new neededChar("Royal Guard", 6, 4, false));
    this.DSTB3.push(new neededChar("Count Dooku", 10, 4, false));
    this.DSTB3.push(new neededChar("IG-100 MagnaGuard", 9, 4, false));
    this.DSTB3.push(new neededChar("B2 Super Battle Droid", 9, 4, false));
    this.DSTB3.push(new neededChar("IG-86 Sentinel Droid", 8, 4, false));
    this.DSTB3.push(new neededChar("Poggle the Lesser", 8, 4, false));
    this.DSTB3.push(new neededChar("Sith Trooper", 8, 4, false));
    this.DSTB3.push(new neededChar("Darth Maul", 8, 4, false));
    this.DSTB3.push(new neededChar("Savage Opress", 7, 4, false));
    this.DSTB3.push(new neededChar("Director Krennic", 3, 4, false));
    this.DSTB3.push(new neededChar("Talia", 5, 4, false));
    this.DSTB3.push(new neededChar("Old Daka", 5, 4, false));
    this.DSTB3.push(new neededChar("Nightsister Initiate", 5, 4, false));
    this.DSTB3.push(new neededChar("Nightsister Acolyte", 5, 4, false));
    this.DSTB3.push(new neededChar("Asajj Ventress", 5, 4, false));
    this.DSTB3.push(new neededChar("Sun Fac", 4, 4, false));
    this.DSTB3.push(new neededChar("Imperial Super Commando", 6, 4, false));
    this.DSTB3.push(new neededChar("Gar Saxon", 6, 4, false));
    this.DSTB3.push(new neededChar("Darth Sidious", 5, 4, false));
    this.DSTB3.push(new neededChar("Nute Gunray", 4, 4, false));
    this.DSTB3.push(new neededChar("Grand Moff Tarkin", 1, 4, false));
    this.DSTB3.push(new neededChar("Kylo Ren", 4, 4, false));
    this.DSTB3.push(new neededChar("HK-47", 4, 4, false));
    this.DSTB3.push(new neededChar("First Order TIE Pilot", 4, 4, false));
    this.DSTB3.push(new neededChar("First Order TIE Fighter", 8, 4, true));
    this.DSTB3.push(new neededChar("First Order Stormtrooper", 4, 4, false));
    this.DSTB3.push(new neededChar("First Order Officer", 4, 4, false));
    this.DSTB3.push(new neededChar("Captain Phasma", 4, 4, false));
    this.DSTB3.push(new neededChar("Scimitar", 7, 4, true));
    this.DSTB3.push(new neededChar("Geonosian Spy", 3, 4, false));
    this.DSTB3.push(new neededChar("Darth Nihilus", 3, 4, false));
    this.DSTB3.push(new neededChar("Sith Assassin", 2, 4, false));
    this.DSTB3.push(new neededChar("Geonosian Soldier", 2, 4, false));
    this.DSTB3.push(new neededChar("Gauntlet Starfighter", 6, 4, true));
    this.DSTB3.push(new neededChar("Gamorrean Guard", 2, 4, false));
    this.DSTB3.push(new neededChar("Umbaran Starfighter", 5, 4, true));
    this.DSTB3.push(new neededChar("Tusken Raider", 2, 4, false));
    this.DSTB3.push(new neededChar("TIE Reaper", 4, 4, true));
    this.DSTB3.push(new neededChar("Slave I", 4, 4, true));
    this.DSTB3.push(new neededChar("Mob Enforcer", 2, 4, false));
    this.DSTB3.push(new neededChar("Jedi Consular's Starfighter", 4, 4, true));
    this.DSTB3.push(new neededChar("Imperial TIE Fighter", 4, 4, true));
    this.DSTB3.push(new neededChar("Geonosian Spy's Starfighter", 4, 4, true));
    this.DSTB3.push(new neededChar("Geonosian Soldier's Starfighter", 4, 4, true));
    this.DSTB3.push(new neededChar("Clone Sergeant's ARC-170", 4, 4, true));
    this.DSTB3.push(new neededChar("Ahsoka Tano's Jedi Starfighter", 4, 4, true));
    this.DSTB3.push(new neededChar("Wedge Antilles's X-wing", 3, 4, true));
    this.DSTB3.push(new neededChar("URoRRuR'R'R", 1, 4, false));
    this.DSTB3.push(new neededChar("Tusken Shaman", 1, 4, false));
    this.DSTB3.push(new neededChar("Poe Dameron's X-Wing", 3, 4, true));
    this.DSTB3.push(new neededChar("Plo Koon's Jedi Starfighter", 3, 4, true));
    this.DSTB3.push(new neededChar("Phantom II", 3, 4, true));
    this.DSTB3.push(new neededChar("Kylo Ren's Command Shuttle", 3, 4, true));
    this.DSTB3.push(new neededChar("Ghost", 3, 4, true));
    this.DSTB3.push(new neededChar("Bistan's U-Wing", 3, 4, true));
    this.DSTB3.push(new neededChar("Tie Advanced x1", 2, 4, true));
    this.DSTB3.push(new neededChar("Rex's ARC-170", 2, 4, true));
    this.DSTB3.push(new neededChar("Resistance X-Wing", 2, 4, true));
    this.DSTB3.push(new neededChar("Millennium Falcon (Ep VII)", 2, 4, true));
    this.DSTB3.push(new neededChar("Cassian's U-Wing", 2, 4, true));
    this.DSTB3.push(new neededChar("Biggs Darklighter's X-Wing", 1, 4, true));
    this.DSTB3.push(new neededChar("Grand Admiral Thrawn", 2, 4, false));
    this.DSTB3.push(new neededChar("General Grievous", 2, 4, false));
    this.DSTB3.push(new neededChar("Emperor Palpatine", 2, 4, false));

    this.LSTB1.push(new neededChar("Aayla Secura", 4, 2, false));
    this.LSTB1.push(new neededChar("Jedi Knight Anakin", 3, 2, false));
    this.LSTB1.push(new neededChar("Ahsoka Tano", 3, 2, false));
    this.LSTB1.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 2, 2, false));
    this.LSTB1.push(new neededChar("Mace Windu", 3, 2, false));
    this.LSTB1.push(new neededChar("Lobot", 3, 2, false));
    this.LSTB1.push(new neededChar("Kit Fisto", 2, 2, false));
    this.LSTB1.push(new neededChar("Teebo", 2, 2, false));
    this.LSTB1.push(new neededChar("Qui-Gon Jinn", 2, 2, false));
    this.LSTB1.push(new neededChar("Plo Koon", 2, 2, false));
    this.LSTB1.push(new neededChar("Paploo", 2, 2, false));
    this.LSTB1.push(new neededChar("Jedi Consular", 4, 2, false));
    this.LSTB1.push(new neededChar("Ima-Gun Di", 2, 2, false));
    this.LSTB1.push(new neededChar("Ewok Scout", 2, 2, false));
    this.LSTB1.push(new neededChar("Ewok Elder", 2, 2, false));
    this.LSTB1.push(new neededChar("Clone Sergeant - Phase I", 2, 2, false));
    this.LSTB1.push(new neededChar("Jedi Knight Guardian", 2, 2, false));
    this.LSTB1.push(new neededChar("Barriss Offee", 2, 2, false));
    this.LSTB1.push(new neededChar("Luke Skywalker (Farmboy)", 1, 2, false));
    this.LSTB1.push(new neededChar("Wedge Antilles", 1, 2, false));
    this.LSTB1.push(new neededChar("Princess Leia", 2, 2, false));
    this.LSTB1.push(new neededChar("Biggs Darklighter", 1, 2, false));
    this.LSTB1.push(new neededChar("Ahsoka Tano (Fulcrum)", 1, 2, false));
    this.LSTB1.push(new neededChar("Admiral Ackbar", 2, 2, false));
    this.LSTB1.push(new neededChar("Stormtrooper Han", 1, 2, false));
    this.LSTB1.push(new neededChar("Rey (Scavenger)", 1, 2, false));
    this.LSTB1.push(new neededChar("Resistance Trooper", 1, 2, false));
    this.LSTB1.push(new neededChar("Resistance Pilot", 1, 2, false));
    this.LSTB1.push(new neededChar("Poe Dameron", 1, 2, false));
    this.LSTB1.push(new neededChar("Pao", 3, 2, false));
    this.LSTB1.push(new neededChar("Logray", 1, 2, false));
    this.LSTB1.push(new neededChar("Lando Calrissian", 1, 2, false));
    this.LSTB1.push(new neededChar("K-2SO", 2, 2, false));
    this.LSTB1.push(new neededChar("Jyn Erso", 2, 2, false));
    this.LSTB1.push(new neededChar("Jawa Scavenger", 1, 2, false));
    this.LSTB1.push(new neededChar("Jawa Engineer", 1, 2, false));
    this.LSTB1.push(new neededChar("Jawa", 1, 2, false));
    this.LSTB1.push(new neededChar("Finn", 1, 2, false));
    this.LSTB1.push(new neededChar("Dathcha", 1, 2, false));
    this.LSTB1.push(new neededChar("CT-5555 \"Fives\"", 1, 2, false));
    this.LSTB1.push(new neededChar("CT-21-0408 \"Echo\"", 1, 2, false));
    this.LSTB1.push(new neededChar("Coruscant Underworld Police", 1, 2, false));
    this.LSTB1.push(new neededChar("Clone Wars Chewbacca", 1, 2, false));
    this.LSTB1.push(new neededChar("Chief Nebit", 1, 2, false));
    this.LSTB1.push(new neededChar("Chief Chirpa", 1, 2, false));
    this.LSTB1.push(new neededChar("CC-2224 \"Cody\"", 1, 2, false));
    this.LSTB1.push(new neededChar("Cassian Andor", 2, 2, false));
    this.LSTB1.push(new neededChar("Bistan", 3, 2, false));
    this.LSTB1.push(new neededChar("CT-7567 \"Rex\"", 1, 2, false));
    this.LSTB1.push(new neededChar("Bodhi Rook", 2, 2, false));
    this.LSTB1.push(new neededChar("Chirrut Îmwe", 1, 2, false));
    this.LSTB1.push(new neededChar("Baze Malbus", 1, 2, false));
    this.LSTB1.push(new neededChar("Scarif Rebel Pathfinder", 1, 2, false));
    this.LSTB1.push(new neededChar("Luminara Unduli", 1, 2, false));

    this.LSTB2.push(new neededChar("Aayla Secura", 8, 3, false));
    this.LSTB2.push(new neededChar("Jedi Knight Anakin", 6, 3, false));
    this.LSTB2.push(new neededChar("Kanan Jarrus", 9, 3, false));
    this.LSTB2.push(new neededChar("Ezra Bridger", 9, 3, false));
    this.LSTB2.push(new neededChar("Ahsoka Tano", 6, 3, false));
    this.LSTB2.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 5, 3, false));
    this.LSTB2.push(new neededChar("Mace Windu", 4, 3, false));
    this.LSTB2.push(new neededChar("Lobot", 7, 3, false));
    this.LSTB2.push(new neededChar("Kit Fisto", 4, 3, false));
    this.LSTB2.push(new neededChar("Teebo", 4, 3, false));
    this.LSTB2.push(new neededChar("Qui-Gon Jinn", 4, 3, false));
    this.LSTB2.push(new neededChar("Plo Koon", 4, 3, false));
    this.LSTB2.push(new neededChar("Paploo", 4, 3, false));
    this.LSTB2.push(new neededChar("Jedi Consular", 4, 3, false));
    this.LSTB2.push(new neededChar("Ima-Gun Di", 4, 3, false));
    this.LSTB2.push(new neededChar("Ewok Scout", 4, 3, false));
    this.LSTB2.push(new neededChar("Ewok Elder", 4, 3, false));
    this.LSTB2.push(new neededChar("Clone Sergeant - Phase I", 4, 3, false));
    this.LSTB2.push(new neededChar("Jedi Knight Guardian", 4, 3, false));
    this.LSTB2.push(new neededChar("Barriss Offee", 4, 3, false));
    this.LSTB2.push(new neededChar("Luke Skywalker (Farmboy)", 3, 3, false));
    this.LSTB2.push(new neededChar("Wedge Antilles", 5, 3, false));
    this.LSTB2.push(new neededChar("Princess Leia", 2, 3, false));
    this.LSTB2.push(new neededChar("Hera Syndulla", 5, 3, false));
    this.LSTB2.push(new neededChar("Biggs Darklighter", 5, 3, false));
    this.LSTB2.push(new neededChar("Ahsoka Tano (Fulcrum)", 5, 3, false));
    this.LSTB2.push(new neededChar("Admiral Ackbar", 2, 3, false));
    this.LSTB2.push(new neededChar("Stormtrooper Han", 2, 3, false));
    this.LSTB2.push(new neededChar("Sabine Wren", 4, 3, false));
    this.LSTB2.push(new neededChar("Rey (Scavenger)", 2, 3, false));
    this.LSTB2.push(new neededChar("Resistance Trooper", 2, 3, false));
    this.LSTB2.push(new neededChar("Resistance Pilot", 2, 3, false));
    this.LSTB2.push(new neededChar("Poe Dameron", 2, 3, false));
    this.LSTB2.push(new neededChar("Logray", 2, 3, false));
    this.LSTB2.push(new neededChar("Lando Calrissian", 3, 3, false));
    this.LSTB2.push(new neededChar("Jawa Scavenger", 2, 3, false));
    this.LSTB2.push(new neededChar("Jawa Engineer", 2, 3, false));
    this.LSTB2.push(new neededChar("Jawa", 2, 3, false));
    this.LSTB2.push(new neededChar("Finn", 2, 3, false));
    this.LSTB2.push(new neededChar("Dathcha", 2, 3, false));
    this.LSTB2.push(new neededChar("CT-5555 \"Fives\"", 2, 3, false));
    this.LSTB2.push(new neededChar("CT-21-0408 \"Echo\"", 2, 3, false));
    this.LSTB2.push(new neededChar("Coruscant Underworld Police", 2, 3, false));
    this.LSTB2.push(new neededChar("Clone Wars Chewbacca", 2, 3, false));
    this.LSTB2.push(new neededChar("Chief Nebit", 2, 3, false));
    this.LSTB2.push(new neededChar("Chief Chirpa", 2, 3, false));
    this.LSTB2.push(new neededChar("CC-2224 \"Cody\"", 2, 3, false));
    this.LSTB2.push(new neededChar("Garazeb \"Zeb\" Orrelios", 3, 3, false));
    this.LSTB2.push(new neededChar("CT-7567 \"Rex\"", 2, 3, false));
    this.LSTB2.push(new neededChar("Chopper", 3, 3, false));

    this.LSTB3.push(new neededChar("Aayla Secura", 8, 4, false));
    this.LSTB3.push(new neededChar("Jedi Knight Anakin", 7, 4, false));
    this.LSTB3.push(new neededChar("Kanan Jarrus", 5, 4, false));
    this.LSTB3.push(new neededChar("Ezra Bridger", 5, 4, false));
    this.LSTB3.push(new neededChar("Ahsoka Tano", 5, 4, false));
    this.LSTB3.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 5, 4, false));
    this.LSTB3.push(new neededChar("Mace Windu", 5, 4, false));
    this.LSTB3.push(new neededChar("Lobot", 2, 4, false));
    this.LSTB3.push(new neededChar("Kit Fisto", 5, 4, false));
    this.LSTB3.push(new neededChar("Teebo", 4, 4, false));
    this.LSTB3.push(new neededChar("Qui-Gon Jinn", 4, 4, false));
    this.LSTB3.push(new neededChar("Plo Koon", 4, 4, false));
    this.LSTB3.push(new neededChar("Paploo", 4, 4, false));
    this.LSTB3.push(new neededChar("Jedi Consular", 2, 4, false));
    this.LSTB3.push(new neededChar("Ima-Gun Di", 4, 4, false));
    this.LSTB3.push(new neededChar("Ewok Scout", 4, 4, false));
    this.LSTB3.push(new neededChar("Ewok Elder", 4, 4, false));
    this.LSTB3.push(new neededChar("Clone Sergeant - Phase I", 4, 4, false));
    this.LSTB3.push(new neededChar("Jedi Knight Guardian", 3, 4, false));
    this.LSTB3.push(new neededChar("Barriss Offee", 3, 4, false));
    this.LSTB3.push(new neededChar("Luke Skywalker (Farmboy)", 4, 4, false));
    this.LSTB3.push(new neededChar("Wedge Antilles", 1, 4, false));
    this.LSTB3.push(new neededChar("Princess Leia", 3, 4, false));
    this.LSTB3.push(new neededChar("Hera Syndulla", 2, 4, false));
    this.LSTB3.push(new neededChar("First Order TIE FIghter", 7, 4, true));
    this.LSTB3.push(new neededChar("Biggs Darklighter", 1, 4, false));
    this.LSTB3.push(new neededChar("Ahsoka Tano (Fulcrum)", 1, 4, false));
    this.LSTB3.push(new neededChar("Admiral Ackbar", 3, 4, false));
    this.LSTB3.push(new neededChar("Umbaran Starfighter", 6, 4, true));
    this.LSTB3.push(new neededChar("Stormtrooper Han", 3, 4, false));
    this.LSTB3.push(new neededChar("Sabine Wren", 2, 4, false));
    this.LSTB3.push(new neededChar("R2-D2", 6, 4, false));
    this.LSTB3.push(new neededChar("TIE Reaper", 5, 4, true));
    this.LSTB3.push(new neededChar("Scimitar", 5, 4, true));
    this.LSTB3.push(new neededChar("Rey (Scavenger)", 2, 4, false));
    this.LSTB3.push(new neededChar("Resistance Trooper", 2, 4, false));
    this.LSTB3.push(new neededChar("Resistance Pilot", 2, 4, false));
    this.LSTB3.push(new neededChar("Poe Dameron's X-wing", 5, 4, true));
    this.LSTB3.push(new neededChar("Poe Dameron", 2, 4, false));
    this.LSTB3.push(new neededChar("Pao", 2, 4, false));
    this.LSTB3.push(new neededChar("Logray", 2, 4, false));
    this.LSTB3.push(new neededChar("Lando Calrissian", 1, 4, false));
    this.LSTB3.push(new neededChar("K-2SO", 3, 4, false));
    this.LSTB3.push(new neededChar("Jyn Erso", 3, 4, false));
    this.LSTB3.push(new neededChar("Jawa Scavenger", 2, 4, false));
    this.LSTB3.push(new neededChar("Jawa Engineer", 2, 4, false));
    this.LSTB3.push(new neededChar("Jawa", 2, 4, false));
    this.LSTB3.push(new neededChar("Geonosian Spy's Starfighter", 5, 4, true));
    this.LSTB3.push(new neededChar("Gauntlet Starfighter", 5, 4, true));
    this.LSTB3.push(new neededChar("Finn", 2, 4, false));
    this.LSTB3.push(new neededChar("Dathcha", 2, 4, false));
    this.LSTB3.push(new neededChar("CT-5555 \"Fives\"", 2, 4, false));
    this.LSTB3.push(new neededChar("CT-21-0408 \"Echo\"", 2, 4, false));
    this.LSTB3.push(new neededChar("Coruscant Underworld Police", 2, 4, false));
    this.LSTB3.push(new neededChar("Clone Wars Chewbacca", 2, 4, false));
    this.LSTB3.push(new neededChar("Chief Nebit", 2, 4, false));
    this.LSTB3.push(new neededChar("Chief Chirpa", 2, 4, false));
    this.LSTB3.push(new neededChar("CC-2224 \"Cody\"", 2, 4, false));
    this.LSTB3.push(new neededChar("Cassian Andor", 3, 4, false));
    this.LSTB3.push(new neededChar("Bistan", 2, 4, false));
    this.LSTB3.push(new neededChar("Garazeb \"Zeb\" Orrelios", 1, 4, false));
    this.LSTB3.push(new neededChar("Rex's ARC-170", 4, 4, true));
    this.LSTB3.push(new neededChar("Plo Koon's Jedi Starfighter", 4, 4, true));
    this.LSTB3.push(new neededChar("Imperial TIE Fighter", 4, 4, true));
    this.LSTB3.push(new neededChar("Han Solo", 4, 4, false));
    this.LSTB3.push(new neededChar("Grand Master Yoda", 4, 4, false));
    this.LSTB3.push(new neededChar("CT-7567 \"Rex\"", 1, 4, false));
    this.LSTB3.push(new neededChar("Chopper", 1, 4, false));
    this.LSTB3.push(new neededChar("Bodhi Rook", 2, 4, false));
    this.LSTB3.push(new neededChar("Ahsoka Tano's Jedi Starfighter", 4, 4, true));
    this.LSTB3.push(new neededChar("Wedge Antilles's X-wing", 3, 4, true));
    this.LSTB3.push(new neededChar("Slave I", 3, 4, true));
    this.LSTB3.push(new neededChar("Phantom II", 3, 4, true));
    this.LSTB3.push(new neededChar("Jedi Consular's Starfighter", 3, 4, true));
    this.LSTB3.push(new neededChar("Ghost", 3, 4, true));
    this.LSTB3.push(new neededChar("Geonosian Soldier's Starfighter", 3, 4, true));
    this.LSTB3.push(new neededChar("Clone Sergeant's ARC-170", 3, 4, true));
    this.LSTB3.push(new neededChar("Chirrut Îmwe", 2, 4, false));
    this.LSTB3.push(new neededChar("Cassian's U-wing", 3, 4, true));
    this.LSTB3.push(new neededChar("Baze Malbus", 2, 4, false));
    this.LSTB3.push(new neededChar("TIE Advanced x1", 2, 4, true));
    this.LSTB3.push(new neededChar("Scarif Rebel Pathfinder", 1, 4, false));
    this.LSTB3.push(new neededChar("Resistance X-wing", 2, 4, true));
    this.LSTB3.push(new neededChar("Millennium Falcon (Ep VII)", 2, 4, true));
    this.LSTB3.push(new neededChar("Kylo Ren's Command Shuttle", 2, 4, true));
    this.LSTB3.push(new neededChar("Bistan's U-wing", 2, 4, true));
    this.LSTB3.push(new neededChar("Biggs Darklighter's X-wing", 2, 4, true));

    this.ActualPhase = this.DSTB1;

    this.loadTable();
    
  }

  loadTable() {

    for (var i = 0; i < this.ActualPhase.length; i++) {
      if (!this.ActualPhase[i].isShip) {
        var gildencount = this.gildenService.findCharByNameAndStar(this.ActualPhase[i].name, this.ActualPhase[i].sterne);
        if (gildencount != null) {
          this.ActualPhase[i].gildenbesitz = gildencount.length;
          this.ActualPhase[i].differenz = (this.ActualPhase[i].benoetigt - gildencount.length);
        }
      } else {
        var gildencount = this.gildenService.findShipByNameAndStar(this.ActualPhase[i].name, this.ActualPhase[i].sterne);
        if (gildencount != null) {
          this.ActualPhase[i].gildenbesitz = gildencount.length;
          this.ActualPhase[i].differenz = (this.ActualPhase[i].benoetigt - gildencount.length);
        }
        else {
          console.log("Gildencount for " + this.ActualPhase[i].name + " is null");
        }
      }
    }

    this.ActualPhase.sort(this.compareNeeded);
  }

  showMembersWhoHave(char) {

    if (char.isShip) {
      var allChars = this.gildenService.findShipByNameAndStar(char.name, char.sterne);
    } else {
      var allChars = this.gildenService.findCharByNameAndStar(char.name, char.sterne);
    }

    var allCharString = "";

    for (var y = 0; y < allChars.length; y++) {
      allCharString += '\n\r' + allChars[y].Besitzer;
    }

    alert(allCharString);

  }

  compareNeeded(a, b) {
    
    if (a.differenz > b.differenz)
      return -1;
    if (a.differenz < b.differenz)
      return 1;
    return 0;
  }

}

export class neededChar {

  public name: string;
  public benoetigt: number;
  public sterne: number;
  public gildenbesitz = 0;
  public differenz = 0;
  public isShip = false;

  constructor(name: string, benoetigt: number, sterne: number, isShip: boolean) {
    this.name = name;
    this.benoetigt = benoetigt;
    this.sterne = sterne;
    this.isShip = isShip;
  }

}
