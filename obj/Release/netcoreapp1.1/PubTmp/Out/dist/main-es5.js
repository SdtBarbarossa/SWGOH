(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/MemberTracking/membertracking.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/MemberTracking/membertracking.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!gildenService.gildenInfos.roster\">Lädt Memberinfos...</div>\r\n\r\n<dx-data-grid *ngIf=\"gildenService.gildenInfos.roster\"\r\n              [dataSource]=\"gildenService.gildenInfos.roster\"\r\n              [allowColumnReordering]=\"true\"\r\n              [showBorders]=\"true\"\r\n              [allowColumnResizing]=\"true\"\r\n              [columnMinWidth]=\"50\"\r\n              [columnAutoWidth]=\"true\">\r\n\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxo-scrolling mode=\"infinite\"></dxo-scrolling>\r\n  <dxo-state-storing [enabled]=\"true\" type=\"localStorage\" storageKey=\"membergridstorage\"></dxo-state-storing>\r\n\r\n  <dxo-column-chooser [enabled]=\"true\"\r\n                      mode=\"dragAndDrop\">\r\n  </dxo-column-chooser>\r\n\r\n  <dxi-column dataField=\"name\" caption=\"Member\" [dataType]=\"string\" [fixed]=\"true\"></dxi-column>\r\n  <dxi-column dataField=\"arena.char.rank\" caption=\"Chararena\" [dataType]=\"number\" cellTemplate=\"squadCharRankTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"arena.ship.rank\" caption=\"Fleetarena\" [dataType]=\"number\" cellTemplate=\"squadShipRankTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"stats[0].value\" caption=\"GP\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[1].value\" caption=\"Char-GP\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[2].value\" caption=\"Ship-GP\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"level\" caption=\"Level\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"arena.char.squad\" caption=\"CharSquad\" [visible]=\"false\" cellTemplate=\"squadTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"arena.ship.squad\" caption=\"ShipSquad\" [visible]=\"false\" cellTemplate=\"squadTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"allyCode\" caption=\"Allycode\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[6].value\" caption=\"PVE-Hardnodes won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[3].value\" caption=\"PVP-Ships won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[9].value\" caption=\"Gildentoken\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[4].value\" caption=\"PVP-Arena won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[5].value\" caption=\"PvE-Battles won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[7].value\" caption=\"Galactic Battles Won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[10].value\" caption=\"Gildenspenden total\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n  <dxi-column dataField=\"stats[8].value\" caption=\"Raids won\" [visible]=\"false\" [dataType]=\"number\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let data of 'squadTemplate'\">\r\n    <span *ngFor=\"let char of data.value\">{{char.nameKey}}, </span>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let data of 'squadCharRankTemplate'\">\r\n    <div [tooltip]=\"data.row.data.arena.char.squad | squadtostring\" trigger=\"click\" hide-delay=\"5000\" hide-delay-mobile=\"5000\" width=\"100%\">{{data.value}}</div>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let data of 'squadShipRankTemplate'\">\r\n\r\n    <div [tooltip]=\"data.row.data.arena.ship.squad | squadtostring\" trigger=\"click\" hide-delay=\"5000\" hide-delay-mobile=\"5000\" width=\"100%\">{{data.value}}</div>\r\n\r\n  </div>\r\n\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/RaidPlanner/raidplanner.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/RaidPlanner/raidplanner.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!raidDataSource\">Lädt Raidplan...</div>\r\n\r\n<div *ngIf=\"raidDataSource\" style=\"width:100%;\">\r\n  <button (click)=\"openModal()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 100%;\">{{'Configuration'| language}}</button>\r\n</div>\r\n\r\n<dx-data-grid *ngIf=\"raidDataSource\"\r\n              [dataSource]=\"raidDataSource\"\r\n              [allowColumnReordering]=\"true\"\r\n              [showBorders]=\"true\"\r\n              (onCellPrepared)=\"colorizeCell($event)\">\r\n\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxo-scrolling mode=\"infinite\"></dxo-scrolling>\r\n  <dxo-state-storing [enabled]=\"true\" type=\"localStorage\" storageKey=\"gridstorage\"></dxo-state-storing>\r\n\r\n  <dxo-column-chooser [enabled]=\"true\"\r\n                      mode=\"dragAndDrop\">\r\n  </dxo-column-chooser>\r\n\r\n  <dxi-column *ngFor=\"let columnNow of columns; let i = index\" dataField=\"{{i}}\" [caption]=\"columnNow\" [width]=\"i | columnwidth\" [dataType]=\"i | columntype\" [fixed]=\"i | columnfixed\"></dxi-column>\r\n\r\n</dx-data-grid>\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n      <h2>{{'Configuration'| language}}</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <div style=\"width:100%;\">\r\n\r\n        <div style=\"width:68%; display: inline-block;\">\r\n          <select style=\"width:100%;\" [(ngModel)]=\"selectedSquad\">\r\n            <option *ngFor=\"let squad of squads\" [ngValue]=\"squad\">{{squad.Name}}</option>\r\n          </select>\r\n        </div>\r\n        <div style=\"width: 30%; display: inline-block;\">\r\n          <button (click)=\"deleteThisSquad()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">{{'Del'| language}}</button>\r\n          <button (click)=\"addNewSquad()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">{{'Add'| language}}</button>\r\n        </div>\r\n\r\n        <div>Squadname: <input style=\"width:100px\" [(ngModel)]=\"selectedSquad.Name\"/> </div>\r\n        <div *ngFor=\"let char of selectedSquad.Charaktere; let i = index\">\r\n          Charakter :\r\n          <select style=\"width:150px\" [(ngModel)]=\"selectedSquad.Charaktere[i]\">\r\n            <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n          </select>\r\n\r\n          Zetasneeded: <input type=\"number\" style=\"width:30px\" [(ngModel)]=\"selectedSquad.Zetas[i]\" />\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/TBPlatoons/platoontool.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/TBPlatoons/platoontool.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n\r\n  <select style=\"width:100%;\" [(ngModel)]=\"ActualPhase\" (ngModelChange)=\"loadTable()\">\r\n    <option [ngValue]=\"DSTB1\">DS-TB-Phase 1</option>\r\n    <option [ngValue]=\"DSTB2\">DS-TB-Phase 2</option>\r\n    <option [ngValue]=\"DSTB3\">DS-TB-Phase 3</option>\r\n    <option [ngValue]=\"DSTB4\">DS-TB-Phase 4</option>\r\n    <option [ngValue]=\"DSTB5\">DS-TB-Phase 5</option>\r\n    <option [ngValue]=\"DSTB6\">DS-TB-Phase 6</option>\r\n    <option [ngValue]=\"LSTB1\">LS-TB-Phase 1</option>\r\n    <option [ngValue]=\"LSTB2\">LS-TB-Phase 2</option>\r\n    <option [ngValue]=\"LSTB3\">LS-TB-Phase 3</option>\r\n    <option [ngValue]=\"LSTB4\">LS-TB-Phase 4</option>\r\n    <option [ngValue]=\"LSTB5\">LS-TB-Phase 5</option>\r\n    <option [ngValue]=\"LSTB6\">LS-TB-Phase 6</option>\r\n    <option [ngValue]=\"AllChars1\">All Chars - 1 Star</option>\r\n    <option [ngValue]=\"AllChars2\">All Chars - 2 Star</option>\r\n    <option [ngValue]=\"AllChars3\">All Chars - 3 Star</option>\r\n    <option [ngValue]=\"AllChars4\">All Chars - 4 Star</option>\r\n    <option [ngValue]=\"AllChars5\">All Chars - 5 Star</option>\r\n    <option [ngValue]=\"AllChars6\">All Chars - 6 Star</option>\r\n    <option [ngValue]=\"AllChars7\">All Chars - 7 Star</option>\r\n    <option [ngValue]=\"AllShips1\">All Ships - 1 Star</option>\r\n    <option [ngValue]=\"AllShips2\">All Ships - 2 Star</option>\r\n    <option [ngValue]=\"AllShips3\">All Ships - 3 Star</option>\r\n    <option [ngValue]=\"AllShips4\">All Ships - 4 Star</option>\r\n    <option [ngValue]=\"AllShips5\">All Ships - 5 Star</option>\r\n    <option [ngValue]=\"AllShips6\">All Ships - 6 Star</option>\r\n    <option [ngValue]=\"AllShips7\">All Ships - 7 Star</option>\r\n  </select>\r\n\r\n  <table id=\"platoons\" style=\"width:100%\">\r\n    <tr>\r\n      <th>{{'Charname'| language}}</th>\r\n      <th>{{'Needed'| language}}</th>\r\n      <th>{{'Available'| language}}</th>\r\n      <th>{{'Difference'| language}}</th>\r\n      <th>{{'Stars Needed'| language}}</th>\r\n    </tr>\r\n    <tr *ngFor=\"let neededChar of ActualPhase\">\r\n      <td ><a (click)=\"showMembersWhoHave(neededChar)\" href=\"javascript:void();\">{{neededChar.name}}</a></td>\r\n      <td>{{neededChar.benoetigt}}</td>\r\n\r\n      <td *ngIf=\"neededChar.benoetigt > neededChar.gildenbesitz\" style=\"background:red\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt == neededChar.gildenbesitz)\" style=\"background:orange\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt < neededChar.gildenbesitz) && !(neededChar.benoetigt*2 <= neededChar.gildenbesitz && neededChar.differenz < -2)\" style=\"background:yellow\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"neededChar.benoetigt*2 <= neededChar.gildenbesitz && neededChar.differenz < -2\" style=\"background:green\">{{neededChar.gildenbesitz}}</td>\r\n\r\n      <td>{{neededChar.differenz}}</td>\r\n      <td>{{neededChar.sterne}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Home' | language}}</a>\r\n  <a routerLink=\"/newCharSearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Charsearch' | language}}</a>\r\n  <a routerLink=\"/shipsearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Shipsearch' | language}}</a>\r\n  <a routerLink=\"/squadsearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Squadsearch' | language}}</a>\r\n  <a routerLink=\"/platoontool\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'TB-Platoon' | language}}</a>\r\n  <a routerLink=\"/raidplanner\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Raid-Planner' | language}}</a>\r\n  <a routerLink=\"/arenateams\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'ArenaTeams' | language}}</a>\r\n  <a routerLink=\"/fleetarena\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Fleetarena' | language}}</a>\r\n  <a routerLink=\"/membertracking\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Membertracking' | language}}</a>\r\n  <a routerLink=\"/guildcharts\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Guildcharts' | language}}</a>\r\n  <a routerLink=\"/events\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Events' | language}}</a>\r\n  <a routerLink=\"/zetas\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Zetas' | language}}</a>\r\n  <a routerLink=\"/comparer\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Comparer' | language}}</a>\r\n  <a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Settings' | language}}</a>\r\n  <a routerLink=\"/skinternal\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'SKInternal' | language}}</a>\r\n</div>\r\n\r\n<!-- Use any element to open the sidenav -->\r\n<div>\r\n  <ul>\r\n    <li>\r\n      <a href=\"javascript:void(0)\" (click)=\"openNav()\">&#9776;</a>\r\n    </li>\r\n    <li style=\"float:right\"><a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Settings' | language}}</a></li>\r\n  </ul>\r\n  <div style=\"height:40px;\">\r\n\r\n  </div>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/arenaTeams/arenaTeams.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arenaTeams/arenaTeams.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let team of AllCharTeams;let i = index\" class=\"charNow\">\r\n  <fieldset>\r\n    <legend>{{team.besitzer}} {{'WithRank' | language}} {{team.rang}}</legend>\r\n    <fieldset *ngFor=\"let char of team.charaktere\" class=\"maincharFieldset\">\r\n      <legend>{{char.nameKey}}</legend>\r\n      <div>\r\n        <div style=\"height:60px;width:70px;display:inline-block\">\r\n          <img *ngIf=\"char.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n          <img *ngIf=\"char.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n          <img *ngIf=\"char.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n          <img *ngIf=\"char.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n          <img *ngIf=\"char.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n          <img *ngIf=\"char.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n          <img *ngIf=\"char.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n          <img *ngIf=\"char.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n          <img *ngIf=\"char.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n          <img *ngIf=\"char.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n          <img *ngIf=\"char.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n          <img *ngIf=\"char.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n          <img *ngIf=\"char.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n          <img *ngIf=\"char.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n          <img class=\"charImage\" [src]=\"char | charimagelink\" [alt]=\"char.nameKey\">\r\n          <img class=\"gearImage\" [src]=\"char | gearlink\" [alt]=\"char.nameKey\">\r\n          <span class=\"char-level\">{{char.level}}</span>\r\n          <span class=\"char-gear-level\">{{char | chargear}}</span>\r\n        </div>\r\n\r\n        <div style=\"display:inline-block\">\r\n          <div *ngFor=\"let skill of char.skills\">\r\n            <span *ngIf=\"skill.isZeta == true && skill.tier == 8\">Zeta: {{skill.nameKey}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button (click)=\"showMods[i] = !showMods[i]\">{{'Show/Hide'| language}}</button>\r\n\r\n      <div *ngIf=\"showMods[i]\">\r\n        <fieldset *ngFor=\"let mod of char.mods\" style=\"position:relative; float:left;\">\r\n          <legend>{{(mod.set | modsetname) | language}}-{{(mod.slot | modslotname) | language}} L:{{mod.level}} S:{{mod.pips}}</legend>\r\n          <div style=\"color:blue\">{{(mod.primaryStat.unitStat | modstatname) | language}}: {{mod.primaryStat.value | modstatvalue : (mod.primaryStat.unitStat | modstatname)}}</div>\r\n          <div *ngFor=\"let stat of mod.secondaryStat\">{{(stat.unitStat | modstatname) | language}}: {{stat.value | modstatvalue : (stat.unitStat | modstatname)}}</div>\r\n        </fieldset>\r\n      </div>\r\n\r\n    </fieldset>\r\n  </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comparer/comparer.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comparer/comparer.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Pick a Charakter and two Member to Compare the Char\r\n<dx-select-box [dataSource]=\"GildenService.charInfos\"\r\n               [value]=\"GildenService.charInfos[0]\"\r\n               [searchEnabled]=\"true\"\r\n               (onValueChanged)=\"onValueChanged(charSelectBox, MemberSelectBoxA, MemberSelectBoxB)\"\r\n               displayExpr=\"name\" #charSelectBox>\r\n</dx-select-box>\r\n\r\n<div style=\"width:100%\">\r\n  <dx-select-box [dataSource]=\"GildenService.gildenInfos.roster\"\r\n                 [value]=\"GildenService.gildenInfos.roster[0]\"\r\n                 [searchEnabled]=\"true\"\r\n                 displayExpr=\"name\"\r\n                 (onValueChanged)=\"onValueChanged(charSelectBox, MemberSelectBoxA, MemberSelectBoxB)\"\r\n                 style=\"width:50%; float:left\" #MemberSelectBoxA>\r\n  </dx-select-box>\r\n\r\n  <dx-select-box [dataSource]=\"GildenService.gildenInfos.roster\"\r\n                 [value]=\"GildenService.gildenInfos.roster[0]\"\r\n                 [searchEnabled]=\"true\"\r\n                 displayExpr=\"name\"\r\n                 (onValueChanged)=\"onValueChanged(charSelectBox, MemberSelectBoxA, MemberSelectBoxB)\"\r\n                 style=\"width:50%; float:left\" #MemberSelectBoxB>\r\n  </dx-select-box>\r\n</div>\r\n\r\n<div *ngIf=\"charCompletedA && charCompletedB\" style=\"width:100%\">\r\n\r\n  <table style=\"width:100%\">\r\n    <tr>\r\n      <th style=\"width:33%\">\r\n        {{charSelectBox.value.nameKey}} from {{MemberSelectBoxA.value.nameKey}}\r\n      </th>\r\n      <th style=\"width:33%\">\r\n        Compare\r\n      </th>\r\n      <th style=\"width:33%\">\r\n        {{charSelectBox.value.nameKey}} from {{MemberSelectBoxB.value.nameKey}}\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        CharABild\r\n      </td>\r\n      <td></td>\r\n      <td>\r\n        CharBBild\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let keyvalue of charCompletedA.total | mapToIterable\" >\r\n        <td>\r\n          {{charCompletedA.total[keyvalue.key]}}\r\n        </td>\r\n        <td>\r\n          {{keyvalue.key | language}}\r\n        </td>\r\n        <td>\r\n          {{charCompletedB.total[keyvalue.key]}}\r\n        </td>\r\n    <tr>\r\n      <td>Eventuell Mods Char A</td>\r\n      <td></td>\r\n      <td>Eventuell Mods Char B</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/events.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/events.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"GildenService.SWGOHEvents\">\r\n  <div *ngFor=\"let event of GildenService.SWGOHEvents\">\r\n    <fieldset *ngIf=\"(event.id | eventShow)\" style=\"width:100%\">\r\n      <legend>\r\n        <span *ngIf=\"event.id == 'EVENT_TRAINING_DROID_SMUGGLING' || event.id == 'EVENT_CREDIT_HEIST_GETAWAY_V2' || event.id == 'EVENT_GALACTIC_BOUNTY_01' || event.id == 'EVENT_GALACTIC_BOUNTY_02' || event.id == 'EVENT_RESOURCE_CONTRABAND_CARGO' || event.id == 'EVENT_RESOURCE_SMUGGLERS_RUN' || event.gameEventType == 3\" style=\"color:#0000ff\">\r\n          {{event.nameKey | eventname}}\r\n        </span>\r\n        <span *ngIf=\"event.id != 'EVENT_TRAINING_DROID_SMUGGLING' && event.id != 'EVENT_CREDIT_HEIST_GETAWAY_V2' && event.id != 'EVENT_GALACTIC_BOUNTY_01' && event.id != 'EVENT_GALACTIC_BOUNTY_02' && event.id != 'EVENT_RESOURCE_CONTRABAND_CARGO' && event.id != 'EVENT_RESOURCE_SMUGGLERS_RUN' && event.gameEventType != 3\">\r\n          {{event.nameKey | eventname}}\r\n        </span>\r\n      </legend>\r\n      Desc: {{event.descKey | eventname}} <br />\r\n      Start: {{event.instanceList[0].startTime | date : 'dd.MM.yyyy HH:mm'}} <br />\r\n      End: {{event.instanceList[0].endTime | date : 'dd.MM.yyyy HH:mm'}} <br />\r\n      Show at: {{event.instanceList[0].displayStartTime | date : 'dd.MM.yyyy HH:mm'}} <br />\r\n    </fieldset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fleetTeams/fleetTeams.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fleetTeams/fleetTeams.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let team of AllFleetTeams;let i = index\" class=\"charNow\">\r\n  <fieldset>\r\n    <legend>{{team.besitzer}} {{'WithRank' | language}} {{team.rang}}</legend>\r\n    <fieldset *ngFor=\"let char of team.charaktere\" class=\"maincharFieldset\">\r\n      <legend>{{char.nameKey}}</legend>\r\n      <div style=\"height:60px;\">\r\n        <img *ngIf=\"char.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n        <img *ngIf=\"char.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n        <img class=\"charImage\" [src]=\"char | fleetimagelink\" [alt]=\"char.nameKey\">\r\n        <img class=\"gearImage\" [src]=\"char | gearlink\" [alt]=\"char.nameKey\">\r\n        <span class=\"char-gear-level\">{{char.level}}</span>\r\n      </div>\r\n\r\n    </fieldset>\r\n  </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/guildcharts/guildcharts.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/guildcharts/guildcharts.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-select-box #selectBox [items]=\"possiblestats\"\r\n               value=\"Arenaleaders\"></dx-select-box>\r\n\r\n<dx-pie-chart *ngIf=\"selectBox.value == 'Arenaleaders'\" [dataSource]=\"arenaLeaderDataSource\"\r\n              type=\"doughnut\"\r\n              title=\"Arenaleaders\">\r\n\r\n  <dxi-series argumentField=\"Leader\" valueField=\"Value\">\r\n    <dxo-label [visible]=\"true\">\r\n      <dxo-connector [visible]=\"true\"></dxo-connector>\r\n    </dxo-label>\r\n  </dxi-series>\r\n\r\n  <dxo-tooltip [enabled]=\"true\"\r\n               [customizeTooltip]=\"customizeLeaderTooltip\">\r\n  </dxo-tooltip>\r\n</dx-pie-chart>\r\n\r\n<dx-pie-chart *ngIf=\"selectBox.value == 'Fleetleaders'\" [dataSource]=\"fleetLeaderDataSource\"\r\n              type=\"doughnut\"\r\n              title=\"Fleetleaders\">\r\n\r\n  <dxi-series argumentField=\"Leader\" valueField=\"Value\">\r\n    <dxo-label [visible]=\"true\">\r\n      <dxo-connector [visible]=\"true\"></dxo-connector>\r\n    </dxo-label>\r\n  </dxi-series>\r\n\r\n  <dxo-tooltip [enabled]=\"true\"\r\n               [customizeTooltip]=\"customizeLeaderTooltip\">\r\n  </dxo-tooltip>\r\n</dx-pie-chart>\r\n\r\n<!--Zetas-->\r\n<div *ngIf=\"selectBox.value == 'Zetas'\">\r\n\r\n  <dx-chart [dataSource]=\"allZetas\"\r\n            title=\"Zetareport\">\r\n    <dxo-common-series-settings argumentField=\"skillName\"\r\n                valueField=\"anzahl\"\r\n                type=\"bar\">\r\n    </dxo-common-series-settings>\r\n\r\n    <dxo-series-template nameField=\"skillName\"></dxo-series-template>\r\n\r\n    <dxo-tooltip [enabled]=\"true\"\r\n                 [customizeTooltip]=\"customizeLeaderTooltip\">\r\n    </dxo-tooltip>\r\n  </dx-chart>\r\n\r\n  Minval: <dx-number-box #numberbox [value]=\"1\"\r\n               [min]=\"1\"\r\n               [max]=\"1000\"\r\n               placeholder=\"Top\"\r\n               (onEnterKey)=\"topZetasChanged(numberbox)\">\r\n        </dx-number-box>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.html":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h3>\r\n    {{'WelcomeText' | language}}\r\n  </h3>\r\n\r\n  <table *ngIf=\"gildenService.gildenInfos && gildenService.gildenInfos.members>0 && !gildenService.isInSync\" style=\"width: 100%;\">\r\n    <tr>\r\n      <td>{{'AllDataText' | language}} <a href=\"http://swgoh.help\">swgoh.help</a> {{'AllPictureText' | language}} <a href=\"http://www.swgoh.gg\">www.swgoh.gg</a></td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GuildName' | language}} = {{gildenService.gildenInfos.name}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GildenGP' | language}} = {{gildenService.gildenInfos.gp}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GildenDescription' | language}} = {{gildenService.gildenInfos.desc}}</td>\r\n    </tr>\r\n    <tr> </tr>\r\n    <tr> </tr>\r\n    <tr>\r\n      <td>{{'RaidsPlayed' | language}}:</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Rancor = {{gildenService.gildenInfos.raid.rancor}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>AAT = {{gildenService.gildenInfos.raid.aat}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>STR = {{gildenService.gildenInfos.raid.sith_raid}}</td>\r\n    </tr>\r\n    <tr> </tr>\r\n    <tr> </tr>\r\n    <tr>\r\n      <td>{{'LastSync' | language}} = {{gildenService.gildenInfos.updated | date: \"dd.MM.yyyy HH:mm:ss\"}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n <dx-text-area *ngIf=\"gildenService.isInSync\" [height]=\"windowNow.innerHeight-175\" [readOnly]=\"true\" [(value)]=\"gildenService.syncstatus\"></dx-text-area>\r\n\r\n  \r\n  <h3 *ngIf=\"settingsService.settings.allycode==''\">{{'EnterAllyCode' | language}}</h3>\r\n  <h3 *ngIf=\"gildenService.gildenInfos && gildenService.gildenInfos.members==0 && settingsService.settings.allycode!=''\">{{'PleaseSync' | language}}</h3>\r\n\r\n</div>\r\n\r\n<button (click)=\"syncApi()\" style=\"position: absolute; bottom: 10px; left: 0px;\">{{'Synchronise' | language}} ({{gildenService.isInSync}})</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/newCharSearch/newCharSearch.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newCharSearch/newCharSearch.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"{{'CharNamePlaceHolder'| language}}\" [(ngModel)]=\"charToSearch\" (ngModelChange)=\"searchCharaktere()\">\r\n\r\n<div *ngIf=\"charaktere\">\r\n  <fieldset *ngFor=\"let char of charaktere;let i = index\" class=\"maincharFieldset\">\r\n    <legend>{{char.besitzer}}</legend>\r\n    <div>\r\n      <div style=\"height:60px;width:70px;display:inline-block\">\r\n        <img *ngIf=\"char.charakter.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.charakter.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.charakter.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.charakter.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.charakter.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.charakter.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.charakter.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.charakter.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.charakter.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.charakter.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.charakter.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.charakter.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.charakter.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n        <img *ngIf=\"char.charakter.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n        <img class=\"charImage\" [src]=\"char.charakter | charimagelink\" [alt]=\"char.nameKey\">\r\n        <img class=\"gearImage\" [src]=\"char.charakter | gearlink\" [alt]=\"char.nameKey\">\r\n        <span class=\"char-level\">{{char.charakter.level}}</span>\r\n        <span class=\"char-gear-level\">{{char.charakter | chargear}}</span>\r\n      </div>\r\n\r\n      <div style=\"display:inline-block\">\r\n        <div *ngFor=\"let skill of char.charakter.skills\">\r\n          <span *ngIf=\"skill.isZeta == true && skill.tier == 8\">Zeta: {{skill.nameKey}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>{{'Charpower' | language}}: {{char.charakter.gp}}</div>\r\n\r\n    <button (click)=\"showMods[i] = !showMods[i]\">{{'Show/Hide'| language}}</button>\r\n\r\n    <div *ngIf=\"showMods[i]\">\r\n      <fieldset *ngFor=\"let mod of char.charakter.mods\" style=\"position:relative; float:left;\">\r\n        <legend>{{(mod.set | modsetname) | language}}-{{(mod.slot | modslotname) | language}} L:{{mod.level}} S:{{mod.pips}}</legend>\r\n        <div style=\"color:blue\">{{(mod.primaryStat.unitStat | modstatname) | language}}: {{mod.primaryStat.value | modstatvalue : (mod.primaryStat.unitStat | modstatname)}}</div>\r\n        <div *ngFor=\"let stat of mod.secondaryStat\">{{(stat.unitStat | modstatname) | language}}: {{stat.value | modstatvalue : (stat.unitStat | modstatname)}}</div>\r\n      </fieldset>\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/setting.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/setting.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <fieldset>\r\n    <legend>{{'Settings' | language}} :</legend>\r\n\r\n    <p style=\"float:left\">{{'Allycode' | language}}:</p>\r\n    <input type=\"text\" placeholder=\"{{'AllycodeEG' | language}}\" [(ngModel)]=\"this.settings.allycode\" (change)=\"changedAllycode()\">\r\n\r\n    <p style=\"float:left\">{{'SortMemberby' | language}}:</p>\r\n    <select [(ngModel)]=\"this.settings.sortMemberBy\">\r\n      <option value=\"OGM\">Overall GM</option>\r\n      <option value=\"CGM\">Charakter GM</option>\r\n      <option value=\"FGM\">Fleet GM</option>\r\n      <option value=\"Name\">Name</option>\r\n    </select>\r\n\r\n    <p>{{'UseAutocomplete' | language}}:</p>\r\n\r\n    <p>{{'LoadSync' | language}}:</p>\r\n\r\n    <label class=\"container\" style=\"top:-85px\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.useAutoComplete\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n\r\n    <label class=\"container\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.loadSync\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n    <button (click)=\"saveSettings()\">{{'SaveSettings' | language}}</button>\r\n  </fieldset>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipSearch/shipSearch.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipSearch/shipSearch.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"{{'CharNamePlaceHolder'| language}}\" [(ngModel)]=\"charToSearch\" (ngModelChange)=\"searchCharaktere()\">\r\n\r\n<div *ngIf=\"charaktere\">\r\n  <fieldset *ngFor=\"let char of charaktere;let i = index\" class=\"maincharFieldset\">\r\n    <legend>{{char.besitzer}}</legend>\r\n    <div style=\"height:60px;\">\r\n      <img *ngIf=\"char.charakter.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n      <img *ngIf=\"char.charakter.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n      <img *ngIf=\"char.charakter.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n      <img *ngIf=\"char.charakter.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n      <img *ngIf=\"char.charakter.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n      <img *ngIf=\"char.charakter.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n      <img *ngIf=\"char.charakter.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n      <img *ngIf=\"char.charakter.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n      <img *ngIf=\"char.charakter.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n      <img *ngIf=\"char.charakter.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n      <img *ngIf=\"char.charakter.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n      <img *ngIf=\"char.charakter.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n      <img *ngIf=\"char.charakter.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n      <img *ngIf=\"char.charakter.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n      <img class=\"charImage\" [src]=\"char.charakter | fleetimagelink\" [alt]=\"char.charakter.nameKey\">\r\n      <img class=\"gearImage\" [src]=\"char.charakter | gearlink\" [alt]=\"char.charakter.nameKey\">\r\n      <span class=\"char-gear-level\">{{char.charakter.level}}</span>\r\n    </div>\r\n\r\n    <div>{{'Charpower' | language}}: {{char.charakter.gp}}</div>\r\n\r\n  </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skInternal/skinternal.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skInternal/skinternal.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<dx-chart #skinternalChart [dataSource]=\"dataSource\"\r\n          (onLegendClick)=\"onLegendClick($event)\">\r\n  <dxo-common-series-settings argumentField=\"timestamp\"\r\n                              [valueField]=\"selectBox.value || currentfield\"\r\n                              type=\"spline\">\r\n  </dxo-common-series-settings>\r\n  <dxo-series-template nameField=\"name\"></dxo-series-template>\r\n  <dxo-tooltip [enabled]=\"true\"\r\n               [customizeTooltip]=\"customizeTooltip\">\r\n  </dxo-tooltip>\r\n</dx-chart>\r\n\r\n  <dx-select-box #selectBox [items]=\"fieldNames\"\r\n                 [value]=\"currentfield\"\r\n                 (onValueChanged)=\"resetFilters()\"></dx-select-box>\r\n\r\n  <div *ngIf=\"selectBox.value == 'arenarank' || selectBox.value == 'fleetrank'\">\r\n    Maxval: <dx-number-box #numberbox [value]=\"10000\"\r\n                           [min]=\"1\"\r\n                           [max]=\"1000000\"\r\n                           placeholder=\"Top\"\r\n                           (onEnterKey)=\"maxValChanged(numberbox, selectBox.value, skinternalChart)\">\r\n    </dx-number-box>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/squadSearch/squadsearch.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/squadSearch/squadsearch.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n  <div style=\"width:68%; display: inline-block;\">\r\n    <select style=\"width:100%;\" [(ngModel)]=\"selectedTeam\" (ngModelChange)=\"getSquadsFromGildenInfos()\">\r\n      <option *ngFor=\"let team of myTeams\" [ngValue]=\"team\">{{team.Name}}</option>\r\n    </select>\r\n  </div>\r\n  <div style=\"width: 30%; display: inline-block;\">\r\n    <button (click)=\"deleteThisTeam()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">{{'Del'| language}}</button>\r\n    <button (click)=\"openModal()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">{{'Add'| language}}</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let squad of squadsFromGildenInfos\" class=\"charNow\">\r\n  <fieldset style=\"height:80px\">\r\n    <legend>{{selectedTeam.Name}} {{'of'| language}} {{squad[0].Besitzer}} {{squad | squadpower}}</legend>\r\n    <div style=\"height:80%; width:100%\">\r\n      <div *ngIf=\"squad[0]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[0].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[0].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[0].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[0].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[0].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" [src]=\"squad[0] | charimagelink\" alt=\"{{squad[0].nameKey}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[0].gearLevel}}.png\" alt=\"{{squad[0].nameKey}}\">\r\n          <span class=\"char-level\">{{squad[0].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[0].gearLevel)}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"squad[1]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[1].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[1].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[1].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[1].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[1].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" [src]=\"squad[1] | charimagelink\" alt=\"{{squad[1].nameKey}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[1].gearLevel}}.png\" alt=\"{{squad[1].nameKey}}\">\r\n          <span class=\"char-level\">{{squad[1].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[1].gearLevel)}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"squad[2]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[2].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[2].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[2].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[2].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[2].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" [src]=\"squad[2] | charimagelink\" alt=\"{{squad[2].nameKey}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[2].gearLevel}}.png\" alt=\"{{squad[2].nameKey}}\">\r\n          <span class=\"char-level\">{{squad[2].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[2].gearLevel)}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"squad[3]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[3].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[3].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[3].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[3].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[3].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" [src]=\"squad[3] | charimagelink\" alt=\"{{squad[3].nameKey}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[3].gearLevel}}.png\" alt=\"{{squad[3].nameKey}}\">\r\n          <span class=\"char-level\">{{squad[3].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[3].gearLevel)}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"squad[4]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[4].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[4].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[4].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[4].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[4].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" [src]=\"squad[4] | charimagelink\" alt=\"{{squad[4].nameKey}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[4].gearLevel}}.png\" alt=\"{{squad[4].nameKey}}\">\r\n          <span class=\"char-level\">{{squad[4].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[4].gearLevel)}}</span>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n\r\n\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n      <h2>{{'AddSquad'| language}}</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <p>\r\n        <input type=\"text\" placeholder=\"Squadname ( e.g 'Phönix' or 'Brotini'  )\" [(ngModel)]=\"squadName\">\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Leader :\r\n        <select [(ngModel)]=\"selectedLeader\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 2 :\r\n        <select [(ngModel)]=\"selectedChar2\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 3 :\r\n        <select [(ngModel)]=\"selectedChar3\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 4 :\r\n        <select [(ngModel)]=\"selectedChar4\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 5 :\r\n        <select [(ngModel)]=\"selectedChar5\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n      </p>\r\n\r\n      <button style=\"width: 100%\" (click)=\"addSquadToMyTeams()\">{{'Confirm'| language}}</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/zetas/zetas.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/zetas/zetas.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!allZetas\">Lädt...</div>\r\n\r\n<dx-data-grid *ngIf=\"allZetas\"\r\n              [dataSource]=\"allZetas\"\r\n              [allowColumnReordering]=\"true\"\r\n              [showBorders]=\"true\"\r\n              [allowColumnResizing]=\"true\"\r\n              [columnMinWidth]=\"50\"\r\n              [columnAutoWidth]=\"true\">\r\n\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxo-scrolling mode=\"infinite\"></dxo-scrolling>\r\n\r\n  <dxo-column-chooser [enabled]=\"true\"\r\n                      mode=\"dragAndDrop\">\r\n  </dxo-column-chooser>\r\n\r\n  <dxi-column dataField=\"CharName\" caption=\"Charname\" [dataType]=\"string\" cellTemplate=\"SkillnameTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"skillName\" caption=\"Skillname\" [dataType]=\"string\" cellTemplate=\"SkillnameTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"anzahl\" caption=\"Anzahl Zetas\" [dataType]=\"number\" sortOrder=\"desc\" cellTemplate=\"SkillnameTemplate\"></dxi-column>\r\n  <dxi-column dataField=\"Membernames\" caption=\"Membernames\" [visible]=\"false\" cellTemplate=\"MembernamesTemplate\"></dxi-column>\r\n\r\n  <div *dxTemplate=\"let data of 'MembernamesTemplate'\">\r\n    <span *ngFor=\"let membername of data.value\">{{membername}}, </span>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let data of 'SkillnameTemplate'\">\r\n    <div [tooltip]=\"data | skillmembernames\" trigger=\"click\" hide-delay=\"5000\" hide-delay-mobile=\"5000\" width=\"100%\">{{data.value}}</div>\r\n  </div>\r\n\r\n  <div *dxTemplate=\"let data of 'SkillnameTemplate'\">\r\n    <div [tooltip]=\"data | skillmembernames\" trigger=\"click\" hide-delay=\"5000\" hide-delay-mobile=\"5000\" width=\"100%\">{{data.value}}</div>\r\n  </div>\r\n\r\n</dx-data-grid>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MemberTracking/membertracking.css":
/*!***************************************************!*\
  !*** ./src/app/MemberTracking/membertracking.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTWVtYmVyVHJhY2tpbmcvbWVtYmVydHJhY2tpbmcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VB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QUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL01lbWJlclRyYWNraW5nL21lbWJlcnRyYWNraW5nLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLnN0YXIxMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMTNweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDIxcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMzlweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogNDhweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogNTVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMHB4O1xyXG4gIGxlZnQ6IC0wcHg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/MemberTracking/membertracking.ts":
/*!**************************************************!*\
  !*** ./src/app/MemberTracking/membertracking.ts ***!
  \**************************************************/
/*! exports provided: MemberTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTrackingComponent", function() { return MemberTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var MemberTrackingComponent = /** @class */ (function () {
    function MemberTrackingComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
    }
    MemberTrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'membertracking',
            template: __webpack_require__(/*! raw-loader!./membertracking.html */ "./node_modules/raw-loader/index.js!./src/app/MemberTracking/membertracking.html"),
            styles: [__webpack_require__(/*! ./membertracking.css */ "./src/app/MemberTracking/membertracking.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], MemberTrackingComponent);
    return MemberTrackingComponent;
}());



/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.css":
/*!*********************************************!*\
  !*** ./src/app/RaidPlanner/raidplanner.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmFpZFBsYW5uZXIvcmFpZHBsYW5uZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVB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Q1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL1JhaWRQbGFubmVyL3JhaWRwbGFubmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLnN0YXIxMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMTNweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDIxcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMzlweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogNDhweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogNTVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMHB4O1xyXG4gIGxlZnQ6IC0wcHg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.ts":
/*!********************************************!*\
  !*** ./src/app/RaidPlanner/raidplanner.ts ***!
  \********************************************/
/*! exports provided: RaidPlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaidPlannerComponent", function() { return RaidPlannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var RaidPlannerComponent = /** @class */ (function () {
    function RaidPlannerComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.dmgP4 = 100;
        this.squads = null;
        this.columns = new Array();
        this.getRaidPlannerTeams();
        if (this.squads == null) {
            this.squads = new Array();
            var jtr = new squad();
            jtr.Name = "JTR P1";
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
            jedi.Name = "Jedi P1";
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
            trooper.Name = "Truppler P2";
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
            ewoks.Name = "Ewoks P2";
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
            halunken.Name = "Halunken P2";
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
            leia.Name = "Leia P2";
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
            impP2.Name = "Imp Darth P2";
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
            phoenix.Name = "Phoenix P2";
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
            chexMix1.Name = "ChexMix (orig) P3";
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
            chexMix2.Name = "ChexMix (Greedo) P3";
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
            nsP4.Name = "NS P4";
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
            firstOrder.Name = "FO P4";
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
    RaidPlannerComponent.prototype.getRaidPlannerTeams = function () {
        if (localStorage.midiSquads != null)
            this.squads = JSON.parse(localStorage.midiSquads);
        console.log('squads', this.squads);
    };
    RaidPlannerComponent.prototype.saveRaidPlannerTeams = function (squads) {
        localStorage.midiSquads = JSON.stringify(squads);
        this.squads = squads;
        console.log('squads', this.squads);
    };
    RaidPlannerComponent.prototype.onToolbarPreparing = function (e) {
        e.toolbarOptions.items.unshift({
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
        });
    };
    RaidPlannerComponent.prototype.deleteThisSquad = function () {
        var index = this.squads.indexOf(this.selectedSquad);
        if (index > -1) {
            this.squads.splice(index, 1);
        }
        this.selectedSquad = this.squads[this.squads.length - 1];
        this.saveRaidPlannerTeams(this.squads);
    };
    RaidPlannerComponent.prototype.addNewSquad = function () {
        var template = new squad();
        template.Name = "New Squad";
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
    };
    // When the user clicks the button, open the modal 
    RaidPlannerComponent.prototype.openModal = function () {
        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    RaidPlannerComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
        this.loadGridDatasource();
        this.saveRaidPlannerTeams(this.squads);
    };
    RaidPlannerComponent.prototype.loadGridDatasource = function () {
        var dataSourceTemp = new Array();
        var columnNames = new Array();
        columnNames.push("Member");
        for (var i = 0; i < this.squads.length; i++)
            columnNames.push(this.squads[i].Name);
        this.columns = columnNames;
        for (var i = 0; i < this.gildenService.gildenInfos.roster.length; i++) {
            var memberNow = new Array();
            memberNow.push(this.gildenService.gildenInfos.roster[i].name);
            for (var x = 0; x < this.squads.length; x++) {
                memberNow.push(this.playerGotSquadExact(this.gildenService.gildenInfos.roster[i], this.squads[x]));
            }
            dataSourceTemp.push(memberNow);
        }
        this.raidDataSource = dataSourceTemp;
        console.log(this.raidDataSource);
    };
    RaidPlannerComponent.prototype.colorizeCell = function (event) {
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
    };
    RaidPlannerComponent.prototype.playerGotSquadExact = function (player, squad) {
        var squadNow = squad;
        if (squadNow == null)
            return -100;
        var squadFound = this.gildenService.findSquadWithMember(squadNow, player);
        var zetasInSquad = 0;
        for (var i = 0; i < squadFound.length; i++) {
            zetasInSquad += squadNow.Zetas[i];
        }
        var onehundredPercent = (1 * 7 * 5) + (2 * 12 * 5) + (5 * zetasInSquad);
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
    };
    RaidPlannerComponent.prototype.playerGotSquad = function (player, squadName) {
        var squadNow = this.squads.find(function (s) { return s.Name == squadName; });
        var tempBewertung = 0;
        if (squadNow == null)
            return tempBewertung;
        var squadFound = this.gildenService.findSquadWithMember(squadNow, player);
        var hasAll7Star = true;
        var hasAllG11 = true;
        var hasAllZeta = true;
        if (squadFound.length < 5)
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
    };
    RaidPlannerComponent.prototype.alertSquad = function (squadNow) {
        var charString = "";
        for (var i = 0; i < squadNow.Charaktere.length; i++) {
            charString += "Name : '" + squadNow.Charaktere[i] + "' Zetas needed: " + squadNow.Zetas[i] + "\n\r";
        }
        alert('The squad ' + squadNow.Name + ' has the following Charackters: \n\r ' + charString);
    };
    RaidPlannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'raidplanner',
            template: __webpack_require__(/*! raw-loader!./raidplanner.html */ "./node_modules/raw-loader/index.js!./src/app/RaidPlanner/raidplanner.html"),
            styles: [__webpack_require__(/*! ./raidplanner.css */ "./src/app/RaidPlanner/raidplanner.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], RaidPlannerComponent);
    return RaidPlannerComponent;
}());

var squad = /** @class */ (function () {
    function squad() {
        this.Name = 'SquadName';
        this.Charaktere = new Array();
        this.Zetas = new Array();
    }
    return squad;
}());


/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.css":
/*!********************************************!*\
  !*** ./src/app/TBPlatoons/platoontool.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#platoons tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#platoons tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#platoons th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVEJQbGF0b29ucy9wbGF0b29udG9vbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOzs7QUFFQSwyQkFBMkI7OztBQUMzQjtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxXQUFXLEVBQUUsZUFBZTtFQUM1QixpQkFBaUIsRUFBRSx3QkFBd0I7RUFDM0MsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7O0FBRUEsa0JBQWtCOzs7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixxRUFBcUU7RUFDckUsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQywwQkFBMEI7RUFDMUI7QUFDRjs7O0FBRUEsa0JBQWtCOzs7QUFDbEI7RUFDRTtJQUNFLFdBQVc7SUFDWDtFQUNGOztFQUVBO0lBQ0UsTUFBTTtJQUNOO0VBQ0Y7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWDtFQUNGOztFQUVBO0lBQ0UsTUFBTTtJQUNOO0VBQ0Y7QUFDRjs7O0FBRUEscUJBQXFCOzs7QUFDckI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7OztBQUVFOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7O0FBRUY7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9UQlBsYXRvb25zL3BsYXRvb250b29sLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jcGxhdG9vbnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jcGxhdG9vbnMgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNwbGF0b29ucyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMjVweDtcclxuICBsZWZ0OiAtMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbn1cclxuXHJcbi5zdGFyMTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBsZWZ0OiA2cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNweDtcclxuICBsZWZ0OiAyMXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7XHJcbiAgbGVmdDogMzBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE1IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDM5cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDQ4cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDU1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmdlYXJJbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTBweDtcclxuICBsZWZ0OiAtMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbn1cclxuXHJcbi5jaGFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0MjU3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5jaGFyLWdlYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2MDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHRvcDogNTVweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmRpdkZvckNoYXIge1xyXG4gIHdpZHRoOiA1OHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNmZmO1xyXG4gIGJvcmRlcjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MnB4O1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NUZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MnB4O1xyXG4gIGxlZnQ6IDIzcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvKm1hcmdpbjogNHB4IDJweDsqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.ts":
/*!*******************************************!*\
  !*** ./src/app/TBPlatoons/platoontool.ts ***!
  \*******************************************/
/*! exports provided: TBPlatoonComponent, neededChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBPlatoonComponent", function() { return TBPlatoonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neededChar", function() { return neededChar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var TBPlatoonComponent = /** @class */ (function () {
    function TBPlatoonComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.ActualPhase = new Array();
        this.AllChars1 = new Array();
        this.AllChars2 = new Array();
        this.AllChars3 = new Array();
        this.AllChars4 = new Array();
        this.AllChars5 = new Array();
        this.AllChars6 = new Array();
        this.AllChars7 = new Array();
        this.AllShips1 = new Array();
        this.AllShips2 = new Array();
        this.AllShips3 = new Array();
        this.AllShips4 = new Array();
        this.AllShips5 = new Array();
        this.AllShips6 = new Array();
        this.AllShips7 = new Array();
        this.DSTB1 = new Array();
        this.DSTB2 = new Array();
        this.DSTB3 = new Array();
        this.DSTB4 = new Array();
        this.DSTB5 = new Array();
        this.DSTB6 = new Array();
        this.LSTB1 = new Array();
        this.LSTB2 = new Array();
        this.LSTB3 = new Array();
        this.LSTB4 = new Array();
        this.LSTB5 = new Array();
        this.LSTB6 = new Array();
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
        this.DSTB1.push(new neededChar("TIE Fighter Pilot", 11, 2, false));
        this.DSTB1.push(new neededChar("Royal Guard", 11, 2, false));
        this.DSTB1.push(new neededChar("Stormtrooper", 12, 2, false));
        this.DSTB1.push(new neededChar("Magmatrooper", 11, 2, false));
        this.DSTB1.push(new neededChar("Count Dooku", 7, 2, false));
        this.DSTB1.push(new neededChar("IG-100 MagnaGuard", 6, 2, false));
        this.DSTB1.push(new neededChar("B2 Super Battle Droid", 6, 2, false));
        this.DSTB1.push(new neededChar("IG-86 Sentinel Droid", 6, 2, false));
        this.DSTB1.push(new neededChar("Poggle the Lesser", 6, 2, false));
        this.DSTB1.push(new neededChar("Death Trooper", 9, 2, false));
        this.DSTB1.push(new neededChar("Sith Trooper", 5, 2, false));
        this.DSTB1.push(new neededChar("Darth Maul", 5, 2, false));
        this.DSTB1.push(new neededChar("Savage Opress", 5, 2, false));
        this.DSTB1.push(new neededChar("Director Krennic", 5, 2, false));
        this.DSTB1.push(new neededChar("Talia", 4, 2, false));
        this.DSTB1.push(new neededChar("Old Daka", 4, 2, false));
        this.DSTB1.push(new neededChar("Nightsister Initiate", 4, 2, false));
        this.DSTB1.push(new neededChar("Nightsister Acolyte", 4, 2, false));
        this.DSTB1.push(new neededChar("Asajj Ventress", 4, 2, false));
        this.DSTB1.push(new neededChar("Sun Fac", 4, 2, false));
        this.DSTB1.push(new neededChar("Imperial Super Commando", 2, 2, false));
        this.DSTB1.push(new neededChar("Gar Saxon", 2, 2, false));
        this.DSTB1.push(new neededChar("Darth Sidious", 3, 2, false));
        this.DSTB1.push(new neededChar("Nute Gunray", 2, 2, false));
        this.DSTB1.push(new neededChar("Grand Moff Tarkin", 4, 2, false));
        this.DSTB1.push(new neededChar("Kylo Ren", 2, 2, false));
        this.DSTB1.push(new neededChar("HK-47", 2, 2, false));
        this.DSTB1.push(new neededChar("First Order TIE Pilot", 2, 2, false));
        this.DSTB1.push(new neededChar("First Order Stormtrooper", 2, 2, false));
        this.DSTB1.push(new neededChar("First Order Officer", 2, 2, false));
        this.DSTB1.push(new neededChar("Captain Phasma", 2, 2, false));
        this.DSTB1.push(new neededChar("Geonosian Spy", 2, 2, false));
        this.DSTB1.push(new neededChar("Darth Nihilus", 2, 2, false));
        this.DSTB1.push(new neededChar("Sith Assassin", 2, 2, false));
        this.DSTB1.push(new neededChar("Shoretrooper", 3, 2, false));
        this.DSTB1.push(new neededChar("Geonosian Soldier", 2, 2, false));
        this.DSTB1.push(new neededChar("Gamorrean Guard", 3, 2, false));
        this.DSTB1.push(new neededChar("Tusken Raider", 1, 2, false));
        this.DSTB1.push(new neededChar("Mob Enforcer", 1, 2, false));
        this.DSTB1.push(new neededChar("URoRRuR'R'R", 1, 2, false));
        this.DSTB1.push(new neededChar("Tusken Shaman", 1, 2, false));
        this.DSTB1.push(new neededChar("IG-88", 2, 2, false));
        this.DSTB1.push(new neededChar("Greedo", 2, 2, false));
        this.DSTB1.push(new neededChar("Dengar", 2, 2, false));
        this.DSTB1.push(new neededChar("Boba Fett", 2, 2, false));
        this.DSTB2.push(new neededChar("TIE Fighter Pilot", 13, 3, false));
        this.DSTB2.push(new neededChar("Royal Guard", 11, 3, false));
        this.DSTB2.push(new neededChar("Stormtrooper", 14, 3, false));
        this.DSTB2.push(new neededChar("Magmatrooper", 13, 3, false));
        this.DSTB2.push(new neededChar("Count Dooku", 7, 3, false));
        this.DSTB2.push(new neededChar("IG-100 MagnaGuard", 7, 3, false));
        this.DSTB2.push(new neededChar("B2 Super Battle Droid", 7, 3, false));
        this.DSTB2.push(new neededChar("IG-86 Sentinel Droid", 7, 3, false));
        this.DSTB2.push(new neededChar("Poggle the Lesser", 6, 3, false));
        this.DSTB2.push(new neededChar("Death Trooper", 11, 3, false));
        this.DSTB2.push(new neededChar("Sith Trooper", 4, 3, false));
        this.DSTB2.push(new neededChar("Darth Maul", 4, 3, false));
        this.DSTB2.push(new neededChar("Savage Opress", 4, 3, false));
        this.DSTB2.push(new neededChar("Director Krennic", 7, 3, false));
        this.DSTB2.push(new neededChar("Talia", 4, 3, false));
        this.DSTB2.push(new neededChar("Old Daka", 4, 3, false));
        this.DSTB2.push(new neededChar("Nightsister Initiate", 4, 3, false));
        this.DSTB2.push(new neededChar("Nightsister Acolyte", 4, 3, false));
        this.DSTB2.push(new neededChar("Asajj Ventress", 4, 3, false));
        this.DSTB2.push(new neededChar("Sun Fac", 4, 3, false));
        this.DSTB2.push(new neededChar("Imperial Super Commando", 2, 3, false));
        this.DSTB2.push(new neededChar("Gar Saxon", 2, 3, false));
        this.DSTB2.push(new neededChar("Darth Sidious", 2, 3, false));
        this.DSTB2.push(new neededChar("Nute Gunray", 3, 3, false));
        this.DSTB2.push(new neededChar("Grand Moff Tarkin", 4, 3, false));
        this.DSTB2.push(new neededChar("Kylo Ren", 2, 3, false));
        this.DSTB2.push(new neededChar("HK-47", 2, 3, false));
        this.DSTB2.push(new neededChar("First Order TIE Pilot", 2, 3, false));
        this.DSTB2.push(new neededChar("First Order Stormtrooper", 2, 3, false));
        this.DSTB2.push(new neededChar("First Order Officer", 2, 3, false));
        this.DSTB2.push(new neededChar("Captain Phasma", 2, 3, false));
        this.DSTB2.push(new neededChar("Geonosian Spy", 2, 3, false));
        this.DSTB2.push(new neededChar("Darth Nihilus", 2, 3, false));
        this.DSTB2.push(new neededChar("Sith Assassin", 2, 3, false));
        this.DSTB2.push(new neededChar("Shoretrooper", 3, 3, false));
        this.DSTB2.push(new neededChar("Geonosian Soldier", 2, 3, false));
        this.DSTB2.push(new neededChar("Gamorrean Guard", 1, 3, false));
        this.DSTB2.push(new neededChar("Tusken Raider", 1, 3, false));
        this.DSTB2.push(new neededChar("Mob Enforcer", 1, 3, false));
        this.DSTB2.push(new neededChar("URoRRuR'R'R", 1, 3, false));
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
        this.DSTB3.push(new neededChar("Rey's Millennium Falcon", 2, 4, true));
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
        this.LSTB3.push(new neededChar("Rey's Millennium Falcon", 2, 4, true));
        this.LSTB3.push(new neededChar("Kylo Ren's Command Shuttle", 2, 4, true));
        this.LSTB3.push(new neededChar("Bistan's U-wing", 2, 4, true));
        this.LSTB3.push(new neededChar("Biggs Darklighter's X-wing", 2, 4, true));
        //NEUE Platoons START
        this.LSTB4.push(new neededChar("Lando's Millennium Falcon", 1, 5, true));
        this.LSTB4.push(new neededChar("Scimitar", 2, 5, true));
        this.LSTB4.push(new neededChar("Ghost", 6, 5, true));
        this.LSTB4.push(new neededChar("Cassian's U-wing", 4, 5, true));
        this.LSTB4.push(new neededChar("Hound's Tooth", 3, 5, true));
        this.LSTB4.push(new neededChar("Imperial TIE Fighter", 8, 5, true));
        this.LSTB4.push(new neededChar("Gauntlet Starfighter", 4, 5, true));
        this.LSTB4.push(new neededChar("Bistan's U-wing", 2, 5, true));
        this.LSTB4.push(new neededChar("IG-2000", 2, 5, true));
        this.LSTB4.push(new neededChar("TIE Advanced x1", 1, 5, true));
        this.LSTB4.push(new neededChar("Wedge Antilles's X-wing", 5, 5, true));
        this.LSTB4.push(new neededChar("Geonosian Spy's Starfighter", 4, 5, true));
        this.LSTB4.push(new neededChar("Slave I", 5, 5, true));
        this.LSTB4.push(new neededChar("Phantom II", 4, 5, true));
        this.LSTB4.push(new neededChar("Poe Dameron's X-wing", 3, 5, true));
        this.LSTB4.push(new neededChar("Biggs Darklighter's X-wing", 4, 5, true));
        this.LSTB4.push(new neededChar("Xanadu Blood", 2, 5, true));
        this.LSTB4.push(new neededChar("First Order TIE Fighter", 2, 5, true));
        this.LSTB4.push(new neededChar("Ahsoka Tano's Jedi Starfighter", 3, 5, true));
        this.LSTB4.push(new neededChar("Rey's Millennium Falcon", 2, 5, true));
        this.LSTB4.push(new neededChar("Jedi Consular's Starfighter", 3, 5, true));
        this.LSTB4.push(new neededChar("TIE Reaper", 1, 5, true));
        this.LSTB4.push(new neededChar("Geonosian Soldier's Starfighter", 1, 5, true));
        this.LSTB4.push(new neededChar("Rex's ARC-170", 6, 5, true));
        this.LSTB4.push(new neededChar("Plo Koon's Jedi Starfighter", 5, 5, true));
        this.LSTB4.push(new neededChar("Kylo Ren's Command Shuttle", 1, 5, true));
        this.LSTB4.push(new neededChar("Sun Fac's Geonosian Starfighter", 1, 5, true));
        this.LSTB4.push(new neededChar("Clone Sergeant's ARC-170", 5, 5, true));
        this.LSTB4.push(new neededChar("TIE Silencer", 1, 5, true));
        this.LSTB4.push(new neededChar("Umbaran Starfighter", 2, 5, true));
        this.LSTB4.push(new neededChar("Qui-Gon Jinn", 5, 5, false));
        this.LSTB4.push(new neededChar("Sabine Wren", 2, 5, false));
        this.LSTB4.push(new neededChar("Lando Calrissian", 4, 5, false));
        this.LSTB4.push(new neededChar("Ezra Bridger", 2, 5, false));
        this.LSTB4.push(new neededChar("Chief Chirpa", 3, 5, false));
        this.LSTB4.push(new neededChar("Rey (Scavenger)", 4, 5, false));
        this.LSTB4.push(new neededChar("Mace Windu", 4, 5, false));
        this.LSTB4.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 4, 5, false));
        this.LSTB4.push(new neededChar("Chopper", 2, 5, false));
        this.LSTB4.push(new neededChar("Bistan", 2, 5, false));
        this.LSTB4.push(new neededChar("Ewok Elder", 3, 5, false));
        this.LSTB4.push(new neededChar("Resistance Pilot", 4, 5, false));
        this.LSTB4.push(new neededChar("Plo Koon", 3, 5, false));
        this.LSTB4.push(new neededChar("Chirrut Îmwe", 2, 5, false));
        this.LSTB4.push(new neededChar("Admiral Ackbar", 4, 5, false));
        this.LSTB4.push(new neededChar("Bodhi Rook", 1, 5, false));
        this.LSTB4.push(new neededChar("Teebo", 3, 5, false));
        this.LSTB4.push(new neededChar("Poe Dameron", 4, 5, false));
        this.LSTB4.push(new neededChar("Clone Wars Chewbacca", 2, 5, false));
        this.LSTB4.push(new neededChar("Baze Malbus", 2, 5, false));
        this.LSTB4.push(new neededChar("Biggs Darklighter", 5, 5, false));
        this.LSTB4.push(new neededChar("Wedge Antilles", 5, 5, false));
        this.LSTB4.push(new neededChar("Ewok Scout", 3, 5, false));
        this.LSTB4.push(new neededChar("Barriss Offee", 3, 5, false));
        this.LSTB4.push(new neededChar("Luke Skywalker (Farmboy)", 5, 5, false));
        this.LSTB4.push(new neededChar("Hera Syndulla", 2, 5, false));
        this.LSTB4.push(new neededChar("Wicket", 3, 5, false));
        this.LSTB4.push(new neededChar("L3-37", 2, 5, false));
        this.LSTB4.push(new neededChar("Stormtrooper Han", 5, 5, false));
        this.LSTB4.push(new neededChar("Jedi Knight Guardian", 2, 5, false));
        this.LSTB4.push(new neededChar("Jedi Knight Anakin", 5, 5, false));
        this.LSTB4.push(new neededChar("Veteran Smuggler Chewbacca", 3, 5, false));
        this.LSTB4.push(new neededChar("Cassian Andor", 2, 5, false));
        this.LSTB4.push(new neededChar("Young Han Solo", 2, 5, false));
        this.LSTB4.push(new neededChar("Clone Sergeant - Phase I", 2, 5, false));
        this.LSTB4.push(new neededChar("CT-21-0408 \"Echo\"", 2, 5, false));
        this.LSTB4.push(new neededChar("Veteran Smuggler Han Solo", 3, 5, false));
        this.LSTB4.push(new neededChar("K-2SO", 2, 5, false));
        this.LSTB4.push(new neededChar("Qi'ra", 2, 5, false));
        this.LSTB4.push(new neededChar("Enfys Nest", 2, 5, false));
        this.LSTB4.push(new neededChar("Ahsoka Tano", 4, 5, false));
        this.LSTB4.push(new neededChar("Jedi Consular", 4, 5, false));
        this.LSTB4.push(new neededChar("Vandor Chewbacca", 2, 5, false));
        this.LSTB4.push(new neededChar("Princess Leia", 5, 5, false));
        this.LSTB4.push(new neededChar("CT-5555 \"Fives\"", 2, 5, false));
        this.LSTB4.push(new neededChar("Luminara Unduli", 4, 5, false));
        this.LSTB4.push(new neededChar("CC-2224 \"Cody\"", 2, 5, false));
        this.LSTB4.push(new neededChar("Finn", 2, 5, false));
        this.LSTB4.push(new neededChar("Jyn Erso", 2, 5, false));
        this.LSTB4.push(new neededChar("Young Lando Calrissian", 2, 5, false));
        this.LSTB4.push(new neededChar("CT-7567 \"Rex\"", 2, 5, false));
        this.LSTB4.push(new neededChar("Jawa", 1, 5, false));
        this.LSTB4.push(new neededChar("Scarif Rebel Pathfinder", 2, 5, false));
        this.LSTB4.push(new neededChar("Jawa Engineer", 2, 5, false));
        this.LSTB4.push(new neededChar("Pao", 1, 5, false));
        this.LSTB4.push(new neededChar("Garazeb \"Zeb\" Orrelios", 2, 5, false));
        this.LSTB4.push(new neededChar("Kanan Jarrus", 2, 5, false));
        this.LSTB4.push(new neededChar("Jawa Scavenger", 2, 5, false));
        this.LSTB4.push(new neededChar("Chief Nebit", 1, 5, false));
        this.LSTB4.push(new neededChar("Captain Han Solo", 1, 5, false));
        this.LSTB4.push(new neededChar("Aayla Secura", 2, 5, false));
        this.LSTB4.push(new neededChar("Logray", 3, 5, false));
        this.LSTB4.push(new neededChar("Paploo", 3, 5, false));
        this.LSTB4.push(new neededChar("Ugnaught", 1, 5, false));
        this.LSTB4.push(new neededChar("Rose Tico", 1, 5, false));
        this.LSTB4.push(new neededChar("Ahsoka Tano (Fulcrum)", 1, 5, false));
        this.LSTB4.push(new neededChar("Amilyn Holdo", 1, 5, false));
        this.LSTB4.push(new neededChar("Resistance Trooper", 2, 5, false));
        this.LSTB4.push(new neededChar("Coruscant Underworld Police", 1, 5, false));
        this.LSTB5.push(new neededChar("Ghost", 6, 6, true));
        this.LSTB5.push(new neededChar("Cassian's U-wing", 4, 6, true));
        this.LSTB5.push(new neededChar("Hound's Tooth", 3, 6, true));
        this.LSTB5.push(new neededChar("Lando's Millennium Falcon", 1, 6, true));
        this.LSTB5.push(new neededChar("TIE Reaper", 2, 6, true));
        this.LSTB5.push(new neededChar("Gauntlet Starfighter", 4, 6, true));
        this.LSTB5.push(new neededChar("IG-2000", 2, 6, true));
        this.LSTB5.push(new neededChar("Imperial TIE Fighter", 8, 6, true));
        this.LSTB5.push(new neededChar("Bistan's U-wing", 2, 6, true));
        this.LSTB5.push(new neededChar("Wedge Antilles's X-wing", 5, 6, true));
        this.LSTB5.push(new neededChar("Geonosian Spy's Starfighter", 1, 6, true));
        this.LSTB5.push(new neededChar("Slave I", 4, 6, true));
        this.LSTB5.push(new neededChar("TIE Advanced x1", 1, 6, true));
        this.LSTB5.push(new neededChar("Phantom II", 4, 6, true));
        this.LSTB5.push(new neededChar("Poe Dameron's X-wing", 3, 6, true));
        this.LSTB5.push(new neededChar("Xanadu Blood", 2, 6, true));
        this.LSTB5.push(new neededChar("Biggs Darklighter's X-wing", 4, 6, true));
        this.LSTB5.push(new neededChar("Scimitar", 1, 6, true));
        this.LSTB5.push(new neededChar("Clone Sergeant's ARC-170", 3, 6, true));
        this.LSTB5.push(new neededChar("Sith Fighter", 2, 6, true));
        this.LSTB5.push(new neededChar("Rex's ARC-170", 5, 6, true));
        this.LSTB5.push(new neededChar("Rey's Millennium Falcon", 2, 6, true));
        this.LSTB5.push(new neededChar("B-28 Extinction-class Bomber", 2, 6, true));
        this.LSTB5.push(new neededChar("Han's Millennium Falcon", 1, 6, true));
        this.LSTB5.push(new neededChar("Anakin's Eta-2 Starfighter", 2, 6, true));
        this.LSTB5.push(new neededChar("Ebon Hawk", 1, 6, true));
        this.LSTB5.push(new neededChar("Plo Koon's Jedi Starfighter", 3, 6, true));
        this.LSTB5.push(new neededChar("Sun Fac's Geonosian Starfighter", 1, 6, true));
        this.LSTB5.push(new neededChar("Umbaran Starfighter", 2, 6, true));
        this.LSTB5.push(new neededChar("TIE Silencer", 1, 6, true));
        this.LSTB5.push(new neededChar("First Order TIE Fighter", 2, 6, true));
        this.LSTB5.push(new neededChar("Ahsoka Tano's Jedi Starfighter", 2, 6, true));
        this.LSTB5.push(new neededChar("Jedi Consular's Starfighter", 2, 6, true));
        this.LSTB5.push(new neededChar("Geonosian Soldier's Starfighter", 1, 6, true));
        this.LSTB5.push(new neededChar("Kylo Ren's Command Shuttle", 1, 6, true));
        this.LSTB5.push(new neededChar("Qui-Gon Jinn", 3, 6, false));
        this.LSTB5.push(new neededChar("Ahsoka Tano", 5, 6, false));
        this.LSTB5.push(new neededChar("Lando Calrissian", 4, 6, false));
        this.LSTB5.push(new neededChar("Chief Chirpa", 3, 6, false));
        this.LSTB5.push(new neededChar("Young Han Solo", 3, 6, false));
        this.LSTB5.push(new neededChar("Mace Windu", 5, 6, false));
        this.LSTB5.push(new neededChar("Jedi Knight Anakin", 3, 6, false));
        this.LSTB5.push(new neededChar("Han Solo", 2, 6, false));
        this.LSTB5.push(new neededChar("Ugnaught", 2, 6, false));
        this.LSTB5.push(new neededChar("Ewok Elder", 3, 6, false));
        this.LSTB5.push(new neededChar("Young Lando Calrissian", 1, 6, false));
        this.LSTB5.push(new neededChar("Plo Koon", 3, 6, false));
        this.LSTB5.push(new neededChar("Grand Master Yoda", 3, 6, false));
        this.LSTB5.push(new neededChar("Biggs Darklighter", 3, 6, false));
        this.LSTB5.push(new neededChar("Admiral Ackbar", 5, 6, false));
        this.LSTB5.push(new neededChar("Ewok Scout", 3, 6, false));
        this.LSTB5.push(new neededChar("Vandor Chewbacca", 3, 6, false));
        this.LSTB5.push(new neededChar("Wedge Antilles", 2, 6, false));
        this.LSTB5.push(new neededChar("Paploo", 2, 6, false));
        this.LSTB5.push(new neededChar("Qi'ra", 3, 6, false));
        this.LSTB5.push(new neededChar("Barriss Offee", 2, 6, false));
        this.LSTB5.push(new neededChar("Luminara Unduli", 3, 6, false));
        this.LSTB5.push(new neededChar("Luke Skywalker (Farmboy)", 3, 6, false));
        this.LSTB5.push(new neededChar("Logray", 2, 6, false));
        this.LSTB5.push(new neededChar("L3-37", 2, 6, false));
        this.LSTB5.push(new neededChar("Stormtrooper Han", 2, 6, false));
        this.LSTB5.push(new neededChar("Jedi Consular", 3, 6, false));
        this.LSTB5.push(new neededChar("General Kenobi", 1, 6, false));
        this.LSTB5.push(new neededChar("Teebo", 3, 6, false));
        this.LSTB5.push(new neededChar("CT-21-0408 \"Echo\"", 2, 6, false));
        this.LSTB5.push(new neededChar("Wicket", 2, 6, false));
        this.LSTB5.push(new neededChar("R2-D2", 3, 6, false));
        this.LSTB5.push(new neededChar("CT-7567 \"Rex\"", 1, 6, false));
        this.LSTB5.push(new neededChar("Jedi Knight Guardian", 2, 6, false));
        this.LSTB5.push(new neededChar("CT-5555 \"Fives\"", 3, 6, false));
        this.LSTB5.push(new neededChar("Princess Leia", 4, 6, false));
        this.LSTB5.push(new neededChar("Chief Nebit", 2, 6, false));
        this.LSTB5.push(new neededChar("Hermit Yoda", 4, 6, false));
        this.LSTB5.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 4, 6, false));
        this.LSTB5.push(new neededChar("Coruscant Underworld Police", 2, 6, false));
        this.LSTB5.push(new neededChar("CC-2224 \"Cody\"", 1, 6, false));
        this.LSTB5.push(new neededChar("Jawa Scavenger", 1, 6, false));
        this.LSTB5.push(new neededChar("Rose Tico", 1, 6, false));
        this.LSTB5.push(new neededChar("Veteran Smuggler Han Solo", 4, 6, false));
        this.LSTB5.push(new neededChar("Clone Sergeant - Phase I", 3, 6, false));
        this.LSTB5.push(new neededChar("Poe Dameron", 2, 6, false));
        this.LSTB5.push(new neededChar("Ahsoka Tano (Fulcrum)", 2, 6, false));
        this.LSTB5.push(new neededChar("Jawa", 1, 6, false));
        this.LSTB5.push(new neededChar("Veteran Smuggler Chewbacca", 4, 6, false));
        this.LSTB5.push(new neededChar("Visas Marr", 1, 6, false));
        this.LSTB5.push(new neededChar("BB-8", 2, 6, false));
        this.LSTB5.push(new neededChar("Baze Malbus", 4, 6, false));
        this.LSTB5.push(new neededChar("Jawa Engineer", 2, 6, false));
        this.LSTB5.push(new neededChar("Amilyn Holdo", 1, 6, false));
        this.LSTB5.push(new neededChar("Rey (Scavenger)", 2, 6, false));
        this.LSTB5.push(new neededChar("Lobot", 1, 6, false));
        this.LSTB5.push(new neededChar("Dathcha", 1, 6, false));
        this.LSTB5.push(new neededChar("Mission Vao", 1, 6, false));
        this.LSTB5.push(new neededChar("Cassian Andor", 4, 6, false));
        this.LSTB5.push(new neededChar("Zaalbar", 1, 6, false));
        this.LSTB5.push(new neededChar("Bistan", 2, 6, false));
        this.LSTB5.push(new neededChar("K-2SO", 4, 6, false));
        this.LSTB5.push(new neededChar("T3-M4", 1, 6, false));
        this.LSTB5.push(new neededChar("Bodhi Rook", 1, 6, false));
        this.LSTB5.push(new neededChar("Chirrut Îmwe", 1, 6, false));
        this.LSTB5.push(new neededChar("Jolee Bindo", 1, 6, false));
        this.LSTB5.push(new neededChar("Scarif Rebel Pathfinder", 2, 6, false));
        this.LSTB5.push(new neededChar("Bastila Shan", 1, 6, false));
        this.LSTB5.push(new neededChar("Jyn Erso", 2, 6, false));
        this.LSTB5.push(new neededChar("C-3PO", 1, 6, false));
        this.LSTB5.push(new neededChar("Enfys Nest", 1, 6, false));
        this.LSTB5.push(new neededChar("Finn", 2, 6, false));
        this.LSTB5.push(new neededChar("Chewbacca", 1, 6, false));
        this.LSTB5.push(new neededChar("Captain Han Solo", 2, 6, false));
        this.LSTB5.push(new neededChar("Pao", 2, 6, false));
        this.LSTB5.push(new neededChar("Kit Fisto", 1, 6, false));
        this.LSTB5.push(new neededChar("Resistance Pilot", 1, 6, false));
        this.LSTB5.push(new neededChar("Hoth Rebel Soldier", 2, 6, false));
        this.LSTB5.push(new neededChar("Resistance Trooper", 1, 6, false));
        this.LSTB6.push(new neededChar("Cassian's U-wing", 1, 7, true));
        this.LSTB6.push(new neededChar("Ahsoka Tano's Jedi Starfighter", 4, 7, true));
        this.LSTB6.push(new neededChar("TIE Reaper", 5, 7, true));
        this.LSTB6.push(new neededChar("Imperial TIE Fighter", 5, 7, true));
        this.LSTB6.push(new neededChar("Slave I", 3, 7, true));
        this.LSTB6.push(new neededChar("Hound's Tooth", 2, 7, true));
        this.LSTB6.push(new neededChar("Bistan's U-wing", 2, 7, true));
        this.LSTB6.push(new neededChar("Anakin's Eta-2 Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("TIE Silencer", 3, 7, true));
        this.LSTB6.push(new neededChar("Phantom II", 2, 7, true));
        this.LSTB6.push(new neededChar("IG-2000", 1, 7, true));
        this.LSTB6.push(new neededChar("Wedge Antilles's X-wing", 3, 7, true));
        this.LSTB6.push(new neededChar("Biggs Darklighter's X-wing", 3, 7, true));
        this.LSTB6.push(new neededChar("TIE Advanced x1", 3, 7, true));
        this.LSTB6.push(new neededChar("Gauntlet Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Rex's ARC-170", 5, 7, true));
        this.LSTB6.push(new neededChar("Xanadu Blood", 1, 7, true));
        this.LSTB6.push(new neededChar("Ghost", 5, 7, true));
        this.LSTB6.push(new neededChar("Clone Sergeant's ARC-170", 4, 7, true));
        this.LSTB6.push(new neededChar("Umbaran Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Han's Millennium Falcon", 4, 7, true));
        this.LSTB6.push(new neededChar("Geonosian Spy's Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Poe Dameron's X-wing", 2, 7, true));
        this.LSTB6.push(new neededChar("Jedi Consular's Starfighter", 3, 7, true));
        this.LSTB6.push(new neededChar("Geonosian Soldier's Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Plo Koon's Jedi Starfighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Sun Fac's Geonosian Starfighter", 1, 7, true));
        this.LSTB6.push(new neededChar("Ebon Hawk", 2, 7, true));
        this.LSTB6.push(new neededChar("B-28 Extinction-class Bomber", 2, 7, true));
        this.LSTB6.push(new neededChar("First Order TIE Fighter", 1, 7, true));
        this.LSTB6.push(new neededChar("Rey's Millennium Falcon", 2, 7, true));
        this.LSTB6.push(new neededChar("First Order SF TIE Fighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Emperor's Shuttle", 1, 7, true));
        this.LSTB6.push(new neededChar("Lando's Millennium Falcon", 2, 7, true));
        this.LSTB6.push(new neededChar("Sith Fighter", 2, 7, true));
        this.LSTB6.push(new neededChar("Kylo Ren's Command Shuttle", 1, 7, true));
        this.LSTB6.push(new neededChar("Scimitar", 1, 7, true));
        this.LSTB6.push(new neededChar("Qui-Gon Jinn", 4, 7, false));
        this.LSTB6.push(new neededChar("Lando Calrissian", 6, 7, false));
        this.LSTB6.push(new neededChar("CC-2224 \"Cody\"", 2, 7, false));
        this.LSTB6.push(new neededChar("Jedi Knight Revan", 2, 7, false));
        this.LSTB6.push(new neededChar("Young Han Solo", 2, 7, false));
        this.LSTB6.push(new neededChar("Aayla Secura", 2, 7, false));
        this.LSTB6.push(new neededChar("Han Solo", 2, 7, false));
        this.LSTB6.push(new neededChar("Jedi Knight Anakin", 3, 7, false));
        this.LSTB6.push(new neededChar("Wedge Antilles", 4, 7, false));
        this.LSTB6.push(new neededChar("Zaalbar", 3, 7, false));
        this.LSTB6.push(new neededChar("Young Lando Calrissian", 2, 7, false));
        this.LSTB6.push(new neededChar("Ahsoka Tano", 2, 7, false));
        this.LSTB6.push(new neededChar("Sabine Wren", 3, 7, false));
        this.LSTB6.push(new neededChar("Kit Fisto", 2, 7, false));
        this.LSTB6.push(new neededChar("T3-M4", 3, 7, false));
        this.LSTB6.push(new neededChar("Enfys Nest", 2, 7, false));
        this.LSTB6.push(new neededChar("Grand Master Yoda", 4, 7, false));
        this.LSTB6.push(new neededChar("Mace Windu", 2, 7, false));
        this.LSTB6.push(new neededChar("Kanan Jarrus", 5, 7, false));
        this.LSTB6.push(new neededChar("Jolee Bindo", 2, 7, false));
        this.LSTB6.push(new neededChar("R2-D2", 2, 7, false));
        this.LSTB6.push(new neededChar("Barriss Offee", 4, 7, false));
        this.LSTB6.push(new neededChar("Hermit Yoda", 4, 7, false));
        this.LSTB6.push(new neededChar("Luminara Unduli", 2, 7, false));
        this.LSTB6.push(new neededChar("Luke Skywalker (Farmboy)", 2, 7, false));
        this.LSTB6.push(new neededChar("Bastila Shan", 2, 7, false));
        this.LSTB6.push(new neededChar("L3-37", 3, 7, false));
        this.LSTB6.push(new neededChar("Stormtrooper Han", 4, 7, false));
        this.LSTB6.push(new neededChar("Coruscant Underworld Police", 3, 7, false));
        this.LSTB6.push(new neededChar("C-3PO", 3, 7, false));
        this.LSTB6.push(new neededChar("General Kenobi", 2, 7, false));
        this.LSTB6.push(new neededChar("Rose Tico", 2, 7, false));
        this.LSTB6.push(new neededChar("Logray", 3, 7, false));
        this.LSTB6.push(new neededChar("Poe Dameron", 5, 7, false));
        this.LSTB6.push(new neededChar("Paploo", 1, 7, false));
        this.LSTB6.push(new neededChar("Visas Marr", 2, 7, false));
        this.LSTB6.push(new neededChar("Plo Koon", 2, 7, false));
        this.LSTB6.push(new neededChar("BB-8", 2, 7, false));
        this.LSTB6.push(new neededChar("Princess Leia", 3, 7, false));
        this.LSTB6.push(new neededChar("Wicket", 2, 7, false));
        this.LSTB6.push(new neededChar("Rey (Scavenger)", 3, 7, false));
        this.LSTB6.push(new neededChar("Obi-Wan Kenobi (Old Ben)", 1, 7, false));
        this.LSTB6.push(new neededChar("Rey (Jedi Training)", 3, 7, false));
        this.LSTB6.push(new neededChar("Amilyn Holdo", 2, 7, false));
        this.LSTB6.push(new neededChar("Admiral Ackbar", 2, 7, false));
        this.LSTB6.push(new neededChar("Veteran Smuggler Han Solo", 2, 7, false));
        this.LSTB6.push(new neededChar("Chief Nebit", 1, 7, false));
        this.LSTB6.push(new neededChar("Ahsoka Tano (Fulcrum)", 3, 7, false));
        this.LSTB6.push(new neededChar("Jawa", 1, 7, false));
        this.LSTB6.push(new neededChar("Chewbacca", 3, 7, false));
        this.LSTB6.push(new neededChar("Dathcha", 1, 7, false));
        this.LSTB6.push(new neededChar("Hoth Rebel Scout", 2, 7, false));
        this.LSTB6.push(new neededChar("Ewok Scout", 1, 7, false));
        this.LSTB6.push(new neededChar("CT-7567 \"Rex\"", 2, 7, false));
        this.LSTB6.push(new neededChar("Jawa Scavenger", 1, 7, false));
        this.LSTB6.push(new neededChar("Hoth Rebel Soldier", 2, 7, false));
        this.LSTB6.push(new neededChar("Ezra Bridger", 4, 7, false));
        this.LSTB6.push(new neededChar("Commander Luke Skywalker", 3, 7, false));
        this.LSTB6.push(new neededChar("Finn", 2, 7, false));
        this.LSTB6.push(new neededChar("Captain Han Solo", 3, 7, false));
        this.LSTB6.push(new neededChar("Chopper", 2, 7, false));
        this.LSTB6.push(new neededChar("Hera Syndulla", 1, 7, false));
        this.LSTB6.push(new neededChar("Teebo", 1, 7, false));
        this.LSTB6.push(new neededChar("Ugnaught", 2, 7, false));
        this.LSTB6.push(new neededChar("Garazeb \"Zeb\" Orrelios", 2, 7, false));
        this.LSTB6.push(new neededChar("Biggs Darklighter", 1, 7, false));
        this.LSTB6.push(new neededChar("Ima-Gun Di", 2, 7, false));
        this.LSTB6.push(new neededChar("Lobot", 2, 7, false));
        this.LSTB6.push(new neededChar("Eeth Koth", 2, 7, false));
        this.LSTB6.push(new neededChar("CT-21-0408 \"Echo\"", 1, 7, false));
        this.LSTB6.push(new neededChar("Jedi Knight Guardian", 1, 7, false));
        this.LSTB6.push(new neededChar("Juhani", 3, 7, false));
        this.LSTB6.push(new neededChar("Carth Onasi", 2, 7, false));
        this.LSTB6.push(new neededChar("Veteran Smuggler Chewbacca", 1, 7, false));
        this.LSTB6.push(new neededChar("Mission Vao", 1, 7, false));
        //NEUE Platoons ENDE
        this.ActualPhase = this.DSTB1;
        this.loadTable();
    }
    TBPlatoonComponent.prototype.loadTable = function () {
        for (var i = 0; i < this.ActualPhase.length; i++) {
            if (!this.ActualPhase[i].isShip) {
                var gildencount = this.gildenService.findCharByNameAndStar(this.ActualPhase[i].name, this.ActualPhase[i].sterne);
                if (gildencount != null) {
                    this.ActualPhase[i].gildenbesitz = gildencount.length;
                    this.ActualPhase[i].differenz = (this.ActualPhase[i].benoetigt - gildencount.length);
                }
            }
            else {
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
    };
    TBPlatoonComponent.prototype.showMembersWhoHave = function (char) {
        if (char.isShip) {
            var allChars = this.gildenService.findShipByNameAndStar(char.name, char.sterne);
        }
        else {
            var allChars = this.gildenService.findCharByNameAndStar(char.name, char.sterne);
        }
        var allCharString = "";
        for (var y = 0; y < allChars.length; y++) {
            allCharString += '\n\r' + allChars[y].Besitzer;
        }
        alert(allCharString);
    };
    TBPlatoonComponent.prototype.compareNeeded = function (a, b) {
        if (a.differenz > b.differenz)
            return -1;
        if (a.differenz < b.differenz)
            return 1;
        return 0;
    };
    TBPlatoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'platoontool',
            template: __webpack_require__(/*! raw-loader!./platoontool.html */ "./node_modules/raw-loader/index.js!./src/app/TBPlatoons/platoontool.html"),
            styles: [__webpack_require__(/*! ./platoontool.css */ "./src/app/TBPlatoons/platoontool.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], TBPlatoonComponent);
    return TBPlatoonComponent;
}());

var neededChar = /** @class */ (function () {
    function neededChar(name, benoetigt, sterne, isShip) {
        this.gildenbesitz = 0;
        this.differenz = 0;
        this.isShip = false;
        this.name = name;
        this.benoetigt = benoetigt;
        this.sterne = sterne;
        this.isShip = isShip;
    }
    return neededChar;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _settings_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/setting */ "./src/app/settings/setting.ts");
/* harmony import */ var _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squadSearch/squadsearch */ "./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TBPlatoons/platoontool */ "./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RaidPlanner/raidplanner */ "./src/app/RaidPlanner/raidplanner.ts");
/* harmony import */ var _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arenaTeams/arenaTeams */ "./src/app/arenaTeams/arenaTeams.ts");
/* harmony import */ var _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newCharSearch/newCharSearch */ "./src/app/newCharSearch/newCharSearch.ts");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/events */ "./src/app/events/events.ts");
/* harmony import */ var _comparer_comparer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comparer/comparer */ "./src/app/comparer/comparer.ts");
/* harmony import */ var _fleetTeams_fleetTeams__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fleetTeams/fleetTeams */ "./src/app/fleetTeams/fleetTeams.ts");
/* harmony import */ var _shipSearch_shipSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shipSearch/shipSearch */ "./src/app/shipSearch/shipSearch.ts");
/* harmony import */ var _MemberTracking_membertracking__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MemberTracking/membertracking */ "./src/app/MemberTracking/membertracking.ts");
/* harmony import */ var _zetas_zetas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zetas/zetas */ "./src/app/zetas/zetas.ts");
/* harmony import */ var _skInternal_skinternal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./skInternal/skinternal */ "./src/app/skInternal/skinternal.ts");
/* harmony import */ var _guildcharts_guildcharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guildcharts/guildcharts */ "./src/app/guildcharts/guildcharts.ts");


















