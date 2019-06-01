import { Injectable } from '@angular/core';
import { SettingsService, Settings } from '../services/settingsService';
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LZStringService } from 'ng-lz-string';
import { timeout, catchError } from 'rxjs/operators';

@Injectable()
export class gildenService {
  
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
  apiHelpURL = 'https://api.swgoh.help';
  jsonResponseSWGOHHelpGuild: any;
  jsonResponseSWGOHHelpGuildRosters: any;
  jsonResponseSWGOHHelpUnits: any;
  language = 'ENG_US';

  //charStats
  charStatsA: any;
  charStatsB: any;

  constructor(private settingsService: SettingsService, http: HttpClient, private lz: LZStringService) {
    this.http = http;

    if (navigator.language == "de-DE" || navigator.language == "de") {
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

      var decompressed = this.lz.decompress(localStorage.swgohHelpGilde);

      if ((decompressed as string).startsWith("{"))
      {
        this.gildenInfos = JSON.parse(decompressed);

        if (this.gildenInfos != null && this.gildenInfos.roster[0].stats != undefined) {
          this.gildenInfos.roster = this.gildenInfos.roster.sort(function (a, b) {
            return b.stats.find(stat => stat.index == 2).value - a.stats.find(stat => stat.index == 2).value;
          });
        }
        console.log(this.gildenInfos);
      }
        
    }
  }

