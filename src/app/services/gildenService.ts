import { Injectable } from '@angular/core';
import { SettingsService, Settings } from '../services/settingsService';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LZStringService } from 'ng-lz-string';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class gildenService {

  settings: Settings = new Settings();
  gildenInfos: GildenInfos = new GildenInfos();
  gildenInfosTemp: GildenInfos = new GildenInfos();
  charInfos: any;
  shipInfos: any;
  ModStats: any;
  ModSets: any;
  SWGOHEvents: SWGOHEvent[];
  jsonResponseSWGOHCharacters: any;
  jsonResponseSWGOHShips: any;
  jsonResponseSWGOH: any;
  htmlResponseSWGOHZetas: any;
  syncstatus: string = '';
  isInSync: boolean = false;
  token: string = '';
  http: HttpClient;

  //swgoh-help
  apiHelpURL = 'https://apiv2.swgoh.help';
  jsonResponseSWGOHHelpGuild: any;
  jsonResponseSWGOHHelpUnits: any;
  language = 'ENG_US';

  constructor(private settingsService: SettingsService, http: HttpClient, private lz: LZStringService) {
    this.settings = this.settingsService.getSettings();
    this.http = http;

    if (navigator.language == "de-DE") {
      this.language = 'GER_DE';
    }
    else {
      this.language = 'ENG_US';
    }

    this.getCharInfos();
    this.getShipInfos();
    this.getModStats();
    this.getModSets();
    this.getSWGOHHelpResponse();
    console.log(this.charInfos);
    console.log(this.shipInfos);
    console.log(this.ModStats);
    console.log(this.ModSets);
  }

  getModStats() {
    if (localStorage.midiModStats != null)
      this.ModStats = JSON.parse(localStorage.midiModStats);
  }

  saveModStats(ModStats: any) {
    localStorage.midiModStats = JSON.stringify(ModStats);
    this.ModStats = ModStats;
    console.log('ModStats', this.ModStats);
  }

  getModSets() {
    if (localStorage.midiModSets != null)
      this.ModSets = JSON.parse(localStorage.midiModSets);
  }

  saveModSets(ModSets: any) {
    localStorage.midiModSets = JSON.stringify(ModSets);
    this.ModSets = ModSets;
    console.log('ModSets', this.ModSets);
  }

  getCharInfos() {
    if (localStorage.midiCharInfos != null)
      this.charInfos = JSON.parse(localStorage.midiCharInfos);
  }

  saveCharInfos(charInfos: any) {
    localStorage.midiCharInfos = JSON.stringify(charInfos);
    this.charInfos = charInfos;
  }

  getShipInfos() {
    if (localStorage.midiShipInfos != null)
      this.shipInfos = JSON.parse(localStorage.midiShipInfos);
  }

  saveShipInfos(shipInfos: any) {
    localStorage.midiShipInfos = JSON.stringify(shipInfos);
    this.shipInfos = shipInfos;
  }

  getSWGOHHelpResponse() {
    if (localStorage.swgohHelpGilde != null) {
      this.gildenInfos = JSON.parse(this.lz.decompress(localStorage.swgohHelpGilde));
      this.gildenInfos.roster = this.gildenInfos.roster.sort(function (a, b) {
        return b.gpFull - a.gpFull;
      })
      console.log(this.gildenInfos);
    }
  }

  saveSWGOHHelpResponse() {
    var answerAsJSON = JSON.stringify(this.jsonResponseSWGOHHelpGuild);
    console.log('Full Size: ' + answerAsJSON.length);
    var compressed = this.lz.compress(answerAsJSON);
    console.log('Compressed Size: ' + compressed.length);
    localStorage.swgohHelpGilde = compressed;
    this.syncstatus += 'Gildeninfos Saved \n\r';
    this.gildenInfos = this.jsonResponseSWGOHHelpGuild;
    console.log(this.gildenInfos);
  }

  checkIfItsANumber(number) {

    if (number == null)
      return false;
    
    var numb = number.match(/\d/g);

    if (numb == null)
      return false;

      if (numb.join("") == number)
        return true;
      else
        return false;

  }

  loginToSWGOHHelp() {

    var user = "username=sdtbarbarossa";
    user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&grant_type=password";
    user += "&client_id=123";
    user += "&client_secret=ABC";

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Length', user.length.toString());

    if (this.token != null && this.token != "") {
      if (navigator.language == "de-DE")
        this.syncstatus += 'Bereits eingeloggt... überspringe login \n\r';
      else
        this.syncstatus += 'Already logged in.... skip login \n\r';

      this.loadGildenInfos();
    }
    else
    {
      if (navigator.language == "de-DE")
        this.syncstatus += 'Logge ein bei swgoh.help... \n\r';
      else
        this.syncstatus += 'Login at swgoh.help... \n\r';

      this.http.post('https://apiv2.swgoh.help/auth/signin/', user, { headers: headers })
        .subscribe(data => {
          var response = data as loginResponse;
          this.token = response.access_token;

          if (navigator.language == "de-DE")
            this.syncstatus += 'Login erfolgreich! \n\r';
          else
            this.syncstatus += 'Login suceeded! \n\r';

          this.loadGildenInfos();

        }, Error => {
          if (navigator.language == "de-DE") {
            this.syncstatus += 'Fehler beim Login... breche ab \n\r';
            this.syncstatus += Error.message + '\n\r';
            this.syncstatus += 'Ende der Synchronisation! \n\r';
          }
          else
          {
            this.syncstatus += 'Error on Login... abort Sync \n\r';
            this.syncstatus += Error.message + '\n\r';
            this.syncstatus += 'End of Sync! \n\r';
          }
          
        });
    }
    
  }

  loginEventToSWGOHHelp() {

    var user = "username=sdtbarbarossa";
    user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&grant_type=password";
    user += "&client_id=123";
    user += "&client_secret=ABC";

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Length', user.length.toString());

    if (this.token != null && this.token != "") {

      this.loadEventData();
    }
    else {

      this.http.post('https://apiv2.swgoh.help/auth/signin/', user, { headers: headers })
        .subscribe(data => {
          var response = data as loginResponse;
          this.token = response.access_token;

          if (navigator.language == "de-DE")
            this.syncstatus += 'Login erfolgreich! \n\r';
          else
            this.syncstatus += 'Login suceeded! \n\r';

          this.loadEventData();

        }, Error => {
          alert(Error.message);
        });
    }

  }

  loadEventData() {

    var payload = {
      language: this.language
    };

    let header2 = new HttpHeaders();
    header2 = header2.append("Authorization", "Bearer " + this.token);
    header2.append('Access-Control-Allow-Headers', 'Authorization');
    this.http.post('https://apiv2.swgoh.help/swgoh/events', payload, { headers: header2 })
      .subscribe(data2 => {
        console.log(data2);
        this.SWGOHEvents = data2 as SWGOHEvent[];
        this.SWGOHEvents.sort(function (a, b) { return a.schedule[0].start - b.schedule[0].start; });
      }, Error => {
        alert(Error.message);
      });

  }

  loadGildenInfos() {

    if (navigator.language == "de-DE") {
      this.syncstatus += 'Lade Gildendaten für ' + this.settings.allycode + '... \n\r';
      this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
    }
    else
    {
      this.syncstatus += 'Load Guilddata for ' + this.settings.allycode + '... \n\r';
      this.syncstatus += 'This can take several minutes... \n\r';
    }

    var payload = {
      allycode: this.settings.allycode,
      language: this.language
    };

    let header2 = new HttpHeaders();
    header2 = header2.append("Authorization", "Bearer " + this.token);
    header2.append('Access-Control-Allow-Headers', 'Authorization');
    this.http.post('https://apiv2.swgoh.help/swgoh/guild/', payload, { headers: header2 })
      .subscribe(data2 => {
        this.jsonResponseSWGOHHelpGuild = data2;
        this.saveSWGOHHelpResponse();
        this.loadSWGOHHelpExtras();

      }, Error => {
        if (navigator.language == "de-DE") {
          this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
          this.syncstatus += Error.message + '\n\r';
          this.syncstatus += 'Ende der Synchronisation! \n\r';
        }
        else {
          this.syncstatus += 'Error on getting Guilddata...aborting... \n\r';
          this.syncstatus += Error.message + '\n\r';
          this.syncstatus += 'End of Sync! \n\r';
        }
      });
    
  }

  loadSWGOHHelpExtras()
  {
    this.syncstatus += 'Hole Mod-Set-Infos... \n\r';

    var Payload = {
      "collection": "statModSetList",
      "language": this.language,
    };

    let header2 = new HttpHeaders();
    header2 = header2.append("Authorization", "Bearer " + this.token);
    header2.append('Access-Control-Allow-Headers', 'Authorization');
    this.http.post('https://apiv2.swgoh.help/swgoh/data/', Payload, { headers: header2 })
      .subscribe(data2 => {
        this.ModSets = data2;
        this.saveModSets(this.ModSets);
        this.syncstatus += 'Hole Mod-Stat-Infos... \n\r';

        var Payload2 = {
          "collection": "statModList",
          "language": this.language,
        };

        let header2 = new HttpHeaders();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://apiv2.swgoh.help/swgoh/data/', Payload2, { headers: header2 })
          .subscribe(data2 => {
            this.ModStats = data2;
            this.saveModStats(this.ModStats);
            this.syncstatus += 'Mod-Stat-Infos erfolgreich... \n\r';
            this.loadSWGOHggChars();
          }, Error => {
            this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
            this.syncstatus += Error.message + '\n\r';
            this.syncstatus += 'Ende der Synchronisation! \n\r';
          });

      }, Error => {
        this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
        this.syncstatus += Error.message + '\n\r';
        this.syncstatus += 'Ende der Synchronisation! \n\r';
      });
  }

  loadSWGOHggChars() {

    this.syncstatus += 'Hole Charinfo von swgoh.gg... \n\r';

    this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/', { responseType: 'json' })
      .subscribe(data => {
        this.jsonResponseSWGOHCharacters = data;
        this.saveCharInfos(data);
        this.syncstatus += 'Charinfos erfolgreich abgerufen... \n\r';
        this.loadSWGOHggShips();
        
      }, Error => {
        if (this.charInfos != null) {
          this.syncstatus += 'Fehler beim abrufen der Daten... kann aber alte Daten verwenden \n\r';
          this.loadSWGOHggShips();
          this.isInSync = false;
        }
        else {
          this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
          this.syncstatus += Error.message + '\n\r';
          this.syncstatus += 'Ende der Synchronisation! \n\r';
        }
      });
  }

  loadSWGOHggShips() {

    this.syncstatus += 'Hole Shipinfo von swgoh.gg... \n\r';

    this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/', { responseType: 'json' })
          .subscribe(data => {
            this.jsonResponseSWGOHCharacters = data;
            this.saveShipInfos(data);
            this.syncstatus += 'Ende der Synchronisation! \n\r';
            this.isInSync = false;

      }, Error => {
        if (this.shipInfos != null) {
          this.syncstatus += 'Fehler beim abrufen der Daten... kann aber alte Daten verwenden \n\r';
          this.syncstatus += 'Ende der Synchronisation! \n\r';
          this.isInSync = false;
        }
        else {
          this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
          this.syncstatus += Error.message + '\n\r';
          this.syncstatus += 'Ende der Synchronisation! \n\r';
        }
          });
  }

  syncGildenInfos() {

    if (navigator.language == "de-DE")
      this.syncstatus = 'Frage an bei swgoh.help \n\r';
    else
      this.syncstatus = 'Request from swgoh.help \n\r';

    this.isInSync = true;
    
    if (!this.checkIfItsANumber(this.settings.allycode)) {
      if (navigator.language == "de-DE") {
        alert('Verbündetencode "' + this.settings.allycode + '" ist entweder leer oder im falschen Format. Es muss eine 9 stellige Zahl sein ( ohne - )');
        this.syncstatus += 'abgebrochen \n\r';
      }
      else
      {
        alert('AllyCode "' + this.settings.allycode + '" is either empty or in the wrong format. It must be a string with 9 numbers ( no - )');
        this.syncstatus += 'aborted \n\r';
      }

      return;
    }

    this.loginToSWGOHHelp();

  }

  getAllCharsByName(name:string) {

    var charsFound = new Array();

    //MapCharName To IDName
    var idName = this.charInfos.filter(info => info.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
    
    if (idName == null || idName.length == 0)
      return null;

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      for (var z = 0; z < idName.length; z++) {

      var foundChars = this.gildenInfos.roster[i].roster.filter(char => (idName[z].base_id.toLowerCase() == char.name.toLowerCase()) );

      if (foundChars == null || foundChars.length == 0)
      {

      }
      else
      {
        for (var x = 0; x < foundChars.length; x++)
        {

          if (foundChars[x] == null || foundChars[x] == undefined) {

          }
          else {
            var charHelperNow = new CharFindHelper();
            charHelperNow.besitzer = this.gildenInfos.roster[i].name;
            charHelperNow.charakter = foundChars[x];
            charsFound.push(charHelperNow);
          }

        }
      }
        
      }

    }

    return charsFound;

  }

  getAllCharArenaTeams() {
    var allTeams = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var arenaTeamNow = new ArenaTeamHelper();
      arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;

      var teamNow = this.gildenInfos.roster[i].arena.char;
      arenaTeamNow.rang = teamNow.rank;

      for (var x = 0; x < teamNow.squad.length; x++) {

        var charNow = this.gildenInfos.roster[i].roster.find(char => char.name == teamNow.squad[x].name);

        if (charNow != null)
          arenaTeamNow.charaktere.push(charNow);
      }

      allTeams.push(arenaTeamNow);

    }
    return allTeams as ArenaTeamHelper[];
  }

  getMemberByName(name: string) {
    return this.gildenInfos.roster.find(a => a.name == name);
  }

  //GildenInfos Function
  findMemberbyName(memberName) {

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      if (this.gildenInfos.roster[i].name == memberName) {
        return this.gildenInfos.roster[i];
      }
    }
    return null;
  }

  findCharbyNameAndMember(memberName, charName) {

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      if (this.gildenInfos.roster[i].name == memberName) {
        for (var x = 0; x < this.gildenInfos.roster[i].roster.length; x++) {
          if (this.gildenInfos.roster[i].roster[x].name == charName) {
            return this.gildenInfos.roster[i].roster[x];
          }
        }
      }
    }
    return null;
  }

  public findSquadWithMember(squadToFind: squad, member: Member) {

    var memberNow = this.gildenInfos.roster.find(m => m.name == member.name);
    
      var tempSquad = new Array();

      for (var x = 0; x < squadToFind.Charaktere.length; x++) {
        var charNow = this.getMappedCharByNameAndMemberExact(squadToFind.Charaktere[x], memberNow);
        if (charNow != null) {
          tempSquad.push(charNow);
        }
    }

    return tempSquad;
    
  }

  public findSquads(squadToFind: squad) {

    var squads = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {

      var tempSquad = new Array();

      for (var x = 0; x < squadToFind.Charaktere.length; x++) {
        var charNow = this.getMappedCharByNameAndMemberExact(squadToFind.Charaktere[x], this.gildenInfos.roster[i]);
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
    
    var tempSumA = 0;
    for (var i = 0; i < a.length; i++) {
      tempSumA += a[i].gearLevel;
      tempSumA += a[i].Zetas*4;
      tempSumA += a[i].Sterne;
    }
    var tempSumB = 0;
    for (var i = 0; i < b.length; i++) {
      tempSumB += b[i].gearLevel;
      tempSumB += b[i].Zetas*4;
      tempSumB += b[i].Sterne;
    }
    
    if (tempSumA > tempSumB)
      return -1;
    if (tempSumA < tempSumB)
      return 1;
    return 0;
  }

  public findCharByName(charName) {

    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var nowChar = this.getCharByNameAndMember(charName, this.gildenInfos.roster[i]);
      if (nowChar != null) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  public findMappedCharByName(charName) {

    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var nowChar = this.getMappedCharByNameAndMember(charName, this.gildenInfos.roster[i]);
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

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var nowChar = this.getMappedCharByNameAndMemberExact(charName, this.gildenInfos.roster[i]);
      if (nowChar != null && nowChar.Sterne >= star) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  public findShipByNameAndStar(charName: string, star: number) {

    if (charName == '') {
      return null;
    }

    var allChars = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var nowChar = this.getMappedShipByNameAndMemberExact(charName, this.gildenInfos.roster[i]);
      if (nowChar != null && nowChar.Sterne >= star) {
        allChars.push(nowChar);
      }
    }

    allChars.sort(this.compareChar);

    return allChars;
  }

  compareChar(a: MappedCharakter, b) {
    if (a.gearLevel > b.gearLevel)
      return -1;
    if (a.gearLevel < b.gearLevel)
      return 1;
    if (a.gearLevel == b.gearLevel) {
      if (a.Zetas > b.Zetas)
        return -1;
      if (a.Zetas < b.Zetas)
        return 1;
    }
    return 0;
  }

  getMappedCharByNameAndMember(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    //MapCharName To IDName
    var idName = this.charInfos.find(info => info.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);

    if (idName != null)
      name = idName.base_id;


    for (var i = 0; i < member.roster.length; i++) {
      if (member.roster[i].name.toLowerCase().includes(name.toLowerCase())) {
        
        if (idName != null)
          var mappedChar = this.mappChar(member.roster[i], member.name, idName.name);
        else
          var mappedChar = this.mappChar(member.roster[i], member.name, member.roster[i].name);
        return mappedChar;
      }
    }

    return null;
  }

  getCharByNameAndMember(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    for (var i = 0; i < member.roster.length; i++) {
      if (member.roster[i].name.toLowerCase().includes(name.toLowerCase())) {
        return member.roster[i];
      }
    }

    return null;
  }

  getCharByNameAndMemberExact(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    //MapCharName To IDName
    var idName = this.charInfos.find(info => info.name == name);

    if (idName != null)
      name = idName.base_id;

    for (var i = 0; i < member.roster.length; i++) {
      if (member.roster[i].name.toLowerCase() == name.toLowerCase()) {
        return member.roster[i];
      }
    }
    return null;
  }
  
  mappChar(newchar, besitzer, oldName) {

    var mappedChar = new MappedCharakter();
    mappedChar.Besitzer = besitzer;

    mappedChar.gearLevel = newchar.gear;
    mappedChar.Level = newchar.level;
    if (oldName != null) {
      mappedChar.Name = oldName;
    }
    else
      mappedChar.Name = newchar.name;

    mappedChar.Power = newchar.xp;
    mappedChar.Sterne = newchar.rarity;

    if (this.charInfos != null) {

      var charInfoNow = this.charInfos.find(info => info.base_id == newchar.name);

      if (charInfoNow != null) {
        mappedChar.MaxPower = charInfoNow.power;
        mappedChar.charUrl = charInfoNow.url;
        if (charInfoNow.image.indexOf('/tex.') > 0) {
          mappedChar.imageUrl = charInfoNow.image.substr(charInfoNow.image.indexOf('/tex.') + 5, (charInfoNow.image.length - charInfoNow.image.indexOf('/tex.')) - 5);
        }
      }

    }

    mappedChar.Zetas = 0;
    for (var index = 0; newchar.skills.length > index; index++) {
      if (newchar.skills[index].isZeta == true && newchar.skills[index].tier == 8) {
        mappedChar.Zetas += 1;
      }
    }

    return mappedChar;

  }

  getMappedCharByNameAndMemberExact(name, member) {

    if (name == undefined || name == '') {
      return null;
    }

    //MapCharName To IDName
    var idName = this.charInfos.find(info => info.name.toLowerCase() == name.toLowerCase());

    if (idName != null)
      name = idName.base_id;

    for (var i = 0; i < member.roster.length; i++) {
      if (member.roster[i].name.toLowerCase() == name.toLowerCase()) {
        return this.mappChar(member.roster[i], member.name, idName.name);
      }
    }
    return null;
  }

  getMappedShipByNameAndMemberExact(name, member) {

    if (name == undefined || name == '') {
      return null;
    }
    
    //MapCharName To IDName
    var idName = this.shipInfos.find(info => info.name.toLowerCase() == name.toLowerCase());
    
    if (idName != null) {
      name = idName.base_id;
    } else {
      console.log('didnt found ' + name);
    }
    
    for (var i = 0; i < member.roster.length; i++) {
      if (member.roster[i].name.toLowerCase() == name.toLowerCase()) {
        if (idName != null) {
          return this.mappChar(member.roster[i], member.name, idName.name);
        }
        else {
          return this.mappChar(member.roster[i], member.name, member.roster[i].name);
        }
      }
    }
    return null;
  }

}



export class GildenInfos {

  bannerColor: string = "";
  bannerLogo: string = "";
  desc: string = "";
  gp: number = 0;
  members: number = 0;
  message: string = "";
  name: string = "";
  raid: Raid = new Raid();
  required: number = 0;
  roster: Member[] = new Array();
  updated: Date = new Date();
}

class Raid {
  aat: string = "";
  rancor: string = "";
  sith_raid: string = "";
}

class Member {
  allyCode: number = 0;
  arena: Arena = new Arena();
  gpChar: number = 0;
  gpFull: number = 0;
  gpShip: number = 0;
  guildName: string = "";
  level: number = 0;
  name: string = "";
  roster: Charakter[] = new Array();
  updated: Date = new Date();
}

class Arena {
  char: ArenaHelper = new ArenaHelper();
  ship: ArenaHelper = new ArenaHelper();
}

class ArenaHelper {
  rank: number = 0;
  squad: ArenaChar[] = new Array();
}

class ArenaChar {
  id: string = "";
  name: string = "";
  type: number = 0;
}

export class Charakter {
  crew: any;
  defId: string = "";
  equipped: Gear[] = new Array();
  gear: number = 0;
  id: string = "";
  level: number = 0;
  mods: Mod[] = new Array();
  name: string = "";
  rarity: number = 0;
  skills: Skill[] = new Array();
  type: string = "";
  xp: number = 0;
}

class MappedCharakter {
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

class Gear {
  equipmentId: string = "";
  slot: number = 0;
}

class Mod {
  id: string = "";
  level: number = 0;
  pips: number = 0;
  primaryBonusType: number = 0;
  primaryBonusValue: number = 0;
  secondaryType_1: number = 0;
  secondaryType_2: number = 0;
  secondaryType_3: number = 0;
  secondaryType_4: number = 0;
  secondaryValue_1: number = 0;
  secondaryValue_2: number = 0;
  secondaryValue_3: number = 0;
  secondaryValue_4: number = 0;
  set: number = 0;
  setId: number = 0;
  slot: number = 0;
}

class Skill {
  id: string = "";
  isZeta: boolean = false;
  name: string = "";
  tier: number = 0;
}

class squad {

  Name: string = 'SquadName';
  Charaktere: string[] = new Array();

}

class loginResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export class ArenaTeamHelper {
  besitzer: string = "";
  rang: number = 100000;
  charaktere: Charakter[] = new Array();
}

export class CharFindHelper {
  besitzer: string = "";
  charakter: Charakter = new Charakter();
}

export class Schedule {
  start: number;
  end: number;
  show: number;
  hide: number;
}

export class SWGOHEvent {
  id: string;
  priority: number;
  name: string;
  summary: string;
  desc: string;
  type: number;
  status: number;
  schedule: Schedule[];
}