var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'settings',
        component: _settings_setting__WEBPACK_IMPORTED_MODULE_4__["SettingComponent"]
    },
    {
        path: 'squadsearch',
        component: _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_5__["SquadSearchComponent"]
    },
    {
        path: 'platoontool',
        component: _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_6__["TBPlatoonComponent"]
    },
    {
        path: 'raidplanner',
        component: _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_7__["RaidPlannerComponent"]
    },
    {
        path: 'arenateams',
        component: _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_8__["ArenaTeamsComponent"]
    },
    {
        path: 'newCharSearch',
        component: _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_9__["newCharSearchComponent"]
    },
    {
        path: 'comparer',
        component: _comparer_comparer__WEBPACK_IMPORTED_MODULE_11__["ComparerComponent"]
    },
    {
        path: 'events',
        component: _events_events__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"]
    },
    {
        path: 'fleetarena',
        component: _fleetTeams_fleetTeams__WEBPACK_IMPORTED_MODULE_12__["FleetTeamsComponent"]
    },
    {
        path: 'shipsearch',
        component: _shipSearch_shipSearch__WEBPACK_IMPORTED_MODULE_13__["ShipSearchComponent"]
    },
    {
        path: 'membertracking',
        component: _MemberTracking_membertracking__WEBPACK_IMPORTED_MODULE_14__["MemberTrackingComponent"]
    },
    {
        path: 'zetas',
        component: _zetas_zetas__WEBPACK_IMPORTED_MODULE_15__["ZetasComponent"]
    },
    {
        path: 'skinternal',
        component: _skInternal_skinternal__WEBPACK_IMPORTED_MODULE_16__["SKInternalComponent"]
    },
    {
        path: 'guildcharts',
        component: _guildcharts_guildcharts__WEBPACK_IMPORTED_MODULE_17__["GuildchartsComponent"]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n      background-color: #111;\r\n    }\r\n\r\n/* The side navigation menu */\r\n\r\n.sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 0; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Stay on top */\r\n  top: 0; /* Stay at the top */\r\n  left: 0;\r\n  background-color: #111; /* Black*/\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  transition: 0.2s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n\r\n.sidenav a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n/* Position and style the close button (top right corner) */\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n\r\n#main {\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUU7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztBQUVFLG1EQUFtRDs7QUFDbkQ7TUFDRSxzQkFBc0I7SUFDeEI7O0FBR0osNkJBQTZCOztBQUM3QjtFQUNFLFlBQVksRUFBRSxxQkFBcUI7RUFDbkMsUUFBUSxFQUFFLDBDQUEwQztFQUNwRCxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFdBQVcsRUFBRSxnQkFBZ0I7RUFDN0IsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QixPQUFPO0VBQ1Asc0JBQXNCLEVBQUUsU0FBUztFQUNqQyxrQkFBa0IsRUFBRSw4QkFBOEI7RUFDbEQsaUJBQWlCLEVBQUUsb0NBQW9DO0VBQ3ZELGdCQUFnQixFQUFFLHlEQUF5RDtBQUM3RTs7QUFFRSw4QkFBOEI7O0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUUsaUVBQWlFOztBQUNqRTtNQUNFLGNBQWM7SUFDaEI7O0FBRUYsMkRBQTJEOztBQUMzRDtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUYsc0hBQXNIOztBQUN0SDtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUEsZ0lBQWdJOztBQUNoSTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztJQUVFO01BQ0UsZUFBZTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiAgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gICAgLyogQ2hhbmdlIHRoZSBsaW5rIGNvbG9yIHRvICMxMTEgKGJsYWNrKSBvbiBob3ZlciAqL1xyXG4gICAgbGkgYTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7IC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cclxuICB3aWR0aDogMDsgLyogMCB3aWR0aCAtIGNoYW5nZSB0aGlzIHdpdGggSmF2YVNjcmlwdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDExOyAvKiBTdGF5IG9uIHRvcCAqL1xyXG4gIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBCbGFjayovXHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIFBsYWNlIGNvbnRlbnQgNjBweCBmcm9tIHRoZSB0b3AgKi9cclxuICB0cmFuc2l0aW9uOiAwLjJzOyAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXHJcbn1cclxuXHJcbiAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuXHJcbiAgICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cclxuICAgIC5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIH1cclxuXHJcbiAgLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXHJcbiAgLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuLyogU3R5bGUgcGFnZSBjb250ZW50IC0gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gcHVzaCB0aGUgcGFnZSBjb250ZW50IHRvIHRoZSByaWdodCB3aGVuIHlvdSBvcGVuIHRoZSBzaWRlIG5hdmlnYXRpb24gKi9cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlbmF2IGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/gildenService */ "./src/app/services/gildenService.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.title = 'SWGOH-Midi';
        this.settings = this.settingsService.getSettings();
        this.gildenServiceHere = gildenService;
    }
    /* Set the width of the side navigation to 250px */
    AppComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_3__["gildenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _settings_setting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/setting */ "./src/app/settings/setting.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./squadSearch/squadsearch */ "./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TBPlatoons/platoontool */ "./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RaidPlanner/raidplanner */ "./src/app/RaidPlanner/raidplanner.ts");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./arenaTeams/arenaTeams */ "./src/app/arenaTeams/arenaTeams.ts");