  saveSWGOHHelpResponse() {
    var guildInfoNow = new GildenInfos();
    guildInfoNow.bannerColor = this.jsonResponseSWGOHHelpGuild.bannerColor;
    guildInfoNow.bannerLogo = this.jsonResponseSWGOHHelpGuild.bannerLogo;
    guildInfoNow.desc = this.jsonResponseSWGOHHelpGuild.desc;
    guildInfoNow.members = this.jsonResponseSWGOHHelpGuild.members;
    guildInfoNow.message = this.jsonResponseSWGOHHelpGuild.message;
    guildInfoNow.name = this.jsonResponseSWGOHHelpGuild.name;
    guildInfoNow.raid = this.jsonResponseSWGOHHelpGuild.raid;
    guildInfoNow.required = this.jsonResponseSWGOHHelpGuild.required;
    guildInfoNow.updated = this.jsonResponseSWGOHHelpGuild.updated;
    guildInfoNow.gp = this.jsonResponseSWGOHHelpGuild.gp;
    guildInfoNow.roster = this.jsonResponseSWGOHHelpGuildRosters;

    var answerAsJSON = JSON.stringify(guildInfoNow);
    console.log('Full Size: ' + answerAsJSON.length);
    var compressed = this.lz.compress(answerAsJSON);
    console.log('Compressed Size: ' + compressed.length);
    localStorage.swgohHelpGilde = compressed;
    this.syncstatus += 'Gildeninfos Saved \n\r';
    this.gildenInfos = guildInfoNow;
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
    //user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&password=1234midi";
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

      if (this.settingsService.settings.loadSync == true) {
        this.loadGildenInfos();
      }
      else {
        this.loadGildenInfosAsync();
      }

    }
    else
    {
      if (navigator.language == "de-DE")
        this.syncstatus += 'Logge ein bei swgoh.help... \n\r';
      else
        this.syncstatus += 'Login at swgoh.help... \n\r';

      this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
        .subscribe(data => {
          var response = data as loginResponse;
          this.token = response.access_token;

          if (navigator.language == "de-DE")
            this.syncstatus += 'Login erfolgreich! \n\r';
          else
            this.syncstatus += 'Login suceeded! \n\r';

          if (this.settingsService.settings.loadSync == true) {
            this.loadGildenInfos();
          }
          else {
            this.loadGildenInfosAsync();
          }

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

  loginToSWGOHHelpForCharStats(charname: string, member: Member, isA: boolean) {

    var user = "username=sdtbarbarossa";
    //user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&password=1234midi";
    user += "&grant_type=password";
    user += "&client_id=123";
    user += "&client_secret=ABC";

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Length', user.length.toString());

    if (this.token != null && this.token != "") {

      this.loadCharStats(charname, member, isA);
    }
    else {

      this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
        .subscribe(data => {
          var response = data as loginResponse;
          this.token = response.access_token;

          if (navigator.language == "de-DE")
            this.syncstatus += 'Login erfolgreich! \n\r';
          else
            this.syncstatus += 'Login suceeded! \n\r';

          this.loadCharStats(charname, member, isA);

        }, Error => {
          alert(Error.message);
        });
    }

  }

  loadCharStats(charname: string, member: Member, isA: boolean) {

  }

  loginEventToSWGOHHelp() {

    var user = "username=sdtbarbarossa";
    //user += "&password=ExsJfR!nzYB*7Mqr";
    user += "&password=1234midi";
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

      this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
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
    this.http.post('https://api.swgoh.help/swgoh/events', payload, { headers: header2 })
      .subscribe(data2 => {
        console.log(data2);
        this.SWGOHEvents = (data2 as SWGOHEventWrapper).events as SWGOHEvent[];
        this.SWGOHEvents.sort(function (a, b) {
          return a.instanceList[0].startTime - b.instanceList[0].startTime; });
      }, Error => {
        alert(Error.message);
      });

  }

  loadGildenInfos() {

    if (navigator.language == "de-DE") {
      this.syncstatus += 'Lade Gildendaten für ' + this.settingsService.settings.allycode + '... \n\r';
    }
    else
    {
      this.syncstatus += 'Load Guilddata for ' + this.settingsService.settings.allycode + '... \n\r';
    }

    var payload = {
      allycode: this.settingsService.settings.allycode,
      language: this.language
    };

    let header2 = new HttpHeaders();
    header2 = header2.append("Authorization", "Bearer " + this.token);
    header2.append('Access-Control-Allow-Headers', 'Authorization');
    this.http.post('https://api.swgoh.help/swgoh/guild/', payload, { headers: header2 })
      .subscribe(data2 => {

        this.jsonResponseSWGOHHelpGuild = data2[0];

        if (navigator.language == "de-DE") {
          this.syncstatus += 'Gilde "' + this.jsonResponseSWGOHHelpGuild.name + '" gefunden. \n\rLade Spielerinfos... \n\r';
          this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
        }
        else {
          this.syncstatus += 'Guild "' + this.jsonResponseSWGOHHelpGuild.name + '" found. \n\rLoad Playerinfos... \n\r';
          this.syncstatus += 'This can take several minutes... \n\r';
        }

        var allycodes = new Array();

        for (var i = 0; i < this.jsonResponseSWGOHHelpGuild.roster.length; i++) {
          allycodes.push(this.jsonResponseSWGOHHelpGuild.roster[i].allyCode);
        }

        var payload2 = {
          allycode: allycodes,
          language: this.language
        };

        this.http.post('https://api.swgoh.help/swgoh/player/', payload2, { headers: header2 })
          .pipe(
            timeout(1000 * 60 * 5)
          )
          .subscribe(data3 => {

            this.jsonResponseSWGOHHelpGuildRosters = data3;
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

  async loadGildenInfosAsync() {

    if (navigator.language == "de-DE") {
      this.syncstatus += 'Lade Gildendaten für ' + this.settingsService.settings.allycode + '... \n\r';
    }
    else {
      this.syncstatus += 'Load Guilddata for ' + this.settingsService.settings.allycode + '... \n\r';
    }

    var payload = {
      allycode: this.settingsService.settings.allycode,
      language: this.language
    };

    let header2 = new HttpHeaders();
    header2 = header2.append("Authorization", "Bearer " + this.token);
    header2.append('Access-Control-Allow-Headers', 'Authorization');
    this.http.post('https://api.swgoh.help/swgoh/guild/', payload, { headers: header2 })
      .subscribe(async data2 => {

        this.jsonResponseSWGOHHelpGuild = data2[0];

        if (navigator.language == "de-DE") {
          this.syncstatus += 'Gilde "' + this.jsonResponseSWGOHHelpGuild.name + '" gefunden. Lade Spielerinfos... \n\r';
          this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
        }
        else {
          this.syncstatus += 'Guild "' + this.jsonResponseSWGOHHelpGuild.name + '" found.Load Playerinfos... \n\r';
          this.syncstatus += 'This can take several minutes... \n\r';
        }

        var allycodes = new Array();

        var guildRosters = new Array();

        for (var i = 0; i < this.jsonResponseSWGOHHelpGuild.roster.length; i++) {

          var payload2 = {
            allycode: this.jsonResponseSWGOHHelpGuild.roster[i].allyCode,
            language: this.language
          };

          if (navigator.language == "de-DE") {
            this.syncstatus += 'Lade Daten für: "' + this.jsonResponseSWGOHHelpGuild.roster[i].name + '" \n\r';
          }
          else {
            this.syncstatus += 'Updating data for: "' + this.jsonResponseSWGOHHelpGuild.roster[i].name + '" \n\r';
          }

          let result = await this.http.post('https://api.swgoh.help/swgoh/player/', payload2, { headers: header2 })
            .pipe(
            timeout(1000 * 60 * 5)
            )
            .toPromise();

          guildRosters.push(result[0]);

          if (navigator.language == "de-DE") {
            this.syncstatus += 'Erfolgreich geupdated: "' + (result as Member[])[0].name + '" \n\r';
          }
          else {
            this.syncstatus += 'Done with updating: "' + (result as Member[])[0].name + '" \n\r';
          }

        }

        this.jsonResponseSWGOHHelpGuildRosters = guildRosters;
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
    this.http.post('https://api.swgoh.help/swgoh/data/', Payload, { headers: header2 })
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
        this.http.post('https://api.swgoh.help/swgoh/data/', Payload2, { headers: header2 })
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
    
    if (!this.checkIfItsANumber(this.settingsService.settings.allycode)) {
      if (navigator.language == "de-DE") {
        alert('Verbündetencode "' + this.settingsService.settings.allycode + '" ist entweder leer oder im falschen Format. Es muss eine 9 stellige Zahl sein ( ohne - )');
        this.syncstatus += 'abgebrochen \n\r';
      }
      else
      {
        alert('AllyCode "' + this.settingsService.settings.allycode + '" is either empty or in the wrong format. It must be a string with 9 numbers ( no - )');
        this.syncstatus += 'aborted \n\r';
      }

      return;
    }

    this.loginToSWGOHHelp();

  }

  getAllCharsByName(name:string) {

    var charsFound = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      
      var foundChars = this.gildenInfos.roster[i].roster.filter(char => (char.nameKey.toLowerCase().indexOf(name.toLowerCase()) > -1) && char.combatType != 2);

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

    charsFound.sort(function (a, b) { return b.charakter.gp - a.charakter.gp });

    return charsFound;

  }

  getAllShipsByName(name: string) {

    var shipsFound = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {

      if (name == "ALL") {
        var foundShips = this.gildenInfos.roster[i].roster.filter(char => char.combatType == 2);
      } else {
        var foundShips = this.gildenInfos.roster[i].roster.filter(char => (char.nameKey.toLowerCase().indexOf(name.toLowerCase()) > -1) && char.combatType == 2);
      }

      if (foundShips == null || foundShips.length == 0) {

      }
      else {
        for (var x = 0; x < foundShips.length; x++) {

          if (foundShips[x] == null || foundShips[x] == undefined) {

          }
          else {
            var charHelperNow = new CharFindHelper();
            charHelperNow.besitzer = this.gildenInfos.roster[i].name;
            charHelperNow.charakter = foundShips[x];
            shipsFound.push(charHelperNow);
          }

        }
      }

    }

    shipsFound.sort(function (a, b) { return b.charakter.gp - a.charakter.gp });

    return shipsFound;

  }

  getAllCharArenaTeams() {
    var allTeams = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var arenaTeamNow = new ArenaTeamHelper();
      arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;

      var teamNow = this.gildenInfos.roster[i].arena.char;
      arenaTeamNow.rang = teamNow.rank;

      for (var x = 0; x < teamNow.squad.length; x++) {

        var charNow = this.gildenInfos.roster[i].roster.find(char => char.defId == teamNow.squad[x].defId);

        if (charNow != null)
          arenaTeamNow.charaktere.push(charNow);
      }

      allTeams.push(arenaTeamNow);

    }
    return allTeams as ArenaTeamHelper[];
  }

  getAllFleetArenaTeams() {
    var allTeams = new Array();

    for (var i = 0; i < this.gildenInfos.roster.length; i++) {
      var arenaTeamNow = new ArenaTeamHelper();
      arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;

      var teamNow = this.gildenInfos.roster[i].arena.ship;
      arenaTeamNow.rang = teamNow.rank;

      for (var x = 0; x < teamNow.squad.length; x++) {

        var charNow = this.gildenInfos.roster[i].roster.find(char => char.defId == teamNow.squad[x].defId);

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
          if (this.gildenInfos.roster[i].roster[x].nameKey == charName) {
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
      tempSumA += a[i].Power;
    }
    var tempSumB = 0;
    for (var i = 0; i < b.length; i++) {
      tempSumB += b[i].Power;
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
      if (member.roster[i].nameKey.toLowerCase().includes(name.toLowerCase())) {
        
        if (idName != null)
          var mappedChar = this.mappChar(member.roster[i], member.name, idName.name, member.roster[i].defId);
        else
          var mappedChar = this.mappChar(member.roster[i], member.name, member.roster[i].nameKey, member.roster[i].defId);
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
      if (member.roster[i].nameKey.toLowerCase().includes(name.toLowerCase())) {
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
      if (member.roster[i].defId.toLowerCase() == name.toLowerCase()) {
        return member.roster[i];
      }
    }
    return null;
  }
  
  mappChar(newchar, besitzer, oldName, defID) {

    var mappedChar = new MappedCharakter();
    mappedChar.Besitzer = besitzer;

    mappedChar.defId = defID;
    mappedChar.gearLevel = newchar.gear;
    mappedChar.Level = newchar.level;
    if (oldName != null) {
      mappedChar.Name = oldName;
    }
    else
      mappedChar.Name = newchar.nameKey;

    mappedChar.Power = newchar.gp;
    mappedChar.Sterne = newchar.rarity;

    if (this.charInfos != null) {

      var charInfoNow = this.charInfos.find(info => info.base_id == newchar.defId);

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
      if (member.roster[i].defId.toLowerCase() == name.toLowerCase()) {
        return this.mappChar(member.roster[i], member.name, idName.name, member.roster[i].defId);
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
      if (member.roster[i].defId.toLowerCase() == name.toLowerCase()) {
        if (idName != null) {
          return this.mappChar(member.roster[i], member.name, idName.name, member.roster[i].defId);
        }
        else {
          return this.mappChar(member.roster[i], member.name, member.roster[i].nameKey, member.roster[i].defId);
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
  guildName: string = "";
  level: number = 0;
  name: string = "";
  roster: Charakter[] = new Array();
  stats: MemberStats[] = new Array();
  updated: Date = new Date();
}

class MemberStats{
  index: number = 0;
  name: string = "";
  value: number = 0;
}

class Arena {
  char: ArenaHelper = new ArenaHelper();
  ship: ArenaHelper = new ArenaHelper();
}

class ArenaHelper {
  rank: number = 0;
  squad: ArenaChar[] = new Array();
}

export class ArenaChar {
  id: string = "";
  defId: string = "";
  type: number = 0;
}

export class Charakter {
  crew: any;
  defId: string = "";
  equipped: Gear[] = new Array();
  gear: number = 0;
  gp: number = 0;
  id: string = "";
  level: number = 0;
  mods: Mod[] = new Array();
  nameKey: string = "";
  rarity: number = 0;
  skills: Skill[] = new Array();
  combatType: number = 0;
  xp: number = 0;
}

export class MappedCharakter {
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
  defId: string;
}

class Gear {
  equipmentId: string = "";
  slot: number = 0;
}

class Mod {
  id: string = "";
  level: number = 0;
  pips: number = 0;
  primaryStat: ModPrimaryStat = new ModPrimaryStat();
  secondaryStat: ModSecondaryStat[] = new Array();
  set: number = 0;
  tier: number = 0;
  slot: number = 0;
}

export class ModPrimaryStat {
  unitStat: number = 0;
  value: number = 0;
}

export class ModSecondaryStat {
  roll: number = 0;
  unitStat: number = 0;
  value: number = 0;
}

export class Skill {
  id: string = "";
  isZeta: boolean = false;
  nameKey: string = "";
  tier: number = 0;
}

export class squad {

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
  startTime: number;
  endTime: number;
  displayStartTime: number;
  displayEndTime: number;
  rewardTime: number;
  
}

export class SWGOHEventWrapper {
  events: SWGOHEvent[];
  id: string;
  updated: number;
}

export class SWGOHEvent {
  id: string;
  priority: number;
  nameKey: string;
  summaryKey: string;
  descKey: string;
  type: number;
  status: number;
  instanceList: Schedule[];
}
