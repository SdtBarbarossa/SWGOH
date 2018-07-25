import { Injectable } from '@angular/core';
import { SettingsService, Settings } from '../services/settingsService';
import { HttpClient, HttpClientJsonpModule, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class gildenService {

  settings: Settings = new Settings();
  gildenInfos: GildenInfos = new GildenInfos();
  gildenInfosTemp: GildenInfos = new GildenInfos();
  charInfos: any;
  jsonResponseSWGOHCharacters: any;
  jsonResponseSWGOHShips: any;
  jsonResponseSWGOH: any;
  htmlResponseSWGOHZetas: any;
  syncstatus: string = '';
  http: HttpClient;

  constructor(private settingsService: SettingsService, http: HttpClient) {
    this.settings = this.settingsService.getSettings();
    this.http = http;
    this.getGildenInfos();
    this.getCharInfos();
    if (this.charInfos != null) {
      console.log(this.charInfos);
      console.log(this.charInfos[0].name);
    }
  }

  getGildenInfos() {
    if (localStorage.midiGildenInfos != null)
      this.gildenInfos = JSON.parse(localStorage.midiGildenInfos);
  }

  saveGildenInfos(gildenInfos: GildenInfos) {
    localStorage.midiGildenInfos = JSON.stringify(gildenInfos);
    this.syncstatus = 'Gildeninfos Saved';
  }

  getCharInfos() {
    if (localStorage.midiCharInfos != null)
      this.charInfos = JSON.parse(localStorage.midiCharInfos);
  }

  saveCharInfos(charInfos: any) {
    localStorage.midiCharInfos = JSON.stringify(charInfos);
    this.charInfos = charInfos;
  }

  syncGildenInfos() {

    this.gildenInfosTemp = new GildenInfos();
    this.syncstatus = 'Frage an bei SWGOH';

    var callsToGo = 3;
    var zetaLink = "";

    if (this.settings.gildenUrl != "") {

      if (this.settings.gildenUrl.endsWith("/")){
        zetaLink = this.settings.gildenUrl + "zetas/";
      }
      else
      {
        zetaLink = this.settings.gildenUrl + "/zetas/";
      }
      callsToGo++;
    }



    console.log('first call = ' + 'https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/');

    this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/', { responseType: 'json' })
      .subscribe(data => {
        this.jsonResponseSWGOHCharacters = data;
        this.saveCharInfos(data);
        this.syncstatus = 'Anfrage 1 von ' + callsToGo + ' bei SWGOH OK';
        console.log('second call = ' + 'https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/');

        this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/', { responseType: 'json' })
          .subscribe(data => {
            this.jsonResponseSWGOHShips = data;
            this.syncstatus = 'Anfrage 2 von ' + callsToGo + ' bei SWGOH OK';

            console.log('third call = ' + 'https://cors-anywhere.herokuapp.com/' + this.settings.apiUrl);

          this.http.get('https://cors-anywhere.herokuapp.com/' + this.settings.apiUrl, { responseType: 'json' })
          .subscribe(data => {
            this.jsonResponseSWGOH = data;
            this.syncstatus = 'Anfrage 3 von ' + callsToGo + ' bei SWGOH OK';

            console.log('fourth call = ' + 'https://cors-anywhere.herokuapp.com/' + zetaLink);

            if (callsToGo == 4) {
              this.http.get('https://cors-anywhere.herokuapp.com/' + zetaLink, { responseType: 'text' })
                .subscribe(data => {
                  this.htmlResponseSWGOHZetas = data;
                  this.syncstatus = 'Anfrage 4 von ' + callsToGo + ' bei SWGOH OK';

                  this.updateGildenInfos();

                });
            }
            else {
              this.updateGildenInfos();
            }

              });

          });
      });

  }

  syncNewGildenInfos() {

    this.gildenInfosTemp = new GildenInfos();
    this.syncstatus = 'Frage an bei SWGOH.HELP';
    
    console.log('login');

    this.loginToNewApi();
    
  }

  loginToNewApi() {

    var user = "username=sdtbarbarossa";
    user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&grant_type=password";
    user += "&client_id=";
    user += "&client_secret=";

    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Length', user.length.toString());

    this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.syncstatus = 'Anfrage 1 von ' + 2 + ' bei SWGOH OK';
      });

  }

  updateGildenInfos() {

    this.syncstatus = 'updateGildenInfos ANFANG';
    console.log('updateGildenInfos ANFANG');
    
    for (var i = 0; i < this.jsonResponseSWGOHCharacters.length; i++) {

      this.syncstatus = 'updateGildenInfos Charakter ' + i + ' of ' + this.jsonResponseSWGOHCharacters.length;
      console.log('updateGildenInfos Charakter ' + i + ' of ' + this.jsonResponseSWGOHCharacters.length);

      var actualCharakters = this.jsonResponseSWGOH[this.jsonResponseSWGOHCharacters[i].base_id];

      if (actualCharakters != null) {
        for (var x = 0; x < actualCharakters.length; x++) {
          var char = new Charakter();
          char.Name = this.jsonResponseSWGOHCharacters[i].name;
          char.Besitzer = actualCharakters[x].player;
          char.Power = actualCharakters[x].power;
          char.MaxPower = this.jsonResponseSWGOHCharacters[i].power; 
          char.Level = actualCharakters[x].level;
          char.Sterne = actualCharakters[x].rarity;
          char.gearLevel = actualCharakters[x].gear_level;
          char.imageUrl = this.jsonResponseSWGOHCharacters[i].image.replace("//swgoh.gg/static/img/assets/tex.",""); 
          char.charUrl = this.jsonResponseSWGOHCharacters[i].url; 
          this.addCharakterToGildenInfos(char);
        }
      }
    }

    for (var i = 0; i < this.jsonResponseSWGOHShips.length; i++) {

      var actualShips = this.jsonResponseSWGOH[this.jsonResponseSWGOHShips[i].base_id];

      if (actualShips != null) {
        for (var x = 0; x < actualShips.length; x++) {
          var ship = new Ship();
          ship.Name = this.jsonResponseSWGOHShips[i].name;
          ship.Besitzer = actualShips[x].player;
          ship.Power = actualShips[x].power;
          ship.MaxPower = this.jsonResponseSWGOHShips[i].power;
          ship.Level = actualShips[x].level;
          ship.Sterne = actualShips[x].rarity;
          ship.imageUrl = this.jsonResponseSWGOHShips[i].image.replace("//swgoh.gg/static/img/assets/tex.", "");
          this.addShipToGildenInfos(ship);
        }
      }
    }

    this.gildenInfosTemp.Lastsync = new Date();
    this.gildenInfos = this.gildenInfosTemp;

    if (this.htmlResponseSWGOHZetas != null) {

      var parser = new DOMParser()
      var doc = parser.parseFromString(this.htmlResponseSWGOHZetas, "text/html");

      var table = doc.getElementsByTagName("tbody")[0];
      var allTR = table.getElementsByTagName('tr');

      for (var i = 0; i < allTR.length; i++) {

        var currentMember = allTR[i].getElementsByTagName('td')[0].attributes.getNamedItem('data-sort-value').value;
        console.log('Membername = ' + currentMember);

        var memberZetas = allTR[i].getElementsByClassName('guild-member-zeta');
        for (var x = 0; x < memberZetas.length; x++) {
          var charNameNow = memberZetas[x].getElementsByClassName('char-portrait')[0].attributes.getNamedItem('title').value;
          console.log(charNameNow);
          var charNowZetas = memberZetas[x].getElementsByClassName('guild-member-zeta-ability').length;
          console.log('Zetas = ' + charNowZetas);

          var foundChar = this.findCharbyNameAndMember(currentMember, charNameNow);
          if (foundChar != null) {
            foundChar.Zetas = charNowZetas;
          }

        }

      }

    }

    console.log('updateGildenInfos ENDE');
    this.syncstatus = 'updateGildenInfos ENDE ';

    switch (this.settings.sortMemberBy) {
    case "OGM":
        this.gildenInfos.Members = this.gildenInfos.Members.sort((a, b) => b.OGM - a.OGM);
    break;

    case "CGM":
      this.gildenInfos.Members = this.gildenInfos.Members.sort((a, b) => b.CGM - a.CGM);
    break;

    case "FGM":
      this.gildenInfos.Members = this.gildenInfos.Members.sort((a, b) => b.FGM - a.FGM);
    break;

    case "Name":
      this.gildenInfos.Members = this.gildenInfos.Members.sort((a, b) => a.Name.localeCompare(b.Name));
    break;

    default:
      this.gildenInfos.Members = this.gildenInfos.Members.sort((a, b) => a.Name.localeCompare(b.Name));
    break;
    }
    
    this.saveGildenInfos(this.gildenInfos);
    console.log(this.gildenInfos);

  }

  getMemberByName(name: string) {
    return this.gildenInfos.Members.find(a => a.Name == name);
  }

  addCharakterToGildenInfos(char) {

    this.gildenInfosTemp.OGM += char.Power;
    this.gildenInfosTemp.CGM += char.Power;

    if (char.Power > 6000) {
      this.gildenInfosTemp.CharsForTW++;
    }

    var MemberNow = this.TempfindMemberbyName(char.Besitzer);
    if (MemberNow != null) {
      MemberNow.Charaktere.push(char);
      MemberNow.OGM += char.Power;
      MemberNow.CGM += char.Power;
    } else {
      var memberTemp = new Member();
      memberTemp.Name = char.Besitzer;
      memberTemp.Charaktere.push(char);
      this.gildenInfosTemp.Members.push(memberTemp);
      console.log('Added Member: ' + memberTemp.Name);
    }

  }

  addShipToGildenInfos(ship) {

    this.gildenInfosTemp.OGM += ship.Power;
    this.gildenInfosTemp.FGM += ship.Power;

    var MemberNow = this.TempfindMemberbyName(ship.Besitzer);
    if (MemberNow != null) {
      MemberNow.Ships.push(ship);
      MemberNow.OGM += ship.Power;
      MemberNow.FGM += ship.Power;
    } else {
      var memberTemp = new Member();
      memberTemp.Name = ship.Besitzer;
      memberTemp.Ships.push(ship);
      this.gildenInfosTemp.Members.push(memberTemp);
      console.log('Added Member: ' + memberTemp.Name);
    }

  }


  //GildenInfos Function
  findMemberbyName(memberName) {

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {
      if (this.gildenInfos.Members[i].Name == memberName) {
        return this.gildenInfos.Members[i];
      }
    }
    return null;
  }

  findCharbyNameAndMember(memberName, charName) {

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {
      if (this.gildenInfos.Members[i].Name == memberName) {
        for (var x = 0; x < this.gildenInfos.Members[i].Charaktere.length; x++) {
          if (this.gildenInfos.Members[i].Charaktere[x].Name == charName) {
            return this.gildenInfos.Members[i].Charaktere[x];
          }
        }
      }
    }
    return null;
  }

  TempfindMemberbyName(memberName) {

    for (var i = 0; i < this.gildenInfosTemp.Members.length; i++) {
      if (this.gildenInfosTemp.Members[i].Name == memberName) {
        return this.gildenInfosTemp.Members[i];
      }
    }
    return null;
  }

  public findSquads(squadToFind: squad) {

    var squads = new Array();

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {

      var tempSquad = new Array();

      for (var x = 0; x < squadToFind.Charaktere.length; x++) {
        var charNow = this.getCharByNameAndMemberExact(squadToFind.Charaktere[x], this.gildenInfos.Members[i]);
        if (charNow != null) {
          tempSquad.push(charNow);
        }
      }

      if (tempSquad.length > 0) {
        squads.push(tempSquad);
      }

    }


    squads.sort(this.compareSquads);

    return squads;

  }

  compareSquads(a, b) {

    var tempPowerA = 0;
    for (var i = 0; i < a.length; i++) {
      tempPowerA += a[i].Power;
    }
    var tempPowerB = 0;
    for (var i = 0; i < b.length; i++) {
      tempPowerB += b[i].Power;
    }

    if (tempPowerA > tempPowerB)
      return -1;
    if (tempPowerA < tempPowerB)
      return 1;
    return 0;
  }

  public findCharByName(charName) {
    
    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {
      var nowChar = this.getCharByNameAndMember(charName, this.gildenInfos.Members[i]);
      if (nowChar != null) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  public findCharByNameAndStar(charName: string, star: number) {

    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {
      var nowChar = this.getCharByNameAndMemberExact(charName, this.gildenInfos.Members[i]);
      if (nowChar != null && nowChar.Sterne >= star) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  public findShipByNameAndStar(charName:string, star:number) {

    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.Members.length; i++) {
      var nowChar = this.getShipByNameAndMemberExact(charName, this.gildenInfos.Members[i]);
      if (nowChar != null && nowChar.Sterne >= star) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  compareChar(a, b) {
    if (a.Power > b.Power)
      return -1;
    if (a.Power < b.Power)
      return 1;
    return 0;
  }


  getCharByNameAndMember(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    for (var i = 0; i < member.Charaktere.length; i++) {
      if (member.Charaktere[i].Name.toLowerCase().includes(name.toLowerCase())) {
        return member.Charaktere[i];
      }
    }

    return null;
  }

  getCharByNameAndMemberExact(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    for (var i = 0; i < member.Charaktere.length; i++) {
      if (member.Charaktere[i].Name.toLowerCase() == name.toLowerCase()) {
        return member.Charaktere[i];
      }
    }

    return null;
  }

  getShipByNameAndMemberExact(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    for (var i = 0; i < member.Ships.length; i++) {
      if (member.Ships[i].Name.toLowerCase() == name.toLowerCase()) {
        return member.Ships[i];
      }
    }

    return null;
  }

}



export class GildenInfos {

  Members: Member[] = new Array();
  OGM: number = 0;
  CGM: number = 0;
  FGM: number = 0;
  CharsForTW: number = 0;
  Lastsync: Date;
  
}

class Member {
  Name: string;
  Charaktere: Charakter[] = new Array();
  Ships: Ship[] = new Array();
  OGM: number = 0;
  CGM: number = 0;
  FGM: number = 0;
}

class Charakter {
  Name: string;
  Besitzer: string;
  Power: number;
  MaxPower: number;
  Level: number;
  gearLevel: number;
  Sterne: number;
  Zetas: number;
  imageUrl: string;
  charUrl: string;
}

class Ship {
  Name: string;
  Besitzer: string;
  Power: number;
  MaxPower: number;
  Level: number;
  Sterne: number;
  imageUrl: string;
}

class squad {

  Name: string = 'SquadName';
  Charaktere: string[] = new Array();

}