/* harmony import */ var _pipes_charpipe_gearLink_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/charpipe/gearLink.pipe */ "./src/app/pipes/charpipe/gearLink.pipe.ts");
/* harmony import */ var _pipes_charpipe_charName_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/charpipe/charName.pipe */ "./src/app/pipes/charpipe/charName.pipe.ts");
/* harmony import */ var _pipes_charpipe_charLink_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/charpipe/charLink.pipe */ "./src/app/pipes/charpipe/charLink.pipe.ts");
/* harmony import */ var _pipes_charpipe_charGear_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/charpipe/charGear.pipe */ "./src/app/pipes/charpipe/charGear.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModSetName_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/modpipes/ModSetName.pipe */ "./src/app/pipes/modpipes/ModSetName.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModStatName_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/modpipes/ModStatName.pipe */ "./src/app/pipes/modpipes/ModStatName.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModStatValue_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/modpipes/ModStatValue.pipe */ "./src/app/pipes/modpipes/ModStatValue.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModSlotName_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/modpipes/ModSlotName.pipe */ "./src/app/pipes/modpipes/ModSlotName.pipe.ts");
/* harmony import */ var _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./newCharSearch/newCharSearch */ "./src/app/newCharSearch/newCharSearch.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _pipes_columnwidth_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/columnwidth.pipe */ "./src/app/pipes/columnwidth.pipe.ts");
/* harmony import */ var _pipes_columntype_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/columntype.pipe */ "./src/app/pipes/columntype.pipe.ts");
/* harmony import */ var _pipes_columnfixed_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/columnfixed.pipe */ "./src/app/pipes/columnfixed.pipe.ts");
/* harmony import */ var _pipes_language_language_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/language/language.pipe */ "./src/app/pipes/language/language.pipe.ts");
/* harmony import */ var _events_events__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./events/events */ "./src/app/events/events.ts");
/* harmony import */ var _pipes_events_eventShow_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/events/eventShow.pipe */ "./src/app/pipes/events/eventShow.pipe.ts");
/* harmony import */ var _comparer_comparer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./comparer/comparer */ "./src/app/comparer/comparer.ts");
/* harmony import */ var _pipes_MapToIterable_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pipes/MapToIterable.pipe */ "./src/app/pipes/MapToIterable.pipe.ts");
/* harmony import */ var _pipes_charpipe_squadPower_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/charpipe/squadPower.pipe */ "./src/app/pipes/charpipe/squadPower.pipe.ts");
/* harmony import */ var _fleetTeams_fleetTeams__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fleetTeams/fleetTeams */ "./src/app/fleetTeams/fleetTeams.ts");
/* harmony import */ var _pipes_charpipe_fleetlink_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/charpipe/fleetlink.pipe */ "./src/app/pipes/charpipe/fleetlink.pipe.ts");
/* harmony import */ var _shipSearch_shipSearch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shipSearch/shipSearch */ "./src/app/shipSearch/shipSearch.ts");
/* harmony import */ var _MemberTracking_membertracking__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./MemberTracking/membertracking */ "./src/app/MemberTracking/membertracking.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _pipes_squadToString_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/squadToString.pipe */ "./src/app/pipes/squadToString.pipe.ts");
/* harmony import */ var _pipes_events_eventName_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pipes/events/eventName.pipe */ "./src/app/pipes/events/eventName.pipe.ts");
/* harmony import */ var _zetas_zetas__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./zetas/zetas */ "./src/app/zetas/zetas.ts");
/* harmony import */ var _pipes_SkillMemberNames_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipes/SkillMemberNames.pipe */ "./src/app/pipes/SkillMemberNames.pipe.ts");
/* harmony import */ var _skInternal_skinternal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./skInternal/skinternal */ "./src/app/skInternal/skinternal.ts");
/* harmony import */ var _guildcharts_guildcharts__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./guildcharts/guildcharts */ "./src/app/guildcharts/guildcharts.ts");
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _settings_setting__WEBPACK_IMPORTED_MODULE_8__["SettingComponent"],
                _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_13__["SquadSearchComponent"],
                _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_14__["TBPlatoonComponent"],
                _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_15__["RaidPlannerComponent"],
                _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_17__["ArenaTeamsComponent"],
                _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_26__["newCharSearchComponent"],
                _events_events__WEBPACK_IMPORTED_MODULE_32__["EventsComponent"],
                _comparer_comparer__WEBPACK_IMPORTED_MODULE_34__["ComparerComponent"],
                _fleetTeams_fleetTeams__WEBPACK_IMPORTED_MODULE_37__["FleetTeamsComponent"],
                _shipSearch_shipSearch__WEBPACK_IMPORTED_MODULE_39__["ShipSearchComponent"],
                _MemberTracking_membertracking__WEBPACK_IMPORTED_MODULE_40__["MemberTrackingComponent"],
                _zetas_zetas__WEBPACK_IMPORTED_MODULE_44__["ZetasComponent"],
                _skInternal_skinternal__WEBPACK_IMPORTED_MODULE_46__["SKInternalComponent"],
                _guildcharts_guildcharts__WEBPACK_IMPORTED_MODULE_47__["GuildchartsComponent"],
                //Pipes here
                _pipes_charpipe_gearLink_pipe__WEBPACK_IMPORTED_MODULE_18__["gearLinkPipe"],
                _pipes_charpipe_charName_pipe__WEBPACK_IMPORTED_MODULE_19__["CharNamePipe"],
                _pipes_charpipe_charLink_pipe__WEBPACK_IMPORTED_MODULE_20__["CharImageLinkPipe"],
                _pipes_charpipe_charGear_pipe__WEBPACK_IMPORTED_MODULE_21__["CharGearPipe"],
                _pipes_modpipes_ModSetName_pipe__WEBPACK_IMPORTED_MODULE_22__["ModSetNamePipe"],
                _pipes_modpipes_ModStatName_pipe__WEBPACK_IMPORTED_MODULE_23__["ModStatNamePipe"],
                _pipes_modpipes_ModStatValue_pipe__WEBPACK_IMPORTED_MODULE_24__["ModStatValuePipe"],
                _pipes_modpipes_ModSlotName_pipe__WEBPACK_IMPORTED_MODULE_25__["ModSlotNamePipe"],
                _pipes_columnwidth_pipe__WEBPACK_IMPORTED_MODULE_28__["ColumnWidthPipe"],
                _pipes_columntype_pipe__WEBPACK_IMPORTED_MODULE_29__["ColumnTypePipe"],
                _pipes_columnfixed_pipe__WEBPACK_IMPORTED_MODULE_30__["ColumnFixedPipe"],
                _pipes_language_language_pipe__WEBPACK_IMPORTED_MODULE_31__["LanguagePipe"],
                _pipes_events_eventShow_pipe__WEBPACK_IMPORTED_MODULE_33__["EventShowPipe"],
                _pipes_charpipe_squadPower_pipe__WEBPACK_IMPORTED_MODULE_36__["SquadPowerPipe"],
                _pipes_MapToIterable_pipe__WEBPACK_IMPORTED_MODULE_35__["MapToIterable"],
                _pipes_charpipe_fleetlink_pipe__WEBPACK_IMPORTED_MODULE_38__["FleetImageLinkPipe"],
                _pipes_squadToString_pipe__WEBPACK_IMPORTED_MODULE_42__["SquadToStringPipe"],
                _pipes_events_eventName_pipe__WEBPACK_IMPORTED_MODULE_43__["EventNamePipe"],
                _pipes_SkillMemberNames_pipe__WEBPACK_IMPORTED_MODULE_45__["SkillMemberNames"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientJsonpModule"],
                ng_lz_string__WEBPACK_IMPORTED_MODULE_16__["LZStringModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxTextAreaModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxSelectBoxModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxTooltipModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["TooltipModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxChartModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxPieChartModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_27__["DxNumberBoxModule"]
            ],
            providers: [_services_settingsService__WEBPACK_IMPORTED_MODULE_10__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_11__["gildenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], ng_lz_string__WEBPACK_IMPORTED_MODULE_16__["LZStringService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/arenaTeams/arenaTeams.css":
/*!*******************************************!*\
  !*** ./src/app/arenaTeams/arenaTeams.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlbmFUZWFtcy9hcmVuYVRlYW1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNC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O0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FyZW5hVGVhbXMvYXJlbmFUZWFtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYXJlbnRPZkltYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnN0ZXJuZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGVybjEge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4yIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4zIHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4uc3Rlcm40IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Rlcm41IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiA0NHB4O1xyXG59XHJcblxyXG4uc3Rlcm42IHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNTdweDtcclxufVxyXG5cclxuLnN0ZXJuNyB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDY3cHg7XHJcbn1cclxuXHJcbi5tYWluY2hhckZpZWxkc2V0e1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5nZWFySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbn1cclxuXHJcbi5jaGFySW1hZ2Uge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogLTI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG59XHJcblxyXG4uY2hhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDI1NztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2hhci1nZWFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXZGb3JDaGFyIHtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMTZweCAzMnB4OyovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/arenaTeams/arenaTeams.ts":
/*!******************************************!*\
  !*** ./src/app/arenaTeams/arenaTeams.ts ***!
  \******************************************/
/*! exports provided: ArenaTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArenaTeamsComponent", function() { return ArenaTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var ArenaTeamsComponent = /** @class */ (function () {
    function ArenaTeamsComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.showMods = new Array();
        this.AllCharTeams = gildenService.getAllCharArenaTeams();
        this.AllCharTeams.sort(function (a, b) { return a.rang - b.rang; });
    }
    ArenaTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'arenaTeams',
            template: __webpack_require__(/*! raw-loader!./arenaTeams.html */ "./node_modules/raw-loader/index.js!./src/app/arenaTeams/arenaTeams.html"),
            styles: [__webpack_require__(/*! ./arenaTeams.css */ "./src/app/arenaTeams/arenaTeams.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ArenaTeamsComponent);
    return ArenaTeamsComponent;
}());



/***/ }),

/***/ "./src/app/comparer/comparer.css":
/*!***************************************!*\
  !*** ./src/app/comparer/comparer.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -13px;\r\n  left: -24px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyZXIvY29tcGFyZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztBQUNYOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNC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bEMsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcGFyZXIvY29tcGFyZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFyZW50T2ZJbWFnZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zdGVybmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3Rlcm4xIHtcclxuICB0b3A6IDI1cHg7XHJcbiAgbGVmdDogLTZweDtcclxufVxyXG5cclxuLnN0ZXJuMiB7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDZweDtcclxufVxyXG5cclxuLnN0ZXJuMyB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMTdweDtcclxufVxyXG5cclxuLnN0ZXJuNCB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLnN0ZXJuNSB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogNDRweDtcclxufVxyXG5cclxuLnN0ZXJuNiB7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDU3cHg7XHJcbn1cclxuXHJcbi5zdGVybjcge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiA2N3B4O1xyXG59XHJcblxyXG4ubWFpbmNoYXJGaWVsZHNldHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IC0yNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA2NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKnBhZGRpbmc6IDE2cHggMzJweDsqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvKm1hcmdpbjogNHB4IDJweDsqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuXHJcbnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIGJvcmRlcjogMDtcclxuICB0b3A6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTMwNHB4O1xyXG4gIGxlZnQ6IC0zNTBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/comparer/comparer.ts":
/*!**************************************!*\
  !*** ./src/app/comparer/comparer.ts ***!
  \**************************************/
/*! exports provided: ComparerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparerComponent", function() { return ComparerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ComparerComponent = /** @class */ (function () {
    function ComparerComponent(http, GildenService) {
        this.http = http;
        this.GildenService = GildenService;
        this.urlToBaseApi = "https://crinolo-swgoh.glitch.me/baseStats/api/";
    }
    ComparerComponent.prototype.onValueChanged = function (charSelectBox, MemberSelectBoxA, MemberSelectBoxB) {
        console.log('value changed');
        if (MemberSelectBoxA.value != null && MemberSelectBoxB.value != null && charSelectBox.value != null && MemberSelectBoxA.value.nameKey != MemberSelectBoxB.value.nameKey) {
            var charA = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.nameKey, MemberSelectBoxA.value);
            var charB = this.GildenService.getCharByNameAndMemberExact(charSelectBox.value.nameKey, MemberSelectBoxB.value);
            if (charA != null)
                this.loadChar("A", charA);
            if (charB != null)
                this.loadChar("B", charB);
        }
    };
    ComparerComponent.prototype.loadChar = function (AorB, char) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('stars', char.rarity.toString());
        params = params.append('level', char.level.toString());
        params = params.append('gearLevel', char.gear.toString());
        var equippmentAdded = "";
        for (var i = 0; i < char.equipped.length; i++) {
            equippmentAdded += char.equipped[i].equipmentId;
            if (i + 1 < char.equipped.length)
                equippmentAdded += ",";
        }
        if (equippmentAdded != "")
            params = params.append('gear', equippmentAdded);
        this.http.get(this.urlToBaseApi + char.defId, { params: params })
            .subscribe(function (data) {
            if (AorB == "A") {
                _this.charCompletedA = data;
                console.log(_this.charCompletedA);
                _this.calculateTotalValues("A", char);
            }
            else {
                _this.charCompletedB = data;
                console.log(_this.charCompletedB);
                _this.calculateTotalValues("B", char);
            }
        });
    };
    ComparerComponent.prototype.calculateTotalValues = function (AorB, char) {
        var charData = null;
        console.log(AorB);
        if (AorB == "A") {
            charData = this.charCompletedA;
        }
        else {
            charData = this.charCompletedB;
        }
        var modValuesTotal = {};
        var modSetsTotal = {};
        console.log("mods", char.mods);
        for (var i = 0; i < char.mods.length; i++) {
            var primaryType = char.mods[i].primaryStat.unitStat;
            var primaryBonusValue = Number(char.mods[i].primaryStat.value);
            var secondaryType_1 = char.mods[i].secondaryStat[0].unitStat;
            var secondaryType_2 = char.mods[i].secondaryStat[1].unitStat;
            var secondaryType_3 = char.mods[i].secondaryStat[2].unitStat;
            var secondaryType_4 = char.mods[i].secondaryStat[3].unitStat;
            var secondaryValue_1 = Number(char.mods[i].secondaryStat[0].value);
            var secondaryValue_2 = Number(char.mods[i].secondaryStat[1].value);
            ;
            var secondaryValue_3 = Number(char.mods[i].secondaryStat[2].value);
            ;
            var secondaryValue_4 = Number(char.mods[i].secondaryStat[3].value);
            ;
            if (modValuesTotal[primaryType] == null)
                modValuesTotal[primaryType] = 0;
            if (modValuesTotal[secondaryType_1] == null)
                modValuesTotal[secondaryType_1] = 0;
            if (modValuesTotal[secondaryType_2] == null)
                modValuesTotal[secondaryType_2] = 0;
            if (modValuesTotal[secondaryType_3] == null)
                modValuesTotal[secondaryType_3] = 0;
            if (modValuesTotal[secondaryType_4] == null)
                modValuesTotal[secondaryType_4] = 0;
            modValuesTotal[primaryType] += primaryBonusValue;
            modValuesTotal[secondaryType_1] += secondaryValue_1;
            modValuesTotal[secondaryType_2] += secondaryValue_2;
            modValuesTotal[secondaryType_3] += secondaryValue_3;
            modValuesTotal[secondaryType_4] += secondaryValue_4;
            if (modSetsTotal[char.mods[i].set] == null) {
                modSetsTotal[char.mods[i].set] = 1;
            }
            else {
                modSetsTotal[char.mods[i].set] += 1;
            }
        }
        console.log("modSetsTotal", modSetsTotal);
        console.log("modValuesTotal", modValuesTotal);
        var _loop_1 = function (key) {
            ModSetNow = this_1.GildenService.ModSets.find(function (modset) { return modset.id == key; });
            if (ModSetNow != null) {
                if (ModSetNow.setCount <= modSetsTotal[key]) {
                    if (charData.total[this_1.mapKeyOfModStat(ModSetNow.nameKey)] != null) {
                        console.log(charData.total[this_1.mapKeyOfModStat(ModSetNow.nameKey)]);
                        charData.total[this_1.mapKeyOfModStat(ModSetNow.nameKey)] = Number(charData.total[this_1.mapKeyOfModStat(ModSetNow.nameKey)]) + ((((Number(ModSetNow.maxLevelBonus.stat.statValueDecimal)) / 100) * 2) / 100) * Number(charData.base[this_1.mapKeyOfModStat(ModSetNow.nameKey)]);
                        console.log(charData.total[this_1.mapKeyOfModStat(ModSetNow.nameKey)]);
                    }
                    else {
                        console.log("cant calculate modset ", ModSetNow);
                    }
                }
            }
        };
        var this_1 = this, ModSetNow;
        for (var key in modSetsTotal) {
            _loop_1(key);
        }
        for (var key in modValuesTotal) {
            var value = modValuesTotal[key];
            key = this.mapKeyOfModStat(key);
            if (key == 'None')
                continue;
            if (key.indexOf('%') < 0) {
                if (charData.total[key] != null) {
                    charData.total[key] += value;
                }
                else {
                    switch (key) {
                        case "Critical Chance":
                            charData.total["Physical Critical %"] = (Number(charData.total["Physical Critical %"].replace("%", "")) + value).toFixed(2) + "%";
                            charData.total["Special Critical %"] = (Number(charData.total["Special Critical %"].replace("%", "")) + value).toFixed(2) + "%";
                            break;
                        case "Critical Damage":
                            charData.total["Physical Critical Rating"] += value;
                            charData.total["Special Critical Rating"] += value;
                            break;
                        case "Offense":
                            charData.total["Physical Damage"] += value;
                            charData.total["Special Damage"] += value;
                            break;
                        default:
                            console.log("Konnte nicht berechnen : ", key, value.toString());
                            break;
                    }
                }
            }
            else {
                var keyWithoutPercent = key.substr(0, key.length - 2);
                if (charData.total[keyWithoutPercent] != null) {
                    charData.total[keyWithoutPercent] += (charData.base[keyWithoutPercent] * (value / 100));
                }
                else {
                    switch (keyWithoutPercent) {
                        case "Offense":
                            charData.total["Physical Damage"] = Number(charData.total["Physical Damage"]) + (charData.base["Physical Damage"] * (value / 100));
                            charData.total["Special Damage"] = Number(charData.total["Special Damage"]) + (charData.base["Special Damage"] * (value / 100));
                            break;
                        default:
                            console.log("Konnte nicht berechnen : ", key, value.toString());
                            break;
                    }
                }
            }
        }
    };
    ComparerComponent.prototype.mapKeyOfModStat = function (value) {
        switch (value) {
            case "UNITSTATOFFENSEPERCENTADDITIVE":
                return "Offense %";
            case "UNITSTATOFFENSE":
                return "Offense";
            case "UNITSTATACCURACY":
                return "Accuracy";
            case "UNITSTATSPEED":
                return "Speed";
            case "UNITSTATRESISTANCE":
                return "Resistance";
            case "UNITSTATMAXHEALTH":
                return "Health";
            case "UNITSTATMAXHEALTHPERCENTADDITIVE":
                return "Health %";
            case "UNITSTATDEFENSE":
                return "Health";
            case "UNITSTATMAXHEALTH":
                return "Defense";
            case "UNITSTATDEFENSEPERCENTADDITIVE":
                return "Defense %";
            case "UNITSTATCRITICALCHANCEPERCENTADDITIVE":
                return "Critical Chance";
            case "UNITSTATMAXSHIELDPERCENTADDITIVE":
                return "Protection %";
            case "UNITSTATCRITICALDAMAGE":
                return "Critical Damage";
            case "UNITSTATMAXSHIELD":
                return "Protection";
            case "UNITSTATEVASIONNEGATEPERCENTADDITIVE":
                return "Evasion %";
            case "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE":
                return "Critical Avoidance %";
            case "STATMODSETBONUS_SETBONUSSTAT_RESISTANCE_NAME":
                return "Critical";
            case "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE":
                return "Resistance";
            case "STATMODSETBONUS_SETBONUSSTAT_OFFENSEPERCENTADDITIVE_NAME":
                return "Offense";
            case "STATMODSETBONUS_SETBONUSSTAT_DEFENSEPERCENTADDITIVE_NAME":
                return "Defense";
            case "STATMODSETBONUS_SETBONUSSTAT_MAXHEALTHPERCENTADDITIVE_NAME":
                return "Health";
            case "STATMODSETBONUS_SETBONUSSTAT_ACCURACY_NAME":
                return "Accuracy";
            case "STATMODSETBONUS_SETBONUSSTAT_SPEEDPERCENTADDITIVE_NAME":
                return "Speed";
            case "STATMODSETBONUS_SETBONUSSTAT_CRITICALCHANCEPERCENTADDITIVE_NAME":
                return "Critical Chance";
            case "STATMODSETBONUS_SETBONUSSTAT_CRITICALDAMAGE_NAME":
                return "Critical Damage";
            default:
                return value;
        }
    };
    ComparerComponent.prototype.getModStatName = function (value) {
        var ModStatsNow = this.GildenService.ModStats[value];
        if (ModStatsNow != null) {
            return ModStatsNow;
        }
        return value.toString();
    };
    ComparerComponent.prototype.getModStatValue = function (valueAsString, modStatName) {
        var value = Number(valueAsString.replace("%", "").replace("+", ""));
        switch (modStatName) {
            case "Speed":
                return (value / 100000000);
            case "Potency":
                return (value / 1000000);
            case "Health":
                return (value / 100000000);
            case "Offense %":
                return (value / 1000000);
            case "Critical Chance":
                return (value / 1000000);
            case "Health %":
                return (value / 1000000);
            case "Defense %":
                return (value / 1000000);
            case "Protection %":
                return (value / 1000000);
            case "Critical Damage":
                return (value / 1000000);
            case "Offense":
                return (value / 100000000);
            case "Protection":
                return (value / 100000000);
            case "Tenacity":
                return (value / 1000000);
            case "Defense":
                return (value / 100000000);
            case "Critical Avoidance":
                return (value / 10000000);
            case "Accuracy":
                return (value / 1000000);
            default:
                return value;
        }
    };
    ComparerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'comparer',
            template: __webpack_require__(/*! raw-loader!./comparer.html */ "./node_modules/raw-loader/index.js!./src/app/comparer/comparer.html"),
            styles: [__webpack_require__(/*! ./comparer.css */ "./src/app/comparer/comparer.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ComparerComponent);
    return ComparerComponent;
}());



/***/ }),

/***/ "./src/app/events/events.css":
/*!***********************************!*\
  !*** ./src/app/events/events.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -13px;\r\n  left: -24px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0FBQ1g7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFD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QUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uc3Rlcm5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0ZXJuMSB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IC02cHg7XHJcbn1cclxuXHJcbi5zdGVybjIge1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2cHg7XHJcbn1cclxuXHJcbi5zdGVybjMge1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbn1cclxuXHJcbi5zdGVybjQge1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zdGVybjUge1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5zdGVybjYge1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA1N3B4O1xyXG59XHJcblxyXG4uc3Rlcm43IHtcclxuICB0b3A6IDI1cHg7XHJcbiAgbGVmdDogNjdweDtcclxufVxyXG5cclxuLm1haW5jaGFyRmllbGRzZXR7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG5cclxuLmdlYXJJbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxufVxyXG5cclxuLmNoYXJJbWFnZSB7XHJcbiAgei1pbmRleDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTNweDtcclxuICBsZWZ0OiAtMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbn1cclxuXHJcbi5jaGFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY0MjU3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5jaGFyLWdlYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY2MDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHRvcDogNjVweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmRpdkZvckNoYXIge1xyXG4gIHdpZHRoOiA1OHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNmZmO1xyXG4gIGJvcmRlcjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MnB4O1xyXG4gIGxlZnQ6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NUZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MnB4O1xyXG4gIGxlZnQ6IDIzcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLypwYWRkaW5nOiAxNnB4IDMycHg7Ki9cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLyptYXJnaW46IDRweCAycHg7Ki9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDExOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXHJcbn1cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiAgLmNsb3NlOmhvdmVyLFxyXG4gIC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG59XHJcblxyXG5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICBib3JkZXI6IDA7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zMDRweDtcclxuICBsZWZ0OiAtMzUwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGExIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/events/events.ts":
/*!**********************************!*\
  !*** ./src/app/events/events.ts ***!
  \**********************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");



var EventsComponent = /** @class */ (function () {
    function EventsComponent(GildenService) {
        this.GildenService = GildenService;
        GildenService.loginEventToSWGOHHelp();
    }
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'events',
            template: __webpack_require__(/*! raw-loader!./events.html */ "./node_modules/raw-loader/index.js!./src/app/events/events.html"),
            styles: [__webpack_require__(/*! ./events.css */ "./src/app/events/events.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/fleetTeams/fleetTeams.css":
/*!*******************************************!*\
  !*** ./src/app/fleetTeams/fleetTeams.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -78px;\r\n  left: -88px;\r\n  border-radius: 50%;\r\n  transform: scale(0.2, 0.2);\r\n  -ms-transform: scale(0.2, 0.2);\r\n  -webkit-transform: scale(0.2, 0.2);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxlZXRUZWFtcy9mbGVldFRlYW1zLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNC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O0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZsZWV0VGVhbXMvZmxlZXRUZWFtcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYXJlbnRPZkltYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnN0ZXJuZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGVybjEge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4yIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4zIHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4uc3Rlcm40IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Rlcm41IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiA0NHB4O1xyXG59XHJcblxyXG4uc3Rlcm42IHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNTdweDtcclxufVxyXG5cclxuLnN0ZXJuNyB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDY3cHg7XHJcbn1cclxuXHJcbi5tYWluY2hhckZpZWxkc2V0e1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5nZWFySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbn1cclxuXHJcbi5jaGFySW1hZ2Uge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTc4cHg7XHJcbiAgbGVmdDogLTg4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMiwgMC4yKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xyXG59XHJcblxyXG4uY2hhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDI1NztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2hhci1nZWFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXZGb3JDaGFyIHtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMTZweCAzMnB4OyovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/fleetTeams/fleetTeams.ts":
/*!******************************************!*\
  !*** ./src/app/fleetTeams/fleetTeams.ts ***!
  \******************************************/
/*! exports provided: FleetTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleetTeamsComponent", function() { return FleetTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var FleetTeamsComponent = /** @class */ (function () {
    function FleetTeamsComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.showMods = new Array();
        this.AllFleetTeams = gildenService.getAllFleetArenaTeams();
        this.AllFleetTeams.sort(function (a, b) { return a.rang - b.rang; });
    }
    FleetTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fleetTeams',
            template: __webpack_require__(/*! raw-loader!./fleetTeams.html */ "./node_modules/raw-loader/index.js!./src/app/fleetTeams/fleetTeams.html"),
            styles: [__webpack_require__(/*! ./fleetTeams.css */ "./src/app/fleetTeams/fleetTeams.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], FleetTeamsComponent);
    return FleetTeamsComponent;
}());



/***/ }),

/***/ "./src/app/guildcharts/guildcharts.css":
/*!*********************************************!*\
  !*** ./src/app/guildcharts/guildcharts.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpbGRjaGFydHMvZ3VpbGRjaGFydHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVB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Q1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2d1aWxkY2hhcnRzL2d1aWxkY2hhcnRzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLnN0YXIxMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMTNweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDIxcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMzlweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogNDhweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogNTVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMHB4O1xyXG4gIGxlZnQ6IC0wcHg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/guildcharts/guildcharts.ts":
/*!********************************************!*\
  !*** ./src/app/guildcharts/guildcharts.ts ***!
  \********************************************/
/*! exports provided: GuildchartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuildchartsComponent", function() { return GuildchartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _zetas_zetas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zetas/zetas */ "./src/app/zetas/zetas.ts");





var GuildchartsComponent = /** @class */ (function () {
    function GuildchartsComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.possiblestats = ["Arenaleaders", "Fleetleaders", "Zetas"];
        this.initialiseArenaLeaderDataSource();
        this.initialiseFleetLeaderDataSource();
        this.initialiseZetaDataSource();
    }
    GuildchartsComponent.prototype.initialiseArenaLeaderDataSource = function () {
        var tempDataSource = new Array();
        this.gildenService.gildenInfos.roster.forEach(function (member) {
            var defId = member.arena.char.squad[0].defId;
            if (tempDataSource[defId] != null) {
                tempDataSource[defId] = { Value: ++tempDataSource[defId].Value, Name: (tempDataSource[defId].Name + "\n" + member.name) };
            }
            else {
                tempDataSource[defId] = { Value: 1, Name: member.name };
            }
        });
        var tempDataSource2 = new Array();
        for (var key in tempDataSource) {
            tempDataSource2.push({ Leader: key, Value: tempDataSource[key].Value, Names: tempDataSource[key].Name });
        }
        this.arenaLeaderDataSource = tempDataSource2.sort(function (object1, object2) {
            return object2.Value - object1.Value;
        });
    };
    GuildchartsComponent.prototype.initialiseFleetLeaderDataSource = function () {
        var tempDataSource = new Array();
        this.gildenService.gildenInfos.roster.forEach(function (member) {
            var defId = member.arena.ship.squad[0].defId;
            if (tempDataSource[defId] != null) {
                tempDataSource[defId] = { Value: ++tempDataSource[defId].Value, Name: (tempDataSource[defId].Name + "\n" + member.name) };
            }
            else {
                tempDataSource[defId] = { Value: 1, Name: member.name };
            }
        });
        var tempDataSource2 = new Array();
        for (var key in tempDataSource) {
            tempDataSource2.push({ Leader: key, Value: tempDataSource[key].Value, Names: tempDataSource[key].Name });
        }
        this.fleetLeaderDataSource = tempDataSource2.sort(function (object1, object2) {
            return object2.Value - object1.Value;
        });
    };
    GuildchartsComponent.prototype.initialiseZetaDataSource = function () {
        var allZetasTemps = new Array();
        for (var i = 0; i < this.gildenService.gildenInfos.roster.length; i++) {
            var allZetaCharsNow = this.gildenService.gildenInfos.roster[i].roster.filter(function (char) { return char.skills.find(function (skill) { return skill.isZeta == true && skill.tier == 8; }); });
            if (allZetaCharsNow != null) {
                for (var x = 0; x < allZetaCharsNow.length; x++) {
                    var CharName = allZetaCharsNow[x].nameKey;
                    for (var z = 0; z < allZetaCharsNow[x].skills.length; z++) {
                        if (allZetaCharsNow[x].skills[z].isZeta == true && allZetaCharsNow[x].skills[z].tier == 8) {
                            var tempZetaReporter = allZetasTemps.find(function (skill) { return skill.skillName == allZetaCharsNow[x].skills[z].nameKey; });
                            if (tempZetaReporter != null) {
                                tempZetaReporter.anzahl++;
                                tempZetaReporter.Membernames.push(this.gildenService.gildenInfos.roster[i].name);
                            }
                            else {
                                var ZetaNow = new _zetas_zetas__WEBPACK_IMPORTED_MODULE_4__["ZetaReportHelper"]();
                                ZetaNow.CharName = CharName;
                                ZetaNow.anzahl = 1;
                                ZetaNow.skillName = allZetaCharsNow[x].skills[z].nameKey;
                                ZetaNow.Membernames = new Array();
                                ZetaNow.Membernames.push(this.gildenService.gildenInfos.roster[i].name);
                                allZetasTemps.push(ZetaNow);
                            }
                        }
                    }
                }
            }
        }
        allZetasTemps.sort(function (a, b) {
            return b.anzahl - a.anzahl;
        });
        this.allZetas = allZetasTemps;
    };
    GuildchartsComponent.prototype.topZetasChanged = function (e) {
        this.initialiseZetaDataSource();
        this.allZetas = this.allZetas.filter(function (zeta) { return zeta.anzahl >= e.value; });
    };
    GuildchartsComponent.prototype.customizeLeaderTooltip = function (arg) {
        var textNow = arg.argumentText + ": " + arg.valueText;
        return {
            text: textNow
        };
    };
    GuildchartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'guildcharts',
            template: __webpack_require__(/*! raw-loader!./guildcharts.html */ "./node_modules/raw-loader/index.js!./src/app/guildcharts/guildcharts.html"),
            styles: [__webpack_require__(/*! ./guildcharts.css */ "./src/app/guildcharts/guildcharts.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], GuildchartsComponent);
    return GuildchartsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.css":
/*!*******************************!*\
  !*** ./src/app/home/home.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.ts":
/*!******************************!*\
  !*** ./src/app/home/home.ts ***!
  \******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.isSyncing = false;
        console.log(this.settingsService.settings);
        this.windowNow = window;
        if (this.settingsService.settings.autoSyncNow == true) {
            this.settingsService.settings.autoSyncNow = false;
            this.settingsService.saveSettings(this.settingsService.settings);
            this.syncApi();
        }
    }
    HomeComponent.prototype.syncApi = function () {
        this.isSyncing = true;
        this.gildenService.syncGildenInfos();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.html"),
            styles: [__webpack_require__(/*! ./home.css */ "./src/app/home/home.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/newCharSearch/newCharSearch.css":
/*!*************************************************!*\
  !*** ./src/app/newCharSearch/newCharSearch.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -15px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3Q2hhclNlYXJjaC9uZXdDaGFyU2VhcmNoLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VB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a0NBQWtDO0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL25ld0NoYXJTZWFyY2gvbmV3Q2hhclNlYXJjaC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYXJlbnRPZkltYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnN0ZXJuZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGVybjEge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4yIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4zIHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4uc3Rlcm40IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Rlcm41IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiA0NHB4O1xyXG59XHJcblxyXG4uc3Rlcm42IHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNTdweDtcclxufVxyXG5cclxuLnN0ZXJuNyB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDY3cHg7XHJcbn1cclxuXHJcbi5tYWluY2hhckZpZWxkc2V0e1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5nZWFySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbn1cclxuXHJcbi5jaGFySW1hZ2Uge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbGVmdDogLTI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG59XHJcblxyXG4uY2hhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDI1NztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2hhci1nZWFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXZGb3JDaGFyIHtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMTZweCAzMnB4OyovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/newCharSearch/newCharSearch.ts":
/*!************************************************!*\
  !*** ./src/app/newCharSearch/newCharSearch.ts ***!
  \************************************************/
/*! exports provided: newCharSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCharSearchComponent", function() { return newCharSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var newCharSearchComponent = /** @class */ (function () {
    function newCharSearchComponent(settingsService, GildenService) {
        this.settingsService = settingsService;
        this.GildenService = GildenService;
        this.showMods = new Array();
    }
    newCharSearchComponent.prototype.searchCharaktere = function () {
        if (this.charToSearch != null && this.charToSearch != "" && this.charToSearch.length > 1)
            this.charaktere = this.GildenService.getAllCharsByName(this.charToSearch);
    };
    newCharSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'newCharSearch',
            template: __webpack_require__(/*! raw-loader!./newCharSearch.html */ "./node_modules/raw-loader/index.js!./src/app/newCharSearch/newCharSearch.html"),
            styles: [__webpack_require__(/*! ./newCharSearch.css */ "./src/app/newCharSearch/newCharSearch.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], newCharSearchComponent);
    return newCharSearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/MapToIterable.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/MapToIterable.pipe.ts ***!
  \*********************************************/
/*! exports provided: MapToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToIterable", function() { return MapToIterable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapToIterable = /** @class */ (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (dict) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    MapToIterable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mapToIterable'
        })
    ], MapToIterable);
    return MapToIterable;
}());



/***/ }),

/***/ "./src/app/pipes/SkillMemberNames.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/SkillMemberNames.pipe.ts ***!
  \************************************************/
/*! exports provided: SkillMemberNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMemberNames", function() { return SkillMemberNames; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillMemberNames = /** @class */ (function () {
    function SkillMemberNames() {
    }
    SkillMemberNames.prototype.transform = function (data) {
        var tempString = "";
        tempString += data.data.skillName + ": \n\r";
        for (var u = 0; u < data.data.Membernames.length; u++) {
            tempString += data.data.Membernames[u] + ", \n\r";
        }
        return tempString;
    };
    SkillMemberNames = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'skillmembernames'
        })
    ], SkillMemberNames);
    return SkillMemberNames;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/charGear.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/charpipe/charGear.pipe.ts ***!
  \*************************************************/
/*! exports provided: CharGearPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharGearPipe", function() { return CharGearPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var CharGearPipe = /** @class */ (function () {
    function CharGearPipe(GildenService) {
        this.gildenservice = GildenService;
    }
    CharGearPipe.prototype.transform = function (value) {
        switch (value.gear) {
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
    };
    CharGearPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'chargear'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], CharGearPipe);
    return CharGearPipe;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/charLink.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/charpipe/charLink.pipe.ts ***!
  \*************************************************/
/*! exports provided: CharImageLinkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharImageLinkPipe", function() { return CharImageLinkPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var CharImageLinkPipe = /** @class */ (function () {
    function CharImageLinkPipe(GildenService) {
        this.gildenservice = GildenService;
    }
    CharImageLinkPipe.prototype.transform = function (value) {
        return "https://echobase.app/images/collectibles/" + value.defId + "/open.png";
        //var charInfoNow = this.gildenservice.charInfos.find(info => info.base_id == value.defId);
        //if (charInfoNow != null) {
        //  if (charInfoNow.image.indexOf('/tex.') > 0) {
        //    return "/assets/picture/" + charInfoNow.image.substr(charInfoNow.image.indexOf('/tex.') + 5, (charInfoNow.image.length - charInfoNow.image.indexOf('/tex.')) - 5);
        //  }
        //}
        //return value.nameKey;
    };
    CharImageLinkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'charimagelink'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], CharImageLinkPipe);
    return CharImageLinkPipe;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/charName.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/charpipe/charName.pipe.ts ***!
  \*************************************************/
/*! exports provided: CharNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharNamePipe", function() { return CharNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var CharNamePipe = /** @class */ (function () {
    function CharNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    CharNamePipe.prototype.transform = function (value) {
        var charInfoNow = this.gildenservice.charInfos.find(function (info) { return info.base_id == value.defId; });
        if (charInfoNow != null)
            return charInfoNow.nameKey;
        return "name";
    };
    CharNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'charname'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], CharNamePipe);
    return CharNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/fleetlink.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/charpipe/fleetlink.pipe.ts ***!
  \**************************************************/
/*! exports provided: FleetImageLinkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleetImageLinkPipe", function() { return FleetImageLinkPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var FleetImageLinkPipe = /** @class */ (function () {
    function FleetImageLinkPipe(GildenService) {
        this.gildenservice = GildenService;
    }
    FleetImageLinkPipe.prototype.transform = function (value) {
        return "https://echobase.app/images/collectibles/" + value.defId + "/open.png";
        //var shipInfoNow = this.gildenservice.shipInfos.find(info => info.base_id == value.defId);
        //if (shipInfoNow != null) {
        //  if (shipInfoNow.image.indexOf('/tex.') > 0) {
        //    return "/assets/picture/" + shipInfoNow.image.substr(shipInfoNow.image.indexOf('/tex.') + 5, (shipInfoNow.image.length - shipInfoNow.image.indexOf('/tex.')) - 5);
        //  }
        //}
        //return value.nameKey;
    };
    FleetImageLinkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'fleetimagelink'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], FleetImageLinkPipe);
    return FleetImageLinkPipe;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/gearLink.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/charpipe/gearLink.pipe.ts ***!
  \*************************************************/
/*! exports provided: gearLinkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gearLinkPipe", function() { return gearLinkPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var gearLinkPipe = /** @class */ (function () {
    function gearLinkPipe() {
    }
    gearLinkPipe.prototype.transform = function (value) {
        return "/assets/GearPNG/gear-icon-g" + value.gear + ".png";
    };
    gearLinkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'gearlink'
        })
    ], gearLinkPipe);
    return gearLinkPipe;
}());



/***/ }),

/***/ "./src/app/pipes/charpipe/squadPower.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/charpipe/squadPower.pipe.ts ***!
  \***************************************************/
/*! exports provided: SquadPowerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadPowerPipe", function() { return SquadPowerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SquadPowerPipe = /** @class */ (function () {
    function SquadPowerPipe() {
    }
    SquadPowerPipe.prototype.transform = function (value) {
        var tempPower = 0;
        for (var i = 0; i < value.length; i++)
            tempPower += value[i].Power;
        return tempPower;
    };
    SquadPowerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'squadpower'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SquadPowerPipe);
    return SquadPowerPipe;
}());



/***/ }),

/***/ "./src/app/pipes/columnfixed.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/columnfixed.pipe.ts ***!
  \*******************************************/
/*! exports provided: ColumnFixedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnFixedPipe", function() { return ColumnFixedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColumnFixedPipe = /** @class */ (function () {
    function ColumnFixedPipe() {
    }
    ColumnFixedPipe.prototype.transform = function (value) {
        if (value < 1)
            return true;
        else
            return false;
    };
    ColumnFixedPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'columnfixed'
        })
    ], ColumnFixedPipe);
    return ColumnFixedPipe;
}());



/***/ }),

/***/ "./src/app/pipes/columntype.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/columntype.pipe.ts ***!
  \******************************************/
/*! exports provided: ColumnTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTypePipe", function() { return ColumnTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColumnTypePipe = /** @class */ (function () {
    function ColumnTypePipe() {
    }
    ColumnTypePipe.prototype.transform = function (value) {
        if (value < 1)
            return "string";
        else
            return "number";
    };
    ColumnTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'columntype'
        })
    ], ColumnTypePipe);
    return ColumnTypePipe;
}());



/***/ }),

/***/ "./src/app/pipes/columnwidth.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/columnwidth.pipe.ts ***!
  \*******************************************/
/*! exports provided: ColumnWidthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnWidthPipe", function() { return ColumnWidthPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColumnWidthPipe = /** @class */ (function () {
    function ColumnWidthPipe() {
    }
    ColumnWidthPipe.prototype.transform = function (value) {
        if (value < 1)
            return 100;
        else
            return 70;
    };
    ColumnWidthPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'columnwidth'
        })
    ], ColumnWidthPipe);
    return ColumnWidthPipe;
}());



/***/ }),

/***/ "./src/app/pipes/events/eventName.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/events/eventName.pipe.ts ***!
  \************************************************/
/*! exports provided: EventNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventNamePipe", function() { return EventNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventNamePipe = /** @class */ (function () {
    function EventNamePipe() {
    }
    EventNamePipe.prototype.transform = function (value) {
        return value.replace(/\[\/?[^\]]*\]/g, '').replace("\\n", " ");
    };
    EventNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'eventname'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventNamePipe);
    return EventNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/events/eventShow.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/events/eventShow.pipe.ts ***!
  \************************************************/
/*! exports provided: EventShowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventShowPipe", function() { return EventShowPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var EventShowPipe = /** @class */ (function () {
    function EventShowPipe(GildenService) {
        this.gildenservice = GildenService;
    }
    EventShowPipe.prototype.transform = function (value) {
        if (value.indexOf('restrictedmodbattle_') != -1 || value.indexOf('shipevent_') != -1 || value.indexOf('challenge_') != -1) {
            return false;
        }
        return true;
    };
    EventShowPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'eventShow'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], EventShowPipe);
    return EventShowPipe;
}());



/***/ }),

/***/ "./src/app/pipes/language/language.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/language/language.pipe.ts ***!
  \*************************************************/
/*! exports provided: LanguagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePipe", function() { return LanguagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
        this.languageDE = {
            "Settings": "Einstellungen",
            "Home": "Startseite",
            "Charsearch": "Charaktersuche",
            "Squadsearch": "Teamsuche",
            "TB-Platoon": "TB-Platoon",
            "Raid-Planner": "Raidplaner",
            "ArenaTeams": "Arenateams",
            "WelcomeText": "Willkommen auf Swgoh-Helper!",
            "AllDataText": "Alle Daten von",
            "AllPictureText": "und alle Bilder von",
            "GuildName": "Gildenname",
            "GildenGP": "Gilden GP",
            "GildenDescription": "Gildenbeschreibung",
            "RaidsPlayed": "Gespielte Raids",
            "LastSync": "Letzte Synchronisation",
            "EnterAllyCode": "Bitte gehen Sie in die Einstellungen und geben sie Ihren Verbündetencode an!",
            "PleaseSync": "Bitte synchronisieren Sie sich indem sie den Knopf unten drücken!",
            "Synchronise": "Synchronisieren",
            "Allycode": "Verbündetencode",
            "AllycodeEG": "dein Verbündetencode ( z.B. 456789123 )",
            "SortMemberby": "Mitglieder sortieren nach",
            "UseAutocomplete": "Autovervollständigung",
            "ShowErrors": "Zeige Fehler",
            "SaveSettings": "Einstellungen speichern",
            "WithRank": "mit Rang",
            "Speed": "Tempo",
            "Potency": "Effektivität",
            "Health": "Gesundheit",
            "Offense %": "Angriff %",
            "Critical Chance": "Kirt. Trefferchance",
            "Health %": "Gesundheit %",
            "Defense %": "Abwehr %",
            "Protection %": "Schutz %",
            "Critical Damage": "Krit. Schaden",
            "Offense": "Angriff",
            "Protection": "Schutz",
            "Tenacity": "Zähigkeit",
            "Defense": "Abwehr",
            "Critical Avoidance": "Krit. Ausweichen",
            "Accuracy": "Genauigkeit",
            "Show/Hide": "Ein-/Ausblenden",
            "CharNamePlaceHolder": "Charaktername ( z.B. 'Boba Fett' oder 'Boba'  )",
            "of": "von",
            "Charname": "Charaktername",
            "Needed": "Benötigt",
            "Available": "Verfügbar",
            "Difference": "Differenz",
            "Stars Needed": "Erforderliche Sterne",
            "Del": "Löschen",
            "Add": "Hinzufügen",
            "Confirm": "Bestätigen",
            "AddSquad": "Ein Team Hinzufügen",
            "Comparer": "Charvergleicher",
            "Agility": "Geschicklichkeit",
            "Armor": "Rüstung",
            "Armor Penetration": "Rüstungsdurchdringung",
            "Health Steal": "Lebensraub",
            "Physical Critical Rating": "Physical Critical Rating",
            "Physical Damage": "Physischer Schaden",
            "Resistance": "Resistenz",
            "Resistance Penetration": "Resistenzdurchdringung",
            "Special Critical Rating": "Special Critical Rating",
            "Special Damage": "Spezialschaden",
            "Armor %": "Rüstung %",
            "Resistance %": "Resistenz %",
            "Physical Critical %": "Kritische Trefferchance (Pysisch)",
            "Special Critical %": "Kritische Trefferchance (Special)",
            "Tactics": "Taktik",
            "Charpower": "Stärke",
            "STATMODSETBONUS_SETBONUSSTAT_RESISTANCE_NAME": "Zähigkeit",
            "STATMODSETBONUS_SETBONUSSTAT_MAXHEALTHPERCENTADDITIVE_NAME": "Gesundheit",
            "STATMODSETBONUS_SETBONUSSTAT_OFFENSEPERCENTADDITIVE_NAME": "Angriff",
            "STATMODSETBONUS_SETBONUSSTAT_DEFENSEPERCENTADDITIVE_NAME": "Verteidigung",
            "STATMODSETBONUS_SETBONUSSTAT_ACCURACY_NAME": "Genauigkeit",
            "STATMODSETBONUS_SETBONUSSTAT_SPEEDPERCENTADDITIVE_NAME": "Tempo",
            "STATMODSETBONUS_SETBONUSSTAT_CRITICALCHANCEPERCENTADDITIVE_NAME": "Krit. Chance",
            "STATMODSETBONUS_SETBONUSSTAT_CRITICALDAMAGE_NAME": "Krit. Schaden",
            "UNITSTATOFFENSEPERCENTADDITIVE": "Angriff %",
            "UNITSTATOFFENSE": "Angriff",
            "UNITSTATACCURACY": "Genauigkeit",
            "UNITSTATSPEED": "Tempo",
            "UNITSTATRESISTANCE": "Zähigkeit",
            "UNITSTATMAXHEALTH": "Gesundheit",
            "UNITSTATMAXHEALTHPERCENTADDITIVE": "Gesundheit %",
            "UNITSTATDEFENSE": "Verteidigung",
            "UNITSTATDEFENSEPERCENTADDITIVE": "Verteidigung %",
            "UNITSTATCRITICALCHANCEPERCENTADDITIVE": "Krit. Chance",
            "UNITSTATMAXSHIELDPERCENTADDITIVE": "Schutz %",
            "UNITSTATCRITICALDAMAGE": "Krit. Schaden",
            "UNITSTATMAXSHIELD": "Schutz",
            "UNITSTATEVASIONNEGATEPERCENTADDITIVE": "Ausweichen %",
            "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE": "Krit. Ausweichen %",
            "Fleetarena": "Flottenarena",
            "Shipsearch": "Schiffssuche",
            "Membertracking": "Mitgliedanalyse",
            "Configuration": "Konfiguration"
        };
        this.languageENG = {
            "Settings": "Settings",
            "Home": "Home",
            "Charsearch": "Charsearch",
            "Squadsearch": "Squadsearch",
            "TB-Platoon": "TB-Platoon",
            "Raid-Planner": "Raid-Planner",
            "ArenaTeams": "Arena Teams",
            "WelcomeText": "Welcome to Swgoh-Helper!",
            "AllDataText": "All Datas are from",
            "AllPictureText": "and all Pictures from",
            "GuildName": "Guildname",
            "GildenGP": "Guild GP",
            "GildenDescription": "Gilden Description",
            "RaidsPlayed": "Raids Played",
            "LastSync": "Last Sync",
            "EnterAllyCode": "Please go to Settings and enter your Allycode!",
            "PleaseSync": "Please Synchronise with swgoh.help by hitting the button at the bottom!",
            "Synchronise": "Synchronisieren",
            "Allycode": "Allycode",
            "AllycodeEG": "your allycode ( e.g 456789123 )",
            "SortMemberby": "Sort Member by",
            "UseAutocomplete": "Use Autocomplete",
            "ShowErrors": "Show Errors",
            "SaveSettings": "Save Settings",
            "WithRank": "with rank",
            "Speed": "Speed",
            "Potency": "Potency",
            "Health": "Health",
            "Offense %": "Offense %",
            "Critical Chance": "Critical Chance",
            "Health %": "Health %",
            "Defense %": "Defense %",
            "Protection %": "Protection %",
            "Critical Damage": "Critical Damage",
            "Offense": "Offense",
            "Protection": "Protection",
            "Tenacity": "Tenacity",
            "Defense": "Defense",
            "Critical Avoidance": "Critical Avoidance",
            "Accuracy": "Accuracy",
            "Show/Hide": "Show/Hide",
            "CharNamePlaceHolder": "Charname ( e.g 'Boba Fett' or 'Boba'  )",
            "of": "of",
            "Charname": "Charname",
            "Needed": "Needed",
            "Available": "Available",
            "Difference": "Difference",
            "Stars Needed": "Stars Needed",
            "Del": "Del",
            "Add": "Add",
            "Confirm": "Confirm",
            "AddSquad": "Add a Squad",
            "Comparer": "Charcomparer",
            "Agility": "Agility",
            "Armor": "Armor",
            "Armor Penetration": "Armor Penetration",
            "Health Steal": "Health Steal",
            "Physical Critical Rating": "Physical Critical Rating",
            "Physical Damage": "Physical Damage",
            "Resistance": "Resistance",
            "Resistance Penetration": "Resistance Penetration",
            "Special Critical Rating": "Special Critical Rating",
            "Special Damage": "Special Damage",
            "Armor %": "Armor %",
            "Resistance %": "Resistance %",
            "Physical Critical %": "Physical Critical %",
            "Special Critical %": "Special Critical %",
            "Charpower": "Power",
            "STATMODSETBONUS_SETBONUSSTAT_RESISTANCE_NAME": "Resistance",
            "STATMODSETBONUS_SETBONUSSTAT_OFFENSEPERCENTADDITIVE_NAME": "Offense",
            "STATMODSETBONUS_SETBONUSSTAT_DEFENSEPERCENTADDITIVE_NAME": "Defense",
            "STATMODSETBONUS_SETBONUSSTAT_MAXHEALTHPERCENTADDITIVE_NAME": "Health",
            "STATMODSETBONUS_SETBONUSSTAT_ACCURACY_NAME": "Accuracy",
            "STATMODSETBONUS_SETBONUSSTAT_SPEEDPERCENTADDITIVE_NAME": "Speed",
            "STATMODSETBONUS_SETBONUSSTAT_CRITICALCHANCEPERCENTADDITIVE_NAME": "Critical Chance",
            "STATMODSETBONUS_SETBONUSSTAT_CRITICALDAMAGE_NAME": "Critical Damage",
            "UNITSTATOFFENSEPERCENTADDITIVE": "Offense %",
            "UNITSTATOFFENSE": "Offense",
            "UNITSTATACCURACY": "Accuracy",
            "UNITSTATSPEED": "Speed",
            "UNITSTATRESISTANCE": "Resistance",
            "UNITSTATMAXHEALTH": "Health",
            "UNITSTATMAXHEALTHPERCENTADDITIVE": "Health %",
            "UNITSTATDEFENSE": "Defense",
            "UNITSTATDEFENSEPERCENTADDITIVE": "Defense %",
            "UNITSTATCRITICALCHANCEPERCENTADDITIVE": "Critical Chance",
            "UNITSTATMAXSHIELDPERCENTADDITIVE": "Protection %",
            "UNITSTATCRITICALDAMAGE": "Critical Damage",
            "UNITSTATMAXSHIELD": "Protection",
            "UNITSTATEVASIONNEGATEPERCENTADDITIVE": "Evasion %",
            "UNITSTATCRITICALNEGATECHANCEPERCENTADDITIVE": "Critical Avoidance %",
            "Fleetarena": "Fleetarena",
            "Shipsearch": "Shipsearch",
            "Membertracking": "Membertracking",
            "Configuration": "Configuration"
        };
    }
    LanguagePipe.prototype.transform = function (value) {
        var userLang = navigator.language;
        if (userLang == "de-DE" || userLang == "de") {
            if (this.languageDE[value] != null)
                return this.languageDE[value];
            else
                return value;
        }
        else {
            if (this.languageENG[value] != null)
                return this.languageENG[value];
            else
                return value;
        }
    };
    LanguagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'language'
        })
    ], LanguagePipe);
    return LanguagePipe;
}());



/***/ }),

/***/ "./src/app/pipes/modpipes/ModSetName.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/modpipes/ModSetName.pipe.ts ***!
  \***************************************************/
/*! exports provided: ModSetNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModSetNamePipe", function() { return ModSetNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var ModSetNamePipe = /** @class */ (function () {
    function ModSetNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModSetNamePipe.prototype.transform = function (value) {
        var ModSetNow = this.gildenservice.ModSets.find(function (modset) { return modset.id == value.toString(); });
        if (ModSetNow != null) {
            return ModSetNow.nameKey;
        }
        return value.toString();
    };
    ModSetNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'modsetname'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ModSetNamePipe);
    return ModSetNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/modpipes/ModSlotName.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/modpipes/ModSlotName.pipe.ts ***!
  \****************************************************/
/*! exports provided: ModSlotNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModSlotNamePipe", function() { return ModSlotNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var ModSlotNamePipe = /** @class */ (function () {
    function ModSlotNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModSlotNamePipe.prototype.transform = function (value) {
        switch (value) {
            case 1:
                return "Transmitter";
            case 2:
                return "Receiver";
            case 3:
                return "Processor";
            case 4:
                return "Holo-Array";
            case 5:
                return "Data-Bus";
            case 6:
                return "Multiplexer";
            default:
                return value.toString();
        }
    };
    ModSlotNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'modslotname'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ModSlotNamePipe);
    return ModSlotNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/modpipes/ModStatName.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/pipes/modpipes/ModStatName.pipe.ts ***!
  \****************************************************/
/*! exports provided: ModStatNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModStatNamePipe", function() { return ModStatNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var ModStatNamePipe = /** @class */ (function () {
    function ModStatNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModStatNamePipe.prototype.transform = function (value) {
        var ModStatsNow = this.gildenservice.ModStats[value];
        if (ModStatsNow != null) {
            return ModStatsNow.nameKey;
        }
        return value.toString();
    };
    ModStatNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'modstatname'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ModStatNamePipe);
    return ModStatNamePipe;
}());



/***/ }),

/***/ "./src/app/pipes/modpipes/ModStatValue.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/modpipes/ModStatValue.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ModStatValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModStatValuePipe", function() { return ModStatValuePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");



var ModStatValuePipe = /** @class */ (function () {
    function ModStatValuePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModStatValuePipe.prototype.transform = function (value, modStatName) {
        switch (modStatName) {
            case "Speed":
                return (value / 100000000).toString();
            case "Potency":
                return (value / 1000000).toString();
            case "Health":
                return (value / 100000000).toString();
            case "Offense %":
                return (value / 1000000).toString();
            case "Critical Chance":
                return (value / 1000000).toString();
            case "Health %":
                return (value / 1000000).toString();
            case "Defense %":
                return (value / 1000000).toString();
            case "Protection %":
                return (value / 1000000).toString();
            case "Critical Damage":
                return (value / 1000000).toString();
            case "Offense":
                return (value / 100000000).toString();
            case "Protection":
                return (value / 100000000).toString();
            case "Tenacity":
                return (value / 1000000).toString();
            case "Defense":
                return (value / 100000000).toString();
            case "Critical Avoidance":
                return (value / 10000000).toString();
            case "Accuracy":
                return (value / 1000000).toString();
            default:
                return value.toString();
        }
    };
    ModStatValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'modstatvalue'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ModStatValuePipe);
    return ModStatValuePipe;
}());



/***/ }),

/***/ "./src/app/pipes/squadToString.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/squadToString.pipe.ts ***!
  \*********************************************/
/*! exports provided: SquadToStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadToStringPipe", function() { return SquadToStringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SquadToStringPipe = /** @class */ (function () {
    function SquadToStringPipe() {
    }
    SquadToStringPipe.prototype.transform = function (value) {
        var tempString = "";
        for (var i = 0; i < value.length; i++) {
            if (tempString == "")
                tempString = value[i].defId + "(L)";
            else
                tempString += ", " + value[i].defId;
        }
        return tempString;
    };
    SquadToStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'squadtostring'
        })
    ], SquadToStringPipe);
    return SquadToStringPipe;
}());



/***/ }),

/***/ "./src/app/services/gildenService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/gildenService.ts ***!
  \*******************************************/
/*! exports provided: gildenService, GildenInfos, ArenaChar, Charakter, MappedCharakter, ModPrimaryStat, ModSecondaryStat, Skill, squad, ArenaTeamHelper, CharFindHelper, Schedule, SWGOHEventWrapper, SWGOHEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gildenService", function() { return gildenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GildenInfos", function() { return GildenInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArenaChar", function() { return ArenaChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charakter", function() { return Charakter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappedCharakter", function() { return MappedCharakter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModPrimaryStat", function() { return ModPrimaryStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModSecondaryStat", function() { return ModSecondaryStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squad", function() { return squad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArenaTeamHelper", function() { return ArenaTeamHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharFindHelper", function() { return CharFindHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWGOHEventWrapper", function() { return SWGOHEventWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWGOHEvent", function() { return SWGOHEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var gildenService = /** @class */ (function () {
    function gildenService(settingsService, http, lz) {
        this.settingsService = settingsService;
        this.lz = lz;
        this.gildenInfos = new GildenInfos();
        this.gildenInfosTemp = new GildenInfos();
        this.syncstatus = '';
        this.isInSync = false;
        this.token = '';
        //swgoh-help
        this.apiHelpURL = 'https://api.swgoh.help';
        this.language = 'ENG_US';
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
    gildenService.prototype.getModStats = function () {
        if (localStorage.midiModStats != null)
            this.ModStats = JSON.parse(localStorage.midiModStats);
    };
    gildenService.prototype.saveModStats = function (ModStats) {
        localStorage.midiModStats = JSON.stringify(ModStats);
        this.ModStats = ModStats;
        console.log('ModStats', this.ModStats);
    };
    gildenService.prototype.getModSets = function () {
        if (localStorage.midiModSets != null)
            this.ModSets = JSON.parse(localStorage.midiModSets);
    };
    gildenService.prototype.saveModSets = function (ModSets) {
        localStorage.midiModSets = JSON.stringify(ModSets);
        this.ModSets = ModSets;
        console.log('ModSets', this.ModSets);
    };
    gildenService.prototype.getCharInfos = function () {
        if (localStorage.midiCharInfos != null)
            this.charInfos = JSON.parse(localStorage.midiCharInfos);
    };
    gildenService.prototype.saveCharInfos = function (charInfos) {
        localStorage.midiCharInfos = JSON.stringify(charInfos);
        this.charInfos = charInfos;
    };
    gildenService.prototype.getShipInfos = function () {
        if (localStorage.midiShipInfos != null)
            this.shipInfos = JSON.parse(localStorage.midiShipInfos);
    };
    gildenService.prototype.saveShipInfos = function (shipInfos) {
        localStorage.midiShipInfos = JSON.stringify(shipInfos);
        this.shipInfos = shipInfos;
    };
    gildenService.prototype.getSWGOHHelpResponse = function () {
        if (localStorage.swgohHelpGilde != null) {
            var decompressed = this.lz.decompress(localStorage.swgohHelpGilde);
            if (decompressed.startsWith("{")) {
                this.gildenInfos = JSON.parse(decompressed);
                if (this.gildenInfos != null && this.gildenInfos.roster[0].stats != undefined) {
                    this.gildenInfos.roster = this.gildenInfos.roster.sort(function (a, b) {
                        return b.stats.find(function (stat) { return stat.index == 2; }).value - a.stats.find(function (stat) { return stat.index == 2; }).value;
                    });
                }
                console.log(this.gildenInfos);
            }
        }
    };
    gildenService.prototype.saveSWGOHHelpResponse = function () {
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
    };
    gildenService.prototype.checkIfItsANumber = function (number) {
        if (number == null)
            return false;
        var numb = number.match(/\d/g);
        if (numb == null)
            return false;
        if (numb.join("") == number)
            return true;
        else
            return false;
    };
    gildenService.prototype.loginToSWGOHHelp = function () {
        var _this = this;
        var user = "username=sdtbarbarossa";
        //user += "&password=ExsJfR!nzYB*7Mqr";
        user += "&password=1234midi";
        user += "&grant_type=password";
        user += "&client_id=123";
        user += "&client_secret=ABC";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
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
        else {
            if (navigator.language == "de-DE")
                this.syncstatus += 'Logge ein bei swgoh.help... \n\r';
            else
                this.syncstatus += 'Login at swgoh.help... \n\r';
            this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
                .subscribe(function (data) {
                var response = data;
                _this.token = response.access_token;
                if (navigator.language == "de-DE")
                    _this.syncstatus += 'Login erfolgreich! \n\r';
                else
                    _this.syncstatus += 'Login suceeded! \n\r';
                if (_this.settingsService.settings.loadSync == true) {
                    _this.loadGildenInfos();
                }
                else {
                    _this.loadGildenInfosAsync();
                }
            }, function (Error) {
                if (navigator.language == "de-DE") {
                    _this.syncstatus += 'Fehler beim Login... breche ab \n\r';
                    _this.syncstatus += Error.message + '\n\r';
                    _this.syncstatus += 'Ende der Synchronisation! \n\r';
                }
                else {
                    _this.syncstatus += 'Error on Login... abort Sync \n\r';
                    _this.syncstatus += Error.message + '\n\r';
                    _this.syncstatus += 'End of Sync! \n\r';
                }
            });
        }
    };
    gildenService.prototype.loginToSWGOHHelpForCharStats = function (charname, member, isA) {
        var _this = this;
        var user = "username=sdtbarbarossa";
        //user += "&password=ExsJfR!nzYB*7Mqr";
        user += "&password=1234midi";
        user += "&grant_type=password";
        user += "&client_id=123";
        user += "&client_secret=ABC";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Length', user.length.toString());
        if (this.token != null && this.token != "") {
            this.loadCharStats(charname, member, isA);
        }
        else {
            this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
                .subscribe(function (data) {
                var response = data;
                _this.token = response.access_token;
                if (navigator.language == "de-DE")
                    _this.syncstatus += 'Login erfolgreich! \n\r';
                else
                    _this.syncstatus += 'Login suceeded! \n\r';
                _this.loadCharStats(charname, member, isA);
            }, function (Error) {
                alert(Error.message);
            });
        }
    };
    gildenService.prototype.loadCharStats = function (charname, member, isA) {
    };
    gildenService.prototype.loginEventToSWGOHHelp = function () {
        var _this = this;
        var user = "username=sdtbarbarossa";
        //user += "&password=ExsJfR!nzYB*7Mqr";
        user += "&password=1234midi";
        user += "&grant_type=password";
        user += "&client_id=123";
        user += "&client_secret=ABC";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Length', user.length.toString());
        if (this.token != null && this.token != "") {
            this.loadEventData();
        }
        else {
            this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
                .subscribe(function (data) {
                var response = data;
                _this.token = response.access_token;
                if (navigator.language == "de-DE")
                    _this.syncstatus += 'Login erfolgreich! \n\r';
                else
                    _this.syncstatus += 'Login suceeded! \n\r';
                _this.loadEventData();
            }, function (Error) {
                alert(Error.message);
            });
        }
    };
    gildenService.prototype.loadEventData = function () {
        var _this = this;
        var payload = {
            language: this.language
        };
        var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://api.swgoh.help/swgoh/events', payload, { headers: header2 })
            .subscribe(function (data2) {
            console.log(data2);
            _this.SWGOHEvents = data2.events;
            _this.SWGOHEvents.sort(function (a, b) {
                return a.instanceList[0].startTime - b.instanceList[0].startTime;
            });
        }, function (Error) {
            alert(Error.message);
        });
    };
    gildenService.prototype.loadGildenInfos = function () {
        var _this = this;
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
        var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://api.swgoh.help/swgoh/guild/', payload, { headers: header2 })
            .subscribe(function (data2) {
            _this.jsonResponseSWGOHHelpGuild = data2[0];
            if (navigator.language == "de-DE") {
                _this.syncstatus += 'Gilde "' + _this.jsonResponseSWGOHHelpGuild.name + '" gefunden. \n\rLade Spielerinfos... \n\r';
                _this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
            }
            else {
                _this.syncstatus += 'Guild "' + _this.jsonResponseSWGOHHelpGuild.name + '" found. \n\rLoad Playerinfos... \n\r';
                _this.syncstatus += 'This can take several minutes... \n\r';
            }
            var allycodes = new Array();
            for (var i = 0; i < _this.jsonResponseSWGOHHelpGuild.roster.length; i++) {
                allycodes.push(_this.jsonResponseSWGOHHelpGuild.roster[i].allyCode);
            }
            var payload2 = {
                allycode: allycodes,
                language: _this.language
            };
            _this.http.post('https://api.swgoh.help/swgoh/player/', payload2, { headers: header2 })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(1000 * 60 * 5))
                .subscribe(function (data3) {
                _this.jsonResponseSWGOHHelpGuildRosters = data3;
                _this.saveSWGOHHelpResponse();
                _this.loadSWGOHHelpExtras();
            }, function (Error) {
                if (navigator.language == "de-DE") {
                    _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                    _this.syncstatus += Error.message + '\n\r';
                    _this.syncstatus += 'Ende der Synchronisation! \n\r';
                }
                else {
                    _this.syncstatus += 'Error on getting Guilddata...aborting... \n\r';
                    _this.syncstatus += Error.message + '\n\r';
                    _this.syncstatus += 'End of Sync! \n\r';
                }
            });
        }, function (Error) {
            if (navigator.language == "de-DE") {
                _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                _this.syncstatus += Error.message + '\n\r';
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            }
            else {
                _this.syncstatus += 'Error on getting Guilddata...aborting... \n\r';
                _this.syncstatus += Error.message + '\n\r';
                _this.syncstatus += 'End of Sync! \n\r';
            }
        });
    };
    gildenService.prototype.loadGildenInfosAsync = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, header2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (navigator.language == "de-DE") {
                    this.syncstatus += 'Lade Gildendaten für ' + this.settingsService.settings.allycode + '... \n\r';
                }
                else {
                    this.syncstatus += 'Load Guilddata for ' + this.settingsService.settings.allycode + '... \n\r';
                }
                payload = {
                    allycode: this.settingsService.settings.allycode,
                    language: this.language
                };
                header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                header2 = header2.append("Authorization", "Bearer " + this.token);
                header2.append('Access-Control-Allow-Headers', 'Authorization');
                this.http.post('https://api.swgoh.help/swgoh/guild/', payload, { headers: header2 })
                    .subscribe(function (data2) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var allycodes, guildRosters, i, payload2, result;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.jsonResponseSWGOHHelpGuild = data2[0];
                                if (navigator.language == "de-DE") {
                                    this.syncstatus += 'Gilde "' + this.jsonResponseSWGOHHelpGuild.name + '" gefunden. Lade Spielerinfos... \n\r';
                                    this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
                                }
                                else {
                                    this.syncstatus += 'Guild "' + this.jsonResponseSWGOHHelpGuild.name + '" found.Load Playerinfos... \n\r';
                                    this.syncstatus += 'This can take several minutes... \n\r';
                                }
                                allycodes = new Array();
                                guildRosters = new Array();
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < this.jsonResponseSWGOHHelpGuild.roster.length)) return [3 /*break*/, 4];
                                payload2 = {
                                    allycode: this.jsonResponseSWGOHHelpGuild.roster[i].allyCode,
                                    language: this.language
                                };
                                if (navigator.language == "de-DE") {
                                    this.syncstatus += 'Lade Daten für: "' + this.jsonResponseSWGOHHelpGuild.roster[i].name + '" \n\r';
                                }
                                else {
                                    this.syncstatus += 'Updating data for: "' + this.jsonResponseSWGOHHelpGuild.roster[i].name + '" \n\r';
                                }
                                return [4 /*yield*/, this.http.post('https://api.swgoh.help/swgoh/player/', payload2, { headers: header2 })
                                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(1000 * 60 * 5))
                                        .toPromise()];
                            case 2:
                                result = _a.sent();
                                guildRosters.push(result[0]);
                                if (navigator.language == "de-DE") {
                                    this.syncstatus += 'Erfolgreich geupdated: "' + result[0].name + '" \n\r';
                                }
                                else {
                                    this.syncstatus += 'Done with updating: "' + result[0].name + '" \n\r';
                                }
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4:
                                this.jsonResponseSWGOHHelpGuildRosters = guildRosters;
                                this.saveSWGOHHelpResponse();
                                this.loadSWGOHHelpExtras();
                                return [2 /*return*/];
                        }
                    });
                }); }, function (Error) {
                    if (navigator.language == "de-DE") {
                        _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                        _this.syncstatus += Error.message + '\n\r';
                        _this.syncstatus += 'Ende der Synchronisation! \n\r';
                    }
                    else {
                        _this.syncstatus += 'Error on getting Guilddata...aborting... \n\r';
                        _this.syncstatus += Error.message + '\n\r';
                        _this.syncstatus += 'End of Sync! \n\r';
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    gildenService.prototype.loadSWGOHHelpExtras = function () {
        var _this = this;
        this.syncstatus += 'Hole Mod-Set-Infos... \n\r';
        var Payload = {
            "collection": "statModSetList",
            "language": this.language,
        };
        var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://api.swgoh.help/swgoh/data/', Payload, { headers: header2 })
            .subscribe(function (data2) {
            _this.ModSets = data2;
            _this.saveModSets(_this.ModSets);
            _this.syncstatus += 'Hole Mod-Stat-Infos... \n\r';
            var Payload2 = {
                "collection": "statModList",
                "language": _this.language,
            };
            var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            header2 = header2.append("Authorization", "Bearer " + _this.token);
            header2.append('Access-Control-Allow-Headers', 'Authorization');
            _this.http.post('https://api.swgoh.help/swgoh/data/', Payload2, { headers: header2 })
                .subscribe(function (data2) {
                _this.ModStats = data2;
                _this.saveModStats(_this.ModStats);
                _this.syncstatus += 'Mod-Stat-Infos erfolgreich... \n\r';
                _this.loadSWGOHggChars();
            }, function (Error) {
                _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                _this.syncstatus += Error.message + '\n\r';
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            });
        }, function (Error) {
            _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
            _this.syncstatus += Error.message + '\n\r';
            _this.syncstatus += 'Ende der Synchronisation! \n\r';
        });
    };
    gildenService.prototype.loadSWGOHggChars = function () {
        var _this = this;
        this.syncstatus += 'Hole Charinfo von swgoh.gg... \n\r';
        this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/', { responseType: 'json' })
            .subscribe(function (data) {
            _this.jsonResponseSWGOHCharacters = data;
            _this.saveCharInfos(data);
            _this.syncstatus += 'Charinfos erfolgreich abgerufen... \n\r';
            _this.loadSWGOHggShips();
        }, function (Error) {
            if (_this.charInfos != null) {
                _this.syncstatus += 'Fehler beim abrufen der Daten... kann aber alte Daten verwenden \n\r';
                _this.loadSWGOHggShips();
                _this.isInSync = false;
            }
            else {
                _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                _this.syncstatus += Error.message + '\n\r';
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            }
        });
    };
    gildenService.prototype.loadSWGOHggShips = function () {
        var _this = this;
        this.syncstatus += 'Hole Shipinfo von swgoh.gg... \n\r';
        this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/', { responseType: 'json' })
            .subscribe(function (data) {
            _this.jsonResponseSWGOHCharacters = data;
            _this.saveShipInfos(data);
            _this.syncstatus += 'Ende der Synchronisation! \n\r';
            _this.isInSync = false;
        }, function (Error) {
            if (_this.shipInfos != null) {
                _this.syncstatus += 'Fehler beim abrufen der Daten... kann aber alte Daten verwenden \n\r';
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
                _this.isInSync = false;
            }
            else {
                _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                _this.syncstatus += Error.message + '\n\r';
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            }
        });
    };
    gildenService.prototype.syncGildenInfos = function () {
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
            else {
                alert('AllyCode "' + this.settingsService.settings.allycode + '" is either empty or in the wrong format. It must be a string with 9 numbers ( no - )');
                this.syncstatus += 'aborted \n\r';
            }
            return;
        }
        this.loginToSWGOHHelp();
    };
    gildenService.prototype.getAllCharsByName = function (name) {
        var charsFound = new Array();
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            var foundChars = this.gildenInfos.roster[i].roster.filter(function (char) { return (char.nameKey.toLowerCase().indexOf(name.toLowerCase()) > -1) && char.combatType != 2; });
            if (foundChars == null || foundChars.length == 0) {
            }
            else {
                for (var x = 0; x < foundChars.length; x++) {
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
        charsFound.sort(function (a, b) { return b.charakter.gp - a.charakter.gp; });
        return charsFound;
    };
    gildenService.prototype.getAllShipsByName = function (name) {
        var shipsFound = new Array();
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            if (name == "ALL") {
                var foundShips = this.gildenInfos.roster[i].roster.filter(function (char) { return char.combatType == 2; });
            }
            else {
                var foundShips = this.gildenInfos.roster[i].roster.filter(function (char) { return (char.nameKey.toLowerCase().indexOf(name.toLowerCase()) > -1) && char.combatType == 2; });
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
        shipsFound.sort(function (a, b) { return b.charakter.gp - a.charakter.gp; });
        return shipsFound;
    };
    gildenService.prototype.getAllCharArenaTeams = function () {
        var allTeams = new Array();
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            var arenaTeamNow = new ArenaTeamHelper();
            arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;
            var teamNow = this.gildenInfos.roster[i].arena.char;
            arenaTeamNow.rang = teamNow.rank;
            for (var x = 0; x < teamNow.squad.length; x++) {
                var charNow = this.gildenInfos.roster[i].roster.find(function (char) { return char.defId == teamNow.squad[x].defId; });
                if (charNow != null)
                    arenaTeamNow.charaktere.push(charNow);
            }
            allTeams.push(arenaTeamNow);
        }
        return allTeams;
    };
    gildenService.prototype.getAllFleetArenaTeams = function () {
        var allTeams = new Array();
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            var arenaTeamNow = new ArenaTeamHelper();
            arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;
            var teamNow = this.gildenInfos.roster[i].arena.ship;
            arenaTeamNow.rang = teamNow.rank;
            for (var x = 0; x < teamNow.squad.length; x++) {
                var charNow = this.gildenInfos.roster[i].roster.find(function (char) { return char.defId == teamNow.squad[x].defId; });
                if (charNow != null)
                    arenaTeamNow.charaktere.push(charNow);
            }
            allTeams.push(arenaTeamNow);
        }
        return allTeams;
    };
    gildenService.prototype.getMemberByName = function (name) {
        return this.gildenInfos.roster.find(function (a) { return a.name == name; });
    };
    //GildenInfos Function
    gildenService.prototype.findMemberbyName = function (memberName) {
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            if (this.gildenInfos.roster[i].name == memberName) {
                return this.gildenInfos.roster[i];
            }
        }
        return null;
    };
    gildenService.prototype.findCharbyNameAndMember = function (memberName, charName) {
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
    };
    gildenService.prototype.findSquadWithMember = function (squadToFind, member) {
        var memberNow = this.gildenInfos.roster.find(function (m) { return m.name == member.name; });
        var tempSquad = new Array();
        for (var x = 0; x < squadToFind.Charaktere.length; x++) {
            var charNow = this.getMappedCharByNameAndMemberExact(squadToFind.Charaktere[x], memberNow);
            if (charNow != null) {
                tempSquad.push(charNow);
            }
        }
        return tempSquad;
    };
    gildenService.prototype.findSquads = function (squadToFind) {
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
    };
    gildenService.prototype.compareSquads = function (a, b) {
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
    };
    gildenService.prototype.findCharByName = function (charName) {
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
    };
    gildenService.prototype.findMappedCharByName = function (charName) {
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
    };
    gildenService.prototype.findCharByNameAndStar = function (charName, star) {
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
    };
    gildenService.prototype.findShipByNameAndStar = function (charName, star) {
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
    };
    gildenService.prototype.compareChar = function (a, b) {
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
    };
    gildenService.prototype.getMappedCharByNameAndMember = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        //MapCharName To IDName
        var idName = this.charInfos.find(function (info) { return info.name.toLowerCase().indexOf(name.toLowerCase()) >= 0; });
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
    };
    gildenService.prototype.getCharByNameAndMember = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        for (var i = 0; i < member.roster.length; i++) {
            if (member.roster[i].nameKey.toLowerCase().includes(name.toLowerCase())) {
                return member.roster[i];
            }
        }
        return null;
    };
    gildenService.prototype.getCharByNameAndMemberExact = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        //MapCharName To IDName
        var idName = this.charInfos.find(function (info) { return info.name == name; });
        if (idName != null)
            name = idName.base_id;
        for (var i = 0; i < member.roster.length; i++) {
            if (member.roster[i].defId.toLowerCase() == name.toLowerCase()) {
                return member.roster[i];
            }
        }
        return null;
    };
    gildenService.prototype.mappChar = function (newchar, besitzer, oldName, defID) {
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
            var charInfoNow = this.charInfos.find(function (info) { return info.base_id == newchar.defId; });
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
    };
    gildenService.prototype.getMappedCharByNameAndMemberExact = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        //MapCharName To IDName
        var idName = this.charInfos.find(function (info) { return info.name.toLowerCase() == name.toLowerCase(); });
        if (idName != null)
            name = idName.base_id;
        for (var i = 0; i < member.roster.length; i++) {
            if (member.roster[i].defId.toLowerCase() == name.toLowerCase()) {
                return this.mappChar(member.roster[i], member.name, idName.name, member.roster[i].defId);
            }
        }
        return null;
    };
    gildenService.prototype.getMappedShipByNameAndMemberExact = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        //MapCharName To IDName
        var idName = this.shipInfos.find(function (info) { return info.name.toLowerCase() == name.toLowerCase(); });
        if (idName != null) {
            name = idName.base_id;
        }
        else {
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
    };
    gildenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ng_lz_string__WEBPACK_IMPORTED_MODULE_4__["LZStringService"]])
    ], gildenService);
    return gildenService;
}());

var GildenInfos = /** @class */ (function () {
    function GildenInfos() {
        this.bannerColor = "";
        this.bannerLogo = "";
        this.desc = "";
        this.gp = 0;
        this.members = 0;
        this.message = "";
        this.name = "";
        this.raid = new Raid();
        this.required = 0;
        this.roster = new Array();
        this.updated = new Date();
    }
    return GildenInfos;
}());

var Raid = /** @class */ (function () {
    function Raid() {
        this.aat = "";
        this.rancor = "";
        this.sith_raid = "";
    }
    return Raid;
}());
var Member = /** @class */ (function () {
    function Member() {
        this.allyCode = 0;
        this.arena = new Arena();
        this.guildName = "";
        this.level = 0;
        this.name = "";
        this.roster = new Array();
        this.stats = new Array();
        this.updated = new Date();
    }
    return Member;
}());
var MemberStats = /** @class */ (function () {
    function MemberStats() {
        this.index = 0;
        this.name = "";
        this.value = 0;
    }
    return MemberStats;
}());
var Arena = /** @class */ (function () {
    function Arena() {
        this.char = new ArenaHelper();
        this.ship = new ArenaHelper();
    }
    return Arena;
}());
var ArenaHelper = /** @class */ (function () {
    function ArenaHelper() {
        this.rank = 0;
        this.squad = new Array();
    }
    return ArenaHelper;
}());
var ArenaChar = /** @class */ (function () {
    function ArenaChar() {
        this.id = "";
        this.defId = "";
        this.type = 0;
    }
    return ArenaChar;
}());

var Charakter = /** @class */ (function () {
    function Charakter() {
        this.defId = "";
        this.equipped = new Array();
        this.gear = 0;
        this.gp = 0;
        this.id = "";
        this.level = 0;
        this.mods = new Array();
        this.nameKey = "";
        this.rarity = 0;
        this.skills = new Array();
        this.combatType = 0;
        this.xp = 0;
    }
    return Charakter;
}());

var MappedCharakter = /** @class */ (function () {
    function MappedCharakter() {
    }
    return MappedCharakter;
}());

var Gear = /** @class */ (function () {
    function Gear() {
        this.equipmentId = "";
        this.slot = 0;
    }
    return Gear;
}());
var Mod = /** @class */ (function () {
    function Mod() {
        this.id = "";
        this.level = 0;
        this.pips = 0;
        this.primaryStat = new ModPrimaryStat();
        this.secondaryStat = new Array();
        this.set = 0;
        this.tier = 0;
        this.slot = 0;
    }
    return Mod;
}());
var ModPrimaryStat = /** @class */ (function () {
    function ModPrimaryStat() {
        this.unitStat = 0;
        this.value = 0;
    }
    return ModPrimaryStat;
}());

var ModSecondaryStat = /** @class */ (function () {
    function ModSecondaryStat() {
        this.roll = 0;
        this.unitStat = 0;
        this.value = 0;
    }
    return ModSecondaryStat;
}());

var Skill = /** @class */ (function () {
    function Skill() {
        this.id = "";
        this.isZeta = false;
        this.nameKey = "";
        this.tier = 0;
    }
    return Skill;
}());

var squad = /** @class */ (function () {
    function squad() {
        this.Name = 'SquadName';
        this.Charaktere = new Array();
    }
    return squad;
}());

var loginResponse = /** @class */ (function () {
    function loginResponse() {
    }
    return loginResponse;
}());
var ArenaTeamHelper = /** @class */ (function () {
    function ArenaTeamHelper() {
        this.besitzer = "";
        this.rang = 100000;
        this.charaktere = new Array();
    }
    return ArenaTeamHelper;
}());

var CharFindHelper = /** @class */ (function () {
    function CharFindHelper() {
        this.besitzer = "";
        this.charakter = new Charakter();
    }
    return CharFindHelper;
}());

var Schedule = /** @class */ (function () {
    function Schedule() {
    }
    return Schedule;
}());

var SWGOHEventWrapper = /** @class */ (function () {
    function SWGOHEventWrapper() {
    }
    return SWGOHEventWrapper;
}());

var SWGOHEvent = /** @class */ (function () {
    function SWGOHEvent() {
    }
    return SWGOHEvent;
}());



/***/ }),

/***/ "./src/app/services/settingsService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/settingsService.ts ***!
  \*********************************************/
/*! exports provided: SettingsService, Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = new Settings();
    }
    SettingsService.prototype.getSettings = function () {
        if (localStorage.midiSettings != null)
            this.settings = JSON.parse(localStorage.midiSettings);
        return this.settings;
    };
    SettingsService.prototype.saveSettings = function (settings) {
        localStorage.midiSettings = JSON.stringify(settings);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());

var Settings = /** @class */ (function () {
    function Settings() {
        this.allycode = "";
        this.sortMemberBy = "OGM";
        this.showErrors = true;
        this.loadSync = true;
        this.useAutoComplete = true;
        this.autoSyncNow = false;
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/settings/setting.css":
/*!**************************************!*\
  !*** ./src/app/settings/setting.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n  width: 100%;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  float: left;\r\n  left: 155px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  /*font-size: 22px;*/\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  top: -50px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top:12px;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  float: left;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUUsd0NBQXdDOztBQUN4QztJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7QUFFRiw2QkFBNkI7O0FBQzdCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUEsK0NBQStDOztBQUMvQztFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQSx3REFBd0Q7O0FBQ3hEO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDZEQUE2RDs7QUFDN0Q7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBRWhDLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBsZWZ0OiAxNTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKmZvbnQtc2l6ZTogMjJweDsqL1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG9wOiAtNTBweDtcclxufVxyXG5cclxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xyXG4gIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDoxMnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDlweDtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn0gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/settings/setting.ts":
/*!*************************************!*\
  !*** ./src/app/settings/setting.ts ***!
  \*************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SettingComponent = /** @class */ (function () {
    function SettingComponent(settingsService, router) {
        this.settingsService = settingsService;
        this.router = router;
        this.settings = this.settingsService.getSettings();
    }
    SettingComponent.prototype.saveSettings = function () {
        this.settings.autoSyncNow = true;
        this.settingsService.saveSettings(this.settings);
        this.router.navigate(['./home']);
    };
    SettingComponent.prototype.changedAllycode = function () {
        if (this.settings.allycode != "" && this.settings.allycode != null) {
            var numb = this.settings.allycode.match(/\d/g);
            this.settings.allycode = numb.join("");
        }
    };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'setting',
            template: __webpack_require__(/*! raw-loader!./setting.html */ "./node_modules/raw-loader/index.js!./src/app/settings/setting.html"),
            styles: [__webpack_require__(/*! ./setting.css */ "./src/app/settings/setting.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/shipSearch/shipSearch.css":
/*!*******************************************!*\
  !*** ./src/app/shipSearch/shipSearch.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -78px;\r\n  left: -88px;\r\n  border-radius: 50%;\r\n  transform: scale(0.2, 0.2);\r\n  -ms-transform: scale(0.2, 0.2);\r\n  -webkit-transform: scale(0.2, 0.2);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcFNlYXJjaC9zaGlwU2VhcmNoLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHNC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O0VBQ2xDLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NoaXBTZWFyY2gvc2hpcFNlYXJjaC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4jcmFpZHBsYW5uZXJUYWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYXJlbnRPZkltYWdlcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLnN0ZXJuZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGVybjEge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiAtNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4yIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNnB4O1xyXG59XHJcblxyXG4uc3Rlcm4zIHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAxN3B4O1xyXG59XHJcblxyXG4uc3Rlcm40IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Rlcm41IHtcclxuICB0b3A6IDhweDtcclxuICBsZWZ0OiA0NHB4O1xyXG59XHJcblxyXG4uc3Rlcm42IHtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNTdweDtcclxufVxyXG5cclxuLnN0ZXJuNyB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGxlZnQ6IDY3cHg7XHJcbn1cclxuXHJcbi5tYWluY2hhckZpZWxkc2V0e1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5nZWFySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbn1cclxuXHJcbi5jaGFySW1hZ2Uge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTc4cHg7XHJcbiAgbGVmdDogLTg4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMiwgMC4yKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xyXG59XHJcblxyXG4uY2hhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDI1NztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2hhci1nZWFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXZGb3JDaGFyIHtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMTZweCAzMnB4OyovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHRvcDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkSW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMzA0cHg7XHJcbiAgbGVmdDogLTM1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTVweDtcclxuICBsZWZ0OiA2NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shipSearch/shipSearch.ts":
/*!******************************************!*\
  !*** ./src/app/shipSearch/shipSearch.ts ***!
  \******************************************/
/*! exports provided: ShipSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipSearchComponent", function() { return ShipSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var ShipSearchComponent = /** @class */ (function () {
    function ShipSearchComponent(settingsService, GildenService) {
        this.settingsService = settingsService;
        this.GildenService = GildenService;
        this.showMods = new Array();
    }
    ShipSearchComponent.prototype.searchCharaktere = function () {
        if (this.charToSearch != null && this.charToSearch != "" && this.charToSearch.length > 1)
            this.charaktere = this.GildenService.getAllShipsByName(this.charToSearch);
    };
    ShipSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'shipSearch',
            template: __webpack_require__(/*! raw-loader!./shipSearch.html */ "./node_modules/raw-loader/index.js!./src/app/shipSearch/shipSearch.html"),
            styles: [__webpack_require__(/*! ./shipSearch.css */ "./src/app/shipSearch/shipSearch.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ShipSearchComponent);
    return ShipSearchComponent;
}());



/***/ }),

/***/ "./src/app/skInternal/skinternal.css":
/*!*******************************************!*\
  !*** ./src/app/skInternal/skinternal.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tJbnRlcm5hbC9za2ludGVybmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7OztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7OztBQUVBLDJCQUEyQjs7O0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7RUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0FBQzFEOzs7QUFFQSxrQkFBa0I7OztBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHFFQUFxRTtFQUNyRSxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQjtBQUNGOzs7QUFFQSxrQkFBa0I7OztBQUNsQjtFQUNFO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7O0VBRUE7SUFDRSxNQUFNO0lBQ047RUFDRjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7O0VBRUE7SUFDRSxNQUFNO0lBQ047RUFDRjtBQUNGOzs7QUFFQSxxQkFBcUI7OztBQUNyQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7O0FBRUU7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOzs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9za0ludGVybmFsL3NraW50ZXJuYWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFyZW50T2ZJbWFnZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5jaGFySW1hZ2Uge1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTI1cHg7XHJcbiAgbGVmdDogLTI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC40LCAwLjQpO1xyXG59XHJcblxyXG4uc3RhcjExIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogNnB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMjFweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNweDtcclxuICBsZWZ0OiAzOXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA0OHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBsZWZ0OiA1NXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5nZWFySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wcHg7XHJcbiAgbGVmdDogLTBweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG59XHJcblxyXG4uY2hhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NDI1NztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2hhci1nZWFyLWxldmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUvMTMwJSAxMzAlIDE1cHggMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjVweDtcclxuICB0b3A6IDU1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogMTVweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kaXZGb3JDaGFyIHtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnByb2dyZXNzVGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzJweDtcclxuICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLyptYXJnaW46IDRweCAycHg7Ki9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCAoYmFja2dyb3VuZCkgKi9cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDExOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDUwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG59XHJcblxyXG4vKiBNb2RhbCBDb250ZW50ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzXHJcbn1cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiAgLmNsb3NlOmhvdmVyLFxyXG4gIC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG59XHJcblxyXG5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICBib3JkZXI6IDA7XHJcbiAgdG9wOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWRJbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zMDRweDtcclxuICBsZWZ0OiAtMzUwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGExIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuLnpldGEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIGxlZnQ6IDY1cHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/skInternal/skinternal.ts":
/*!******************************************!*\
  !*** ./src/app/skInternal/skinternal.ts ***!
  \******************************************/
/*! exports provided: SKInternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKInternalComponent", function() { return SKInternalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var devextreme_data_odata_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/data/odata/context */ "./node_modules/devextreme/data/odata/context.js");
/* harmony import */ var devextreme_data_odata_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_odata_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "./node_modules/devextreme/data/data_source.js");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);






var SKInternalComponent = /** @class */ (function () {
    function SKInternalComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.dmgP4 = 100;
        this.context = new devextreme_data_odata_context__WEBPACK_IMPORTED_MODULE_4___default.a({
            url: "https://schattenkollektiv.gear.host/",
            entities: {
                internalGuildTracking: {
                    key: "ID",
                    keyType: "int"
                }
            },
            version: 4
        });
        this.currentfield = "arenarank";
        this.fieldNames = [
            "arenarank",
            "fleetrank",
            "overallGM",
            "charGM",
            "fleetGM",
            "spenden"
        ];
        //http://schattenkollektiv.gear.host/internalGuildTracking?
        var lastweek = (function (d) { return new Date(d.setDate(d.getDate() - 8)); })(new Date);
        this.dataSource = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            store: this.context['internalGuildTracking'],
            pageSize: 10000,
            filter: ["timestamp", ">=", lastweek]
        });
    }
    SKInternalComponent.prototype.onLegendClick = function (e) {
        var series = e.target;
        if (series.isVisible()) {
            series.hide();
        }
        else {
            series.show();
        }
    };
    SKInternalComponent.prototype.resetFilters = function () {
        console.log("resetFilters");
        var filter = this.dataSource.filter();
        if (filter != null) {
            var lastweek = (function (d) { return new Date(d.setDate(d.getDate() - 8)); })(new Date);
            this.dataSource.filter(["timestamp", ">=", lastweek]);
            this.dataSource.load();
        }
    };
    SKInternalComponent.prototype.onSeriesClick = function (e) {
        var series = e.target;
        if (series.isVisible()) {
            series.hide();
        }
        else {
            series.show();
        }
    };
    SKInternalComponent.prototype.maxValChanged = function (e, fieldname, skinternalChart) {
        var lastweek = (function (d) { return new Date(d.setDate(d.getDate() - 8)); })(new Date);
        this.dataSource.filter([[fieldname, "<=", e.value], ["timestamp", ">=", lastweek]]);
        this.dataSource.load();
    };
    SKInternalComponent.prototype.customizeTooltip = function (arg) {
        console.log(arg);
        return {
            text: arg.seriesName + ": " + arg.valueText
        };
    };
    SKInternalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'skinternal',
            template: __webpack_require__(/*! raw-loader!./skinternal.html */ "./node_modules/raw-loader/index.js!./src/app/skInternal/skinternal.html"),
            styles: [__webpack_require__(/*! ./skinternal.css */ "./src/app/skInternal/skinternal.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], SKInternalComponent);
    return SKInternalComponent;
}());



/***/ }),

/***/ "./src/app/squadSearch/squadsearch.css":
/*!*********************************************!*\
  !*** ./src/app/squadSearch/squadsearch.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 37px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 21px;\r\n  left: -5px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n/* Add Animation */\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3F1YWRTZWFyY2gvc3F1YWRzZWFyY2guY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtF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aUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3F1YWRTZWFyY2gvc3F1YWRzZWFyY2guY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBhcmVudE9mSW1hZ2VzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yNXB4O1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLnN0YXIxMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMTNweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjEzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDIxcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnN0YXIxNCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5zdGFyMTUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zcHg7XHJcbiAgbGVmdDogMzlweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogNDhweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3RhcjE3IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogNTVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uemV0YTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM3cHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi56ZXRhMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjFweDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi56ZXRhMyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMHB4O1xyXG4gIGxlZnQ6IC0wcHg7XHJcbiAgei1pbmRleDogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qbWFyZ2luOiA0cHggMnB4OyovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40c1xyXG59XHJcblxyXG4vKiBBZGQgQW5pbWF0aW9uICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRvcDogLTMwMHB4O1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAycHggMTZweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/squadSearch/squadsearch.ts":
/*!********************************************!*\
  !*** ./src/app/squadSearch/squadsearch.ts ***!
  \********************************************/
/*! exports provided: SquadSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadSearchComponent", function() { return SquadSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");




var SquadSearchComponent = /** @class */ (function () {
    function SquadSearchComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.myTeams = new Array();
        this.autoCompleteConfig = {
            displayKey: "name",
            search: true //enables the search plugin to search in the list
        };
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
        }
        else {
            this.selectedTeam = this.myTeams[0];
        }
        this.getSquadsFromGildenInfos();
    }
    SquadSearchComponent.prototype.getMyTeams = function () {
        if (localStorage.midiMyTeams != null)
            this.myTeams = JSON.parse(localStorage.midiMyTeams);
    };
    SquadSearchComponent.prototype.saveMyTeams = function () {
        localStorage.midiMyTeams = JSON.stringify(this.myTeams);
    };
    // When the user clicks the button, open the modal 
    SquadSearchComponent.prototype.openModal = function () {
        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    SquadSearchComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    SquadSearchComponent.prototype.deleteThisTeam = function () {
        var index = this.myTeams.indexOf(this.selectedTeam);
        if (index > -1) {
            this.myTeams.splice(index, 1);
        }
        this.saveMyTeams();
    };
    SquadSearchComponent.prototype.addSquadToMyTeams = function () {
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
    };
    SquadSearchComponent.prototype.getSquadsFromGildenInfos = function () {
        this.squadsFromGildenInfos = this.gildenService.findSquads(this.selectedTeam);
    };
    SquadSearchComponent.prototype.roundNumber = function (number) {
        return Math.round(number);
    };
    SquadSearchComponent.prototype.getPowerOfSquad = function (charakters) {
        var tempPower = 0;
        for (var i = 0; i < charakters.length; i++) {
            tempPower += charakters[i].Power;
        }
        return tempPower;
    };
    SquadSearchComponent.prototype.formatGearLevel = function (level) {
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
    };
    SquadSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'squadsearch',
            template: __webpack_require__(/*! raw-loader!./squadsearch.html */ "./node_modules/raw-loader/index.js!./src/app/squadSearch/squadsearch.html"),
            styles: [__webpack_require__(/*! ./squadsearch.css */ "./src/app/squadSearch/squadsearch.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], SquadSearchComponent);
    return SquadSearchComponent;
}());

var squad = /** @class */ (function () {
    function squad() {
        this.Name = 'SquadName';
        this.Charaktere = new Array();
    }
    return squad;
}());


/***/ }),

/***/ "./src/app/zetas/zetas.css":
/*!*********************************!*\
  !*** ./src/app/zetas/zetas.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -13px;\r\n  left: -24px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvemV0YXMvemV0YXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsU0FBUztBQUNYOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RC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VTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvemV0YXMvemV0YXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuI3JhaWRwbGFubmVyVGFibGUgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbiNyYWlkcGxhbm5lclRhYmxlIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFyZW50T2ZJbWFnZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zdGVybmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3Rlcm4xIHtcclxuICB0b3A6IDI1cHg7XHJcbiAgbGVmdDogLTZweDtcclxufVxyXG5cclxuLnN0ZXJuMiB7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDZweDtcclxufVxyXG5cclxuLnN0ZXJuMyB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMTdweDtcclxufVxyXG5cclxuLnN0ZXJuNCB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLnN0ZXJuNSB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogNDRweDtcclxufVxyXG5cclxuLnN0ZXJuNiB7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDU3cHg7XHJcbn1cclxuXHJcbi5zdGVybjcge1xyXG4gIHRvcDogMjVweDtcclxuICBsZWZ0OiA2N3B4O1xyXG59XHJcblxyXG4ubWFpbmNoYXJGaWVsZHNldHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uZ2VhckltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG59XHJcblxyXG4uY2hhckltYWdlIHtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IC0yNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjQsIDAuNCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNCwgMC40KTtcclxufVxyXG5cclxuLmNoYXItbGV2ZWwge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjQyNTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJS8xMzAlIDEzMCUgMTVweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgbGVmdDogNDBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmNoYXItZ2Vhci1sZXZlbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYwMDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlLzEzMCUgMTMwJSAxNXB4IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiA2NXB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uZGl2Rm9yQ2hhciB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsZWZ0OiAtMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9ncmVzczEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2Q2ZmY7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMTNweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzc1RleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDcycHg7XHJcbiAgbGVmdDogMjNweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKnBhZGRpbmc6IDE2cHggMzJweDsqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvKm1hcmdpbjogNHB4IDJweDsqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogNTBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKi9cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHNcclxufVxyXG5cclxuLyogQWRkIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0b3A6IC0zMDBweDtcclxuICAgIG9wYWNpdHk6IDBcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuXHJcbnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gIGJvcmRlcjogMDtcclxuICB0b3A6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTMwNHB4O1xyXG4gIGxlZnQ6IC0zNTBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDAuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSwgMC4xKTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uemV0YTMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1cHg7XHJcbiAgbGVmdDogNjVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/zetas/zetas.ts":
/*!********************************!*\
  !*** ./src/app/zetas/zetas.ts ***!
  \********************************/
/*! exports provided: ZetasComponent, ZetaReportHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZetasComponent", function() { return ZetasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZetaReportHelper", function() { return ZetaReportHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");



var ZetasComponent = /** @class */ (function () {
    function ZetasComponent(GildenService) {
        this.GildenService = GildenService;
        var allZetasTemps = new Array();
        for (var i = 0; i < GildenService.gildenInfos.roster.length; i++) {
            var allZetaCharsNow = GildenService.gildenInfos.roster[i].roster.filter(function (char) { return char.skills.find(function (skill) { return skill.isZeta == true && skill.tier == 8; }); });
            if (allZetaCharsNow != null) {
                for (var x = 0; x < allZetaCharsNow.length; x++) {
                    var CharName = allZetaCharsNow[x].nameKey;
                    for (var z = 0; z < allZetaCharsNow[x].skills.length; z++) {
                        if (allZetaCharsNow[x].skills[z].isZeta == true && allZetaCharsNow[x].skills[z].tier == 8) {
                            var tempZetaReporter = allZetasTemps.find(function (skill) { return skill.skillName == allZetaCharsNow[x].skills[z].nameKey; });
                            if (tempZetaReporter != null) {
                                tempZetaReporter.anzahl++;
                                tempZetaReporter.Membernames.push(GildenService.gildenInfos.roster[i].name);
                            }
                            else {
                                var ZetaNow = new ZetaReportHelper();
                                ZetaNow.CharName = CharName;
                                ZetaNow.anzahl = 1;
                                ZetaNow.skillName = allZetaCharsNow[x].skills[z].nameKey;
                                ZetaNow.Membernames = new Array();
                                ZetaNow.Membernames.push(GildenService.gildenInfos.roster[i].name);
                                allZetasTemps.push(ZetaNow);
                            }
                        }
                    }
                }
            }
        }
        allZetasTemps.sort(function (a, b) {
            return b.anzahl - a.anzahl;
        });
        this.allZetas = allZetasTemps;
        console.log(this.allZetas);
    }
    ZetasComponent.prototype.ShowMemberNames = function (data) {
        var tempString = "";
        tempString += data.data.skillName + ": \n\r";
        for (var u = 0; u < data.data.Membernames.length; u++) {
            tempString += data.data.Membernames[u] + "\n\r";
        }
        alert(tempString);
    };
    ZetasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'zetas',
            template: __webpack_require__(/*! raw-loader!./zetas.html */ "./node_modules/raw-loader/index.js!./src/app/zetas/zetas.html"),
            styles: [__webpack_require__(/*! ./zetas.css */ "./src/app/zetas/zetas.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
    ], ZetasComponent);
    return ZetasComponent;
}());

var ZetaReportHelper = /** @class */ (function () {
    function ZetaReportHelper() {
    }
    return ZetaReportHelper;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Midi\source\repos\SWGOH\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map