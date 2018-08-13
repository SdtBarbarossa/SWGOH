(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/RaidPlanner/raidplanner.css":
/*!*********************************************!*\
  !*** ./src/app/RaidPlanner/raidplanner.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.html":
/*!**********************************************!*\
  !*** ./src/app/RaidPlanner/raidplanner.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!raidDataSource\">Lädt Raidplan...</div>\r\n\r\n<dx-data-grid *ngIf=\"raidDataSource\"\r\n              [dataSource]=\"raidDataSource\"\r\n              [allowColumnReordering]=\"true\"\r\n              [showBorders]=\"true\"\r\n              (onCellPrepared)=\"colorizeCell($event)\">\r\n\r\n  <dxo-filter-row [visible]=\"true\"></dxo-filter-row>\r\n  <dxo-scrolling mode=\"infinite\"></dxo-scrolling>\r\n  <dxo-state-storing [enabled]=\"true\" type=\"localStorage\" storageKey=\"gridstorage\"></dxo-state-storing>\r\n\r\n  <dxo-column-chooser [enabled]=\"true\"\r\n                      mode=\"dragAndDrop\">\r\n  </dxo-column-chooser>\r\n\r\n  <dxi-column *ngFor=\"let columnNow of columns; let i = index\" dataField=\"{{i}}\" [caption]=\"columnNow\" [width]=\"i | columnwidth\" [dataType]=\"i | columntype\" [fixed]=\"i | columnfixed\"></dxi-column>\r\n\r\n</dx-data-grid>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaidPlannerComponent = /** @class */ (function () {
    function RaidPlannerComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.dmgP4 = 100;
        this.columns = new Array();
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
        this.loadGridDatasource();
    }
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
    RaidPlannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'raidplanner',
            template: __webpack_require__(/*! ./raidplanner.html */ "./src/app/RaidPlanner/raidplanner.html"),
            styles: [__webpack_require__(/*! ./raidplanner.css */ "./src/app/RaidPlanner/raidplanner.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#platoons tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#platoons tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#platoons th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.html":
/*!*********************************************!*\
  !*** ./src/app/TBPlatoons/platoontool.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n\r\n  <select style=\"width:100%;\" [(ngModel)]=\"ActualPhase\" (ngModelChange)=\"loadTable()\">\r\n    <option [ngValue]=\"DSTB1\">DS-TB-Phase 1</option>\r\n    <option [ngValue]=\"DSTB2\">DS-TB-Phase 2</option>\r\n    <option [ngValue]=\"DSTB3\">DS-TB-Phase 3</option>\r\n    <option [ngValue]=\"LSTB1\">LS-TB-Phase 1</option>\r\n    <option [ngValue]=\"LSTB2\">LS-TB-Phase 2</option>\r\n    <option [ngValue]=\"LSTB3\">LS-TB-Phase 3</option>\r\n    <option [ngValue]=\"AllChars1\">All Chars - 1 Star</option>\r\n    <option [ngValue]=\"AllChars2\">All Chars - 2 Star</option>\r\n    <option [ngValue]=\"AllChars3\">All Chars - 3 Star</option>\r\n    <option [ngValue]=\"AllChars4\">All Chars - 4 Star</option>\r\n    <option [ngValue]=\"AllChars5\">All Chars - 5 Star</option>\r\n    <option [ngValue]=\"AllChars6\">All Chars - 6 Star</option>\r\n    <option [ngValue]=\"AllChars7\">All Chars - 7 Star</option>\r\n  </select>\r\n\r\n  <table id=\"platoons\" style=\"width:100%\">\r\n    <tr>\r\n      <th>{{'Charname'| language}}</th>\r\n      <th>{{'Needed'| language}}</th>\r\n      <th>{{'Available'| language}}</th>\r\n      <th>{{'Difference'| language}}</th>\r\n      <th>{{'Stars Needed'| language}}</th>\r\n    </tr>\r\n    <tr *ngFor=\"let neededChar of ActualPhase\">\r\n      <td ><a (click)=\"showMembersWhoHave(neededChar)\" href=\"javascript:void();\">{{neededChar.name}}</a></td>\r\n      <td>{{neededChar.benoetigt}}</td>\r\n\r\n      <td *ngIf=\"neededChar.benoetigt > neededChar.gildenbesitz\" style=\"background:red\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt == neededChar.gildenbesitz)\" style=\"background:orange\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt < neededChar.gildenbesitz) && !(neededChar.benoetigt*2 <= neededChar.gildenbesitz)\" style=\"background:yellow\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"neededChar.benoetigt*2 <= neededChar.gildenbesitz\" style=\"background:green\">{{neededChar.gildenbesitz}}</td>\r\n      <td>{{neededChar.differenz}}</td>\r\n      <td>{{neededChar.sterne}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.DSTB1 = new Array();
        this.DSTB2 = new Array();
        this.DSTB3 = new Array();
        this.LSTB1 = new Array();
        this.LSTB2 = new Array();
        this.LSTB3 = new Array();
        for (var x = 0; x < gildenService.charInfos.length; x++) {
            this.AllChars1.push(new neededChar(gildenService.charInfos[x].name, 10, 1, false));
            this.AllChars2.push(new neededChar(gildenService.charInfos[x].name, 10, 2, false));
            this.AllChars3.push(new neededChar(gildenService.charInfos[x].name, 10, 3, false));
            this.AllChars4.push(new neededChar(gildenService.charInfos[x].name, 10, 4, false));
            this.AllChars5.push(new neededChar(gildenService.charInfos[x].name, 10, 5, false));
            this.AllChars6.push(new neededChar(gildenService.charInfos[x].name, 10, 6, false));
            this.AllChars7.push(new neededChar(gildenService.charInfos[x].name, 10, 7, false));
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
    TBPlatoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'platoontool',
            template: __webpack_require__(/*! ./platoontool.html */ "./src/app/TBPlatoons/platoontool.html"),
            styles: [__webpack_require__(/*! ./platoontool.css */ "./src/app/TBPlatoons/platoontool.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _settings_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/setting */ "./src/app/settings/setting.ts");
/* harmony import */ var _charSearch_charsearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charSearch/charsearch */ "./src/app/charSearch/charsearch.ts");
/* harmony import */ var _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./squadSearch/squadsearch */ "./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TBPlatoons/platoontool */ "./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RaidPlanner/raidplanner */ "./src/app/RaidPlanner/raidplanner.ts");
/* harmony import */ var _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arenaTeams/arenaTeams */ "./src/app/arenaTeams/arenaTeams.ts");
/* harmony import */ var _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./newCharSearch/newCharSearch */ "./src/app/newCharSearch/newCharSearch.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'settings',
        component: _settings_setting__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]
    },
    {
        path: 'charsearch',
        component: _charSearch_charsearch__WEBPACK_IMPORTED_MODULE_4__["CharSearchComponent"]
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
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n      background-color: #111;\r\n    }\r\n\r\n/* The side navigation menu */\r\n\r\n.sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 0; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Stay on top */\r\n  top: 0; /* Stay at the top */\r\n  left: 0;\r\n  background-color: #111; /* Black*/\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  transition: 0.2s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n\r\n.sidenav a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n/* Position and style the close button (top right corner) */\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n\r\n#main {\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Home' | language}}</a>\r\n  <a routerLink=\"/newCharSearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Charsearch' | language}}</a>\r\n  <a routerLink=\"/squadsearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Squadsearch' | language}}</a>\r\n  <a routerLink=\"/platoontool\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'TB-Platoon' | language}}</a>\r\n  <a routerLink=\"/raidplanner\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Raid-Planner' | language}}</a>\r\n  <a routerLink=\"/arenateams\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'ArenaTeams' | language}}</a>\r\n  <a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Settings' | language}}</a>\r\n</div>\r\n\r\n<!-- Use any element to open the sidenav -->\r\n<div>\r\n  <ul>\r\n    <li>\r\n      <a href=\"javascript:void(0)\" (click)=\"openNav()\">&#9776;</a>\r\n    </li>\r\n    <li style=\"float:right\"><a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">{{'Settings' | language}}</a></li>\r\n  </ul>\r\n  <div style=\"height:40px;\">\r\n\r\n  </div>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  </div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_1__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_2__["gildenService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home */ "./src/app/home/home.ts");
/* harmony import */ var _settings_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/setting */ "./src/app/settings/setting.ts");
/* harmony import */ var _charSearch_charsearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charSearch/charsearch */ "./src/app/charSearch/charsearch.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./squadSearch/squadsearch */ "./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TBPlatoons/platoontool */ "./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RaidPlanner/raidplanner */ "./src/app/RaidPlanner/raidplanner.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./arenaTeams/arenaTeams */ "./src/app/arenaTeams/arenaTeams.ts");
/* harmony import */ var _pipes_charpipe_gearLink_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/charpipe/gearLink.pipe */ "./src/app/pipes/charpipe/gearLink.pipe.ts");
/* harmony import */ var _pipes_charpipe_charName_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/charpipe/charName.pipe */ "./src/app/pipes/charpipe/charName.pipe.ts");
/* harmony import */ var _pipes_charpipe_charLink_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/charpipe/charLink.pipe */ "./src/app/pipes/charpipe/charLink.pipe.ts");
/* harmony import */ var _pipes_charpipe_charGear_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/charpipe/charGear.pipe */ "./src/app/pipes/charpipe/charGear.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModSetName_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/modpipes/ModSetName.pipe */ "./src/app/pipes/modpipes/ModSetName.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModStatName_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/modpipes/ModStatName.pipe */ "./src/app/pipes/modpipes/ModStatName.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModStatValue_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/modpipes/ModStatValue.pipe */ "./src/app/pipes/modpipes/ModStatValue.pipe.ts");
/* harmony import */ var _pipes_modpipes_ModSlotName_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/modpipes/ModSlotName.pipe */ "./src/app/pipes/modpipes/ModSlotName.pipe.ts");
/* harmony import */ var _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./newCharSearch/newCharSearch */ "./src/app/newCharSearch/newCharSearch.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _pipes_columnwidth_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/columnwidth.pipe */ "./src/app/pipes/columnwidth.pipe.ts");
/* harmony import */ var _pipes_columntype_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/columntype.pipe */ "./src/app/pipes/columntype.pipe.ts");
/* harmony import */ var _pipes_columnfixed_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/columnfixed.pipe */ "./src/app/pipes/columnfixed.pipe.ts");
/* harmony import */ var _pipes_language_language_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/language/language.pipe */ "./src/app/pipes/language/language.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _settings_setting__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"],
                _charSearch_charsearch__WEBPACK_IMPORTED_MODULE_8__["CharSearchComponent"],
                _squadSearch_squadsearch__WEBPACK_IMPORTED_MODULE_13__["SquadSearchComponent"],
                _TBPlatoons_platoontool__WEBPACK_IMPORTED_MODULE_14__["TBPlatoonComponent"],
                _RaidPlanner_raidplanner__WEBPACK_IMPORTED_MODULE_15__["RaidPlannerComponent"],
                _arenaTeams_arenaTeams__WEBPACK_IMPORTED_MODULE_18__["ArenaTeamsComponent"],
                _newCharSearch_newCharSearch__WEBPACK_IMPORTED_MODULE_27__["newCharSearchComponent"],
                //Pipes here
                _pipes_charpipe_gearLink_pipe__WEBPACK_IMPORTED_MODULE_19__["gearLinkPipe"],
                _pipes_charpipe_charName_pipe__WEBPACK_IMPORTED_MODULE_20__["CharNamePipe"],
                _pipes_charpipe_charLink_pipe__WEBPACK_IMPORTED_MODULE_21__["CharImageLinkPipe"],
                _pipes_charpipe_charGear_pipe__WEBPACK_IMPORTED_MODULE_22__["CharGearPipe"],
                _pipes_modpipes_ModSetName_pipe__WEBPACK_IMPORTED_MODULE_23__["ModSetNamePipe"],
                _pipes_modpipes_ModStatName_pipe__WEBPACK_IMPORTED_MODULE_24__["ModStatNamePipe"],
                _pipes_modpipes_ModStatValue_pipe__WEBPACK_IMPORTED_MODULE_25__["ModStatValuePipe"],
                _pipes_modpipes_ModSlotName_pipe__WEBPACK_IMPORTED_MODULE_26__["ModSlotNamePipe"],
                _pipes_columnwidth_pipe__WEBPACK_IMPORTED_MODULE_29__["ColumnWidthPipe"],
                _pipes_columntype_pipe__WEBPACK_IMPORTED_MODULE_30__["ColumnTypePipe"],
                _pipes_columnfixed_pipe__WEBPACK_IMPORTED_MODULE_31__["ColumnFixedPipe"],
                _pipes_language_language_pipe__WEBPACK_IMPORTED_MODULE_32__["LanguagePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientJsonpModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_16__["SelectDropDownModule"],
                ng_lz_string__WEBPACK_IMPORTED_MODULE_17__["LZStringModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxDataGridModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxTextAreaModule"]
            ],
            providers: [_services_settingsService__WEBPACK_IMPORTED_MODULE_10__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_11__["gildenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"], ng_lz_string__WEBPACK_IMPORTED_MODULE_17__["LZStringService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -13px;\r\n  left: -24px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/arenaTeams/arenaTeams.html":
/*!********************************************!*\
  !*** ./src/app/arenaTeams/arenaTeams.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let team of AllCharTeams;let i = index\" class=\"charNow\">\r\n  <fieldset>\r\n    <legend>{{team.besitzer}} {{'WithRank' | language}} {{team.rang}}</legend>\r\n    <fieldset *ngFor=\"let char of team.charaktere\" class=\"maincharFieldset\">\r\n      <legend>{{char | charname}}</legend>\r\n      <div style=\"height:60px;\">\r\n        <img *ngIf=\"char.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n        <img *ngIf=\"char.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n        <img *ngIf=\"char.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n        <img *ngIf=\"char.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n        <img *ngIf=\"char.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n        <img *ngIf=\"char.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n        <img *ngIf=\"char.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n        <img *ngIf=\"char.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n        <img class=\"charImage\" [src]=\"char | charimagelink\" [alt]=\"char | charname\">\r\n        <img class=\"gearImage\" [src]=\"char | gearlink\" [alt]=\"char | charname\">\r\n        <span class=\"char-level\">{{char.level}}</span>\r\n        <span class=\"char-gear-level\">{{char | chargear}}</span>\r\n      </div>\r\n\r\n      <button (click)=\"showMods[i] = !showMods[i]\">{{'Show/Hide'| language}}</button>\r\n\r\n      <div *ngIf=\"showMods[i]\">\r\n        <fieldset *ngFor=\"let mod of char.mods\" style=\"position:relative; float:left;\">\r\n          <legend>{{(mod.setId | modsetname) | language}}-{{(mod.slot | modslotname) | language}} L:{{mod.level}} S:{{mod.pips}}</legend>\r\n          <div style=\"color:blue\">{{(mod.primaryBonusType | modstatname) | language}}: {{mod.primaryBonusValue | modstatvalue : (mod.primaryBonusType | modstatname)}}</div>\r\n          <div>{{(mod.secondaryType_1 | modstatname) | language}}: {{mod.secondaryValue_1 | modstatvalue : (mod.secondaryType_1 | modstatname)}}</div>\r\n          <div>{{(mod.secondaryType_2 | modstatname) | language}}: {{mod.secondaryValue_2 | modstatvalue : (mod.secondaryType_2 | modstatname)}}</div>\r\n          <div>{{(mod.secondaryType_3 | modstatname) | language}}: {{mod.secondaryValue_3 | modstatvalue : (mod.secondaryType_3 | modstatname)}}</div>\r\n          <div>{{(mod.secondaryType_4 | modstatname) | language}}: {{mod.secondaryValue_4 | modstatvalue : (mod.secondaryType_4 | modstatname)}}</div>\r\n        </fieldset>\r\n        </div>\r\n    </fieldset>\r\n  </fieldset>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArenaTeamsComponent = /** @class */ (function () {
    function ArenaTeamsComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.showMods = new Array();
        this.AllCharTeams = gildenService.getAllCharArenaTeams();
        this.AllCharTeams.sort(function (a, b) { return a.rang - b.rang; });
    }
    ArenaTeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'arenaTeams',
            template: __webpack_require__(/*! ./arenaTeams.html */ "./src/app/arenaTeams/arenaTeams.html"),
            styles: [__webpack_require__(/*! ./arenaTeams.css */ "./src/app/arenaTeams/arenaTeams.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
    ], ArenaTeamsComponent);
    return ArenaTeamsComponent;
}());



/***/ }),

/***/ "./src/app/charSearch/charsearch.css":
/*!*******************************************!*\
  !*** ./src/app/charSearch/charsearch.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: -25px;\r\n  left: 0;\r\n}\r\n\r\n.charImage {\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0px;\r\n  border-radius: 50%;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 25px;\r\n  left: 25px;\r\n  z-index: 0;\r\n  transform: scale(1.2, 1.2);\r\n  -ms-transform: scale(1.2, 1.2);\r\n  -webkit-transform: scale(1.2, 1.2);\r\n}\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 70px;\r\n  top: 78px;\r\n  z-index: 3;\r\n  width: 30px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 43px;\r\n  top: 90px;\r\n  z-index: 3;\r\n  width: 30px;\r\n  padding: 0 5px;\r\n}\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 115px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/charSearch/charsearch.html":
/*!********************************************!*\
  !*** ./src/app/charSearch/charsearch.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"{{'CharNamePlaceHolder'| language}}\" [(ngModel)]=\"charToSearch\" (ngModelChange)=\"getCharsFromGildenInfos()\">\r\n\r\n<div *ngFor=\"let char of charsFromGildenInfos\" class=\"charNow\">\r\n  <fieldset style=\"height: 115px;\">\r\n    <legend>{{char.Name}} {{'of'| language}} {{char.Besitzer}}</legend>\r\n    <br />\r\n    <div class=\"parentOfImages\">\r\n      <img *ngIf=\"char.Sterne>0\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<1\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>1\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<2\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>2\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<3\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>3\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<4\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>4\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<5\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>5\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<6\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>6\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<7\" src=\"/assets/picture/nostar.png\">\r\n\r\n      <img *ngIf=\"char.Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n      <img *ngIf=\"char.Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n      <img *ngIf=\"char.Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n      <div class=\"parentOfImages\">\r\n        <img class=\"charImage\" src=\"/assets/picture/{{char.imageUrl}}\" alt=\"{{char.Name}}\">\r\n        <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{char.gearLevel}}.png\" alt=\"{{char.Name}}\">\r\n        <span class=\"char-level\">{{char.Level}}</span>\r\n        <span class=\"char-gear-level\">{{formatGearLevel(char.gearLevel)}}</span>\r\n      </div>\r\n      </div>\r\n      </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/charSearch/charsearch.ts":
/*!******************************************!*\
  !*** ./src/app/charSearch/charsearch.ts ***!
  \******************************************/
/*! exports provided: CharSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharSearchComponent", function() { return CharSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharSearchComponent = /** @class */ (function () {
    function CharSearchComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.charToSearch = "";
    }
    CharSearchComponent.prototype.getCharsFromGildenInfos = function () {
        this.charsFromGildenInfos = this.gildenService.findMappedCharByName(this.charToSearch);
    };
    CharSearchComponent.prototype.roundNumber = function (number) {
        return Math.round(number);
    };
    CharSearchComponent.prototype.formatGearLevel = function (level) {
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
    CharSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charsearch',
            template: __webpack_require__(/*! ./charsearch.html */ "./src/app/charSearch/charsearch.html"),
            styles: [__webpack_require__(/*! ./charsearch.css */ "./src/app/charSearch/charsearch.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
    ], CharSearchComponent);
    return CharSearchComponent;
}());



/***/ }),

/***/ "./src/app/home/home.css":
/*!*******************************!*\
  !*** ./src/app/home/home.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.html":
/*!********************************!*\
  !*** ./src/app/home/home.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h3>\r\n    {{'WelcomeText' | language}}\r\n  </h3>\r\n\r\n  <table *ngIf=\"gildenService.gildenInfos.members>0 && !gildenService.isInSync\" style=\"width: 100%;\">\r\n    <tr>\r\n      <td>{{'AllDataText' | language}} <a href=\"http://swgoh.help\">swgoh.help</a> {{'AllPictureText' | language}} <a href=\"http://www.swgoh.gg\">www.swgoh.gg</a></td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GuildName' | language}} = {{gildenService.gildenInfos.name}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GildenGP' | language}} = {{gildenService.gildenInfos.gp}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>{{'GildenDescription' | language}} = {{gildenService.gildenInfos.desc}}</td>\r\n    </tr>\r\n    <tr> </tr>\r\n    <tr> </tr>\r\n    <tr>\r\n      <td>{{'RaidsPlayed' | language}}:</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Rancor = {{gildenService.gildenInfos.raid.rancor}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>AAT = {{gildenService.gildenInfos.raid.aat}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>STR = {{gildenService.gildenInfos.raid.sith_raid}}</td>\r\n    </tr>\r\n    <tr> </tr>\r\n    <tr> </tr>\r\n    <tr>\r\n      <td>{{'LastSync' | language}} = {{gildenService.gildenInfos.updated | date: \"dd.MM.yyyy HH:mm:ss\"}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div style=\"height:500px\">\r\n    <dx-text-area *ngIf=\"gildenService.isInSync\" style=\"height:100%\" [readOnly]=\"true\" [(value)]=\"gildenService.syncstatus\"></dx-text-area>\r\n  </div>\r\n  \r\n  <h3 *ngIf=\"settingsService.settings.allycode==''\">{{'EnterAllyCode' | language}}</h3>\r\n  <h3 *ngIf=\"gildenService.gildenInfos.members==0&&settingsService.settings.allycode!=''\">{{'PleaseSync' | language}}</h3>\r\n\r\n</div>\r\n\r\n<button (click)=\"syncApi()\" style=\"position: absolute; bottom: 10px; left: 0px;\">{{'Synchronise' | language}} ({{gildenService.isInSync}})</button>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.isSyncing = false;
        console.log(this.settingsService.settings);
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
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/home/home.html"),
            styles: [__webpack_require__(/*! ./home.css */ "./src/app/home/home.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.sterne {\r\n  position: absolute;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.stern1 {\r\n  top: 25px;\r\n  left: -6px;\r\n}\r\n\r\n\r\n.stern2 {\r\n  top: 15px;\r\n  left: 6px;\r\n}\r\n\r\n\r\n.stern3 {\r\n  top: 8px;\r\n  left: 17px;\r\n}\r\n\r\n\r\n.stern4 {\r\n  top: 8px;\r\n  left: 30px;\r\n}\r\n\r\n\r\n.stern5 {\r\n  top: 8px;\r\n  left: 44px;\r\n}\r\n\r\n\r\n.stern6 {\r\n  top: 15px;\r\n  left: 57px;\r\n}\r\n\r\n\r\n.stern7 {\r\n  top: 25px;\r\n  left: 67px;\r\n}\r\n\r\n\r\n.maincharFieldset{\r\n  position:relative;\r\n  float:left;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -13px;\r\n  left: -24px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  /*padding: 16px 32px;*/\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/newCharSearch/newCharSearch.html":
/*!**************************************************!*\
  !*** ./src/app/newCharSearch/newCharSearch.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"{{'CharNamePlaceHolder'| language}}\" [(ngModel)]=\"charToSearch\" (ngModelChange)=\"searchCharaktere()\">\r\n\r\n<div *ngIf=\"charaktere\">\r\n  <fieldset *ngFor=\"let char of charaktere;let i = index\" class=\"maincharFieldset\">\r\n    <legend>{{char.besitzer}}</legend>\r\n    <div style=\"height:60px;\">\r\n      <img *ngIf=\"char.charakter.rarity>0\" src=\"/assets/picture/star.png\" class=\"sterne stern1\">\r\n      <img *ngIf=\"char.charakter.rarity<1\" src=\"/assets/picture/nostar.png\" class=\"sterne stern1\">\r\n      <img *ngIf=\"char.charakter.rarity>1\" src=\"/assets/picture/star.png\" class=\"sterne stern2\">\r\n      <img *ngIf=\"char.charakter.rarity<2\" src=\"/assets/picture/nostar.png\" class=\"sterne stern2\">\r\n      <img *ngIf=\"char.charakter.rarity>2\" src=\"/assets/picture/star.png\" class=\"sterne stern3\">\r\n      <img *ngIf=\"char.charakter.rarity<3\" src=\"/assets/picture/nostar.png\" class=\"sterne stern3\">\r\n      <img *ngIf=\"char.charakter.rarity>3\" src=\"/assets/picture/star.png\" class=\"sterne stern4\">\r\n      <img *ngIf=\"char.charakter.rarity<4\" src=\"/assets/picture/nostar.png\" class=\"sterne stern4\">\r\n      <img *ngIf=\"char.charakter.rarity>4\" src=\"/assets/picture/star.png\" class=\"sterne stern5\">\r\n      <img *ngIf=\"char.charakter.rarity<5\" src=\"/assets/picture/nostar.png\" class=\"sterne stern5\">\r\n      <img *ngIf=\"char.charakter.rarity>5\" src=\"/assets/picture/star.png\" class=\"sterne stern6\">\r\n      <img *ngIf=\"char.charakter.rarity<6\" src=\"/assets/picture/nostar.png\" class=\"sterne stern6\">\r\n      <img *ngIf=\"char.charakter.rarity>6\" src=\"/assets/picture/star.png\" class=\"sterne stern7\">\r\n      <img *ngIf=\"char.charakter.rarity<7\" src=\"/assets/picture/nostar.png\" class=\"sterne stern7\">\r\n\r\n      <img class=\"charImage\" [src]=\"char.charakter | charimagelink\" [alt]=\"char | charname\">\r\n      <img class=\"gearImage\" [src]=\"char.charakter | gearlink\" [alt]=\"char | charname\">\r\n      <span class=\"char-level\">{{char.charakter.level}}</span>\r\n      <span class=\"char-gear-level\">{{char.charakter | chargear}}</span>\r\n    </div>\r\n\r\n    <button (click)=\"showMods[i] = !showMods[i]\">{{'Show/Hide'| language}}</button>\r\n\r\n    <div *ngIf=\"showMods[i]\">\r\n      <fieldset *ngFor=\"let mod of char.charakter.mods\" style=\"position:relative; float:left;\">\r\n        <legend>{{(mod.setId | modsetname) | language}}-{{(mod.slot | modslotname) | language}} L:{{mod.level}} S:{{mod.pips}}</legend>\r\n        <div style=\"color:blue\">{{(mod.primaryBonusType | modstatname) | language}}: {{mod.primaryBonusValue | modstatvalue : (mod.primaryBonusType | modstatname)}}</div>\r\n        <div>{{(mod.secondaryType_1 | modstatname) | language}}: {{mod.secondaryValue_1 | modstatvalue : (mod.secondaryType_1 | modstatname)}}</div>\r\n        <div>{{(mod.secondaryType_2 | modstatname) | language}}: {{mod.secondaryValue_2 | modstatvalue : (mod.secondaryType_2 | modstatname)}}</div>\r\n        <div>{{(mod.secondaryType_3 | modstatname) | language}}: {{mod.secondaryValue_3 | modstatvalue : (mod.secondaryType_3 | modstatname)}}</div>\r\n        <div>{{(mod.secondaryType_4 | modstatname) | language}}: {{mod.secondaryValue_4 | modstatvalue : (mod.secondaryType_4 | modstatname)}}</div>\r\n      </fieldset>\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    newCharSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newCharSearch',
            template: __webpack_require__(/*! ./newCharSearch.html */ "./src/app/newCharSearch/newCharSearch.html"),
            styles: [__webpack_require__(/*! ./newCharSearch.css */ "./src/app/newCharSearch/newCharSearch.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
    ], newCharSearchComponent);
    return newCharSearchComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    CharGearPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'chargear'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharImageLinkPipe = /** @class */ (function () {
    function CharImageLinkPipe(GildenService) {
        this.gildenservice = GildenService;
    }
    CharImageLinkPipe.prototype.transform = function (value) {
        var charInfoNow = this.gildenservice.charInfos.find(function (info) { return info.base_id == value.name; });
        if (charInfoNow != null) {
            if (charInfoNow.image.indexOf('/tex.') > 0) {
                return "/assets/picture/" + charInfoNow.image.substr(charInfoNow.image.indexOf('/tex.') + 5, (charInfoNow.image.length - charInfoNow.image.indexOf('/tex.')) - 5);
            }
        }
        return value.name;
    };
    CharImageLinkPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'charimagelink'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharNamePipe = /** @class */ (function () {
    function CharNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    CharNamePipe.prototype.transform = function (value) {
        var charInfoNow = this.gildenservice.charInfos.find(function (info) { return info.base_id == value.name; });
        if (charInfoNow != null)
            return charInfoNow.name;
        return "name";
    };
    CharNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'charname'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
    ], CharNamePipe);
    return CharNamePipe;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var gearLinkPipe = /** @class */ (function () {
    function gearLinkPipe() {
    }
    gearLinkPipe.prototype.transform = function (value) {
        return "/assets/GearPNG/gear-icon-g" + value.gear + ".png";
    };
    gearLinkPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'gearlink'
        })
    ], gearLinkPipe);
    return gearLinkPipe;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColumnFixedPipe = /** @class */ (function () {
    function ColumnFixedPipe() {
    }
    ColumnFixedPipe.prototype.transform = function (value) {
        if (value < 1)
            return true;
        else
            return false;
    };
    ColumnFixedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColumnTypePipe = /** @class */ (function () {
    function ColumnTypePipe() {
    }
    ColumnTypePipe.prototype.transform = function (value) {
        if (value < 1)
            return "string";
        else
            return "number";
    };
    ColumnTypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ColumnWidthPipe = /** @class */ (function () {
    function ColumnWidthPipe() {
    }
    ColumnWidthPipe.prototype.transform = function (value) {
        if (value < 1)
            return 100;
        else
            return 70;
    };
    ColumnWidthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'columnwidth'
        })
    ], ColumnWidthPipe);
    return ColumnWidthPipe;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
        };
    }
    LanguagePipe.prototype.transform = function (value) {
        var userLang = navigator.language;
        if (userLang == "de-DE") {
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
    LanguagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModSetNamePipe = /** @class */ (function () {
    function ModSetNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModSetNamePipe.prototype.transform = function (value) {
        var ModSetNow = this.gildenservice.ModSets[value];
        if (ModSetNow != null) {
            return ModSetNow.name;
        }
        return value.toString();
    };
    ModSetNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'modsetname'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    ModSlotNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'modslotname'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModStatNamePipe = /** @class */ (function () {
    function ModStatNamePipe(GildenService) {
        this.gildenservice = GildenService;
    }
    ModStatNamePipe.prototype.transform = function (value) {
        var ModStatsNow = this.gildenservice.ModStats[value];
        if (ModStatsNow != null) {
            return ModStatsNow;
        }
        return value.toString();
    };
    ModStatNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'modstatname'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/gildenService */ "./src/app/services/gildenService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    ModStatValuePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'modstatvalue'
        }),
        __metadata("design:paramtypes", [_services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
    ], ModStatValuePipe);
    return ModStatValuePipe;
}());



/***/ }),

/***/ "./src/app/services/gildenService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/gildenService.ts ***!
  \*******************************************/
/*! exports provided: gildenService, GildenInfos, Charakter, ArenaTeamHelper, CharFindHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gildenService", function() { return gildenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GildenInfos", function() { return GildenInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charakter", function() { return Charakter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArenaTeamHelper", function() { return ArenaTeamHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharFindHelper", function() { return CharFindHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lz-string */ "./node_modules/ng-lz-string/ng-lz-string.umd.js");
/* harmony import */ var ng_lz_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_lz_string__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var gildenService = /** @class */ (function () {
    function gildenService(settingsService, http, lz) {
        this.settingsService = settingsService;
        this.lz = lz;
        this.settings = new _services_settingsService__WEBPACK_IMPORTED_MODULE_1__["Settings"]();
        this.gildenInfos = new GildenInfos();
        this.gildenInfosTemp = new GildenInfos();
        this.syncstatus = '';
        this.isInSync = false;
        this.token = '';
        //swgoh-help
        this.apiHelpURL = 'https://api.swgoh.help';
        this.settings = this.settingsService.getSettings();
        this.http = http;
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
    gildenService.prototype.getModStats = function () {
        if (localStorage.midiModStats != null)
            this.ModStats = JSON.parse(localStorage.midiModStats);
    };
    gildenService.prototype.saveModStats = function (ModStats) {
        localStorage.midiModStats = JSON.stringify(ModStats);
        this.ModStats = ModStats;
    };
    gildenService.prototype.getModSets = function () {
        if (localStorage.midiModSets != null)
            this.ModSets = JSON.parse(localStorage.midiModSets);
    };
    gildenService.prototype.saveModSets = function (ModSets) {
        localStorage.midiModSets = JSON.stringify(ModSets);
        this.ModSets = ModSets;
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
            this.gildenInfos = JSON.parse(this.lz.decompress(localStorage.swgohHelpGilde));
            this.gildenInfos.roster = this.gildenInfos.roster.sort(function (a, b) {
                return b.gpFull - a.gpFull;
            });
            console.log(this.gildenInfos);
        }
    };
    gildenService.prototype.saveSWGOHHelpResponse = function () {
        var answerAsJSON = JSON.stringify(this.jsonResponseSWGOHHelpGuild);
        console.log('Full Size: ' + answerAsJSON.length);
        var compressed = this.lz.compress(answerAsJSON);
        console.log('Compressed Size: ' + compressed.length);
        localStorage.swgohHelpGilde = compressed;
        this.syncstatus += 'Gildeninfos Saved \n\r';
        this.gildenInfos = this.jsonResponseSWGOHHelpGuild;
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
        user += "&password=ExsJfR!nzYB*7Mqr";
        user += "&grant_type=password";
        user += "&client_id=123";
        user += "&client_secret=ABC";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Length', user.length.toString());
        if (this.token != null && this.token != "") {
            this.syncstatus += 'Bereits eingeloggt... überspringe login \n\r';
            this.loadGildenInfos();
        }
        else {
            this.syncstatus += 'Logge ein bei swgoh.help... \n\r';
            this.http.post('https://api.swgoh.help/auth/signin/', user, { headers: headers })
                .subscribe(function (data) {
                var response = data;
                _this.token = response.access_token;
                _this.syncstatus += 'Login erfolgreich! \n\r';
                _this.loadGildenInfos();
            }, function (Error) {
                _this.syncstatus += 'Fehler beim Login... breche ab \n\r';
                _this.syncstatus += Error.message;
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            });
        }
    };
    gildenService.prototype.loadGildenInfos = function () {
        var _this = this;
        this.syncstatus += 'Lade Gildendaten für ' + this.settings.allycode + '... \n\r';
        this.syncstatus += 'Dies kann bis zu 2 min dauern... \n\r';
        var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://api.swgoh.help/swgoh/guild/' + this.settings.allycode, '', { headers: header2 })
            .subscribe(function (data2) {
            _this.jsonResponseSWGOHHelpGuild = data2;
            _this.saveSWGOHHelpResponse();
            _this.loadSWGOHHelpExtras();
        }, function (Error) {
            _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
            _this.syncstatus += Error.message;
            _this.syncstatus += 'Ende der Synchronisation! \n\r';
        });
    };
    gildenService.prototype.loadSWGOHHelpExtras = function () {
        var _this = this;
        this.syncstatus += 'Hole Mod-Set-Infos... \n\r';
        var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        header2 = header2.append("Authorization", "Bearer " + this.token);
        header2.append('Access-Control-Allow-Headers', 'Authorization');
        this.http.post('https://api.swgoh.help/swgoh/data/mod-sets', '', { headers: header2 })
            .subscribe(function (data2) {
            _this.ModSets = data2;
            _this.saveModSets(_this.ModSets);
            _this.syncstatus += 'Hole Mod-Stat-Infos... \n\r';
            var header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            header2 = header2.append("Authorization", "Bearer " + _this.token);
            header2.append('Access-Control-Allow-Headers', 'Authorization');
            _this.http.post('https://api.swgoh.help/swgoh/data/mod-stats', '', { headers: header2 })
                .subscribe(function (data2) {
                _this.ModStats = data2;
                _this.saveModStats(_this.ModStats);
                _this.syncstatus += 'Mod-Stat-Infos erfolgreich... \n\r';
                _this.loadSWGOHggChars();
            }, function (Error) {
                _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
                _this.syncstatus += Error.message;
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            });
        }, function (Error) {
            _this.syncstatus += 'Fehler beim abrufen der Daten... breche ab \n\r';
            _this.syncstatus += Error.message;
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
                _this.syncstatus += Error.message;
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
                _this.syncstatus += Error.message;
                _this.syncstatus += 'Ende der Synchronisation! \n\r';
            }
        });
    };
    gildenService.prototype.syncGildenInfos = function () {
        this.syncstatus += 'Frage an bei swgoh.help \n\r';
        this.isInSync = true;
        if (!this.checkIfItsANumber(this.settings.allycode)) {
            alert('AllyCode "' + this.settings.allycode + '" is either empty or in the wrong format. It must be a string with 9 numbers ( no - )');
            this.syncstatus += 'aborted \n\r';
            return;
        }
        this.loginToSWGOHHelp();
    };
    gildenService.prototype.getAllCharsByName = function (name) {
        var charsFound = new Array();
        //MapCharName To IDName
        var idName = this.charInfos.filter(function (info) { return info.name.toLowerCase().indexOf(name.toLowerCase()) >= 0; });
        if (idName == null || idName.length == 0)
            return null;
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            for (var z = 0; z < idName.length; z++) {
                var foundChars = this.gildenInfos.roster[i].roster.filter(function (char) { return (idName[z].base_id.toLowerCase() == char.name.toLowerCase()); });
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
        }
        return charsFound;
    };
    gildenService.prototype.getAllCharArenaTeams = function () {
        var allTeams = new Array();
        for (var i = 0; i < this.gildenInfos.roster.length; i++) {
            var arenaTeamNow = new ArenaTeamHelper();
            arenaTeamNow.besitzer = this.gildenInfos.roster[i].name;
            var teamNow = this.gildenInfos.roster[i].arena.char;
            arenaTeamNow.rang = teamNow.rank;
            for (var x = 0; x < teamNow.squad.length; x++) {
                var charNow = this.gildenInfos.roster[i].roster.find(function (char) { return char.name == teamNow.squad[x].name; });
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
                    if (this.gildenInfos.roster[i].roster[x].name == charName) {
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
            tempSumA += a[i].gearLevel;
            tempSumA += a[i].Zetas * 4;
            tempSumA += a[i].Sterne;
        }
        var tempSumB = 0;
        for (var i = 0; i < b.length; i++) {
            tempSumB += b[i].gearLevel;
            tempSumB += b[i].Zetas * 4;
            tempSumB += b[i].Sterne;
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
            if (member.roster[i].name.toLowerCase().includes(name.toLowerCase())) {
                if (idName != null)
                    var mappedChar = this.mappChar(member.roster[i], member.name, idName.name);
                else
                    var mappedChar = this.mappChar(member.roster[i], member.name, member.roster[i].name);
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
            if (member.roster[i].name.toLowerCase().includes(name.toLowerCase())) {
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
            if (member.roster[i].name.toLowerCase() == name.toLowerCase()) {
                return member.roster[i];
            }
        }
        return null;
    };
    gildenService.prototype.mappChar = function (newchar, besitzer, oldName) {
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
            var charInfoNow = this.charInfos.find(function (info) { return info.base_id == newchar.name; });
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
            if (member.roster[i].name.toLowerCase() == name.toLowerCase()) {
                return this.mappChar(member.roster[i], member.name, idName.name);
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
    };
    gildenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_1__["SettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ng_lz_string__WEBPACK_IMPORTED_MODULE_3__["LZStringService"]])
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
        this.gpChar = 0;
        this.gpFull = 0;
        this.gpShip = 0;
        this.guildName = "";
        this.level = 0;
        this.name = "";
        this.roster = new Array();
        this.updated = new Date();
    }
    return Member;
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
        this.name = "";
        this.type = 0;
    }
    return ArenaChar;
}());
var Charakter = /** @class */ (function () {
    function Charakter() {
        this.defId = "";
        this.equipped = new Array();
        this.gear = 0;
        this.id = "";
        this.level = 0;
        this.mods = new Array();
        this.name = "";
        this.rarity = 0;
        this.skills = new Array();
        this.type = "";
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
        this.primaryBonusType = 0;
        this.primaryBonusValue = 0;
        this.secondaryType_1 = 0;
        this.secondaryType_2 = 0;
        this.secondaryType_3 = 0;
        this.secondaryType_4 = 0;
        this.secondaryValue_1 = 0;
        this.secondaryValue_2 = 0;
        this.secondaryValue_3 = 0;
        this.secondaryValue_4 = 0;
        this.set = 0;
        this.setId = 0;
        this.slot = 0;
    }
    return Mod;
}());
var Skill = /** @class */ (function () {
    function Skill() {
        this.id = "";
        this.isZeta = false;
        this.name = "";
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());

var Settings = /** @class */ (function () {
    function Settings() {
        this.allycode = "";
        this.sortMemberBy = "OGM";
        this.showErrors = true;
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

module.exports = "select {\r\n  width: 100%;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  float: left;\r\n  left: 155px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  /*font-size: 22px;*/\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  top: -50px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top:12px;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  float: left;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n} \r\n"

/***/ }),

/***/ "./src/app/settings/setting.html":
/*!***************************************!*\
  !*** ./src/app/settings/setting.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <fieldset>\r\n    <legend>{{'Settings' | language}} :</legend>\r\n\r\n    <p style=\"float:left\">{{'Allycode' | language}}:</p>\r\n    <input type=\"text\" placeholder=\"{{'AllycodeEG' | language}}\" [(ngModel)]=\"this.settings.allycode\" (change)=\"changedAllycode()\">\r\n\r\n    <p style=\"float:left\">{{'SortMemberby' | language}}:</p>\r\n    <select [(ngModel)]=\"this.settings.sortMemberBy\">\r\n      <option value=\"OGM\">Overall GM</option>\r\n      <option value=\"CGM\">Charakter GM</option>\r\n      <option value=\"FGM\">Fleet GM</option>\r\n      <option value=\"Name\">Name</option>\r\n    </select>\r\n\r\n    <p>{{'UseAutocomplete' | language}}:</p>\r\n\r\n    <p>{{'ShowErrors' | language}}:</p>\r\n\r\n    <label class=\"container\" style=\"top:-85px\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.useAutoComplete\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n\r\n    <label class=\"container\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.showErrors\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n    <button (click)=\"saveSettings()\">{{'SaveSettings' | language}}</button>\r\n  </fieldset>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'setting',
            template: __webpack_require__(/*! ./setting.html */ "./src/app/settings/setting.html"),
            styles: [__webpack_require__(/*! ./setting.css */ "./src/app/settings/setting.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_1__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/squadSearch/squadsearch.css":
/*!*********************************************!*\
  !*** ./src/app/squadSearch/squadsearch.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n.charImage {\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 37px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 21px;\r\n  left: -5px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n/* Add Animation */\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/squadSearch/squadsearch.html":
/*!**********************************************!*\
  !*** ./src/app/squadSearch/squadsearch.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n  <div style=\"width:68%; display: inline-block;\">\r\n    <select style=\"width:100%;\" [(ngModel)]=\"selectedTeam\" (ngModelChange)=\"getSquadsFromGildenInfos()\">\r\n      <option *ngFor=\"let team of myTeams\" [ngValue]=\"team\">{{team.Name}}</option>\r\n    </select>\r\n  </div>\r\n  <div style=\"width: 30%; display: inline-block;\">\r\n<button (click)=\"deleteThisTeam()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">Del</button>\r\n<button (click)=\"openModal()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">Add</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let squad of squadsFromGildenInfos\" class=\"charNow\">\r\n  <fieldset style=\"height:80px\">\r\n    <legend>{{selectedTeam.Name}} of {{squad[0].Besitzer}}</legend>\r\n    <div style=\"height:80%; width:100%\">\r\n      <div *ngIf=\"squad[0]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[0].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[0].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[0].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[0].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[0].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[0].imageUrl}}\" alt=\"{{squad[0].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[0].gearLevel}}.png\" alt=\"{{squad[0].Name}}\">\r\n          <span class=\"char-level\">{{squad[0].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[0].gearLevel)}}</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[1]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[1].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[1].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[1].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[1].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[1].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[1].imageUrl}}\" alt=\"{{squad[1].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[1].gearLevel}}.png\" alt=\"{{squad[1].Name}}\">\r\n          <span class=\"char-level\">{{squad[1].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[1].gearLevel)}}</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[2]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[2].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[2].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[2].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[2].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[2].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[2].imageUrl}}\" alt=\"{{squad[2].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[2].gearLevel}}.png\" alt=\"{{squad[2].Name}}\">\r\n          <span class=\"char-level\">{{squad[2].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[2].gearLevel)}}</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[3]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[3].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[3].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[3].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[3].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[3].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[3].imageUrl}}\" alt=\"{{squad[3].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[3].gearLevel}}.png\" alt=\"{{squad[3].Name}}\">\r\n          <span class=\"char-level\">{{squad[3].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[3].gearLevel)}}</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[4]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[4].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[4].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[4].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[4].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[4].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[4].imageUrl}}\" alt=\"{{squad[4].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[4].gearLevel}}.png\" alt=\"{{squad[4].Name}}\">\r\n          <span class=\"char-level\">{{squad[4].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[4].gearLevel)}}</span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n\r\n\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n      <h2>Add a Squad</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <p>\r\n        <input type=\"text\" placeholder=\"Squadname ( e.g 'Phönix' or 'Brotini'  )\" [(ngModel)]=\"squadName\">\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Leader :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedLeader\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\"  [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedLeader\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 2 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar2\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar2\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 3 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar3\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar3\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 4 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar4\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar4\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 5 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar5\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar5\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n\r\n      <button style=\"width: 100%\" (click)=\"addSquadToMyTeams()\">Confirm</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_gildenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/gildenService */ "./src/app/services/gildenService.ts");
/* harmony import */ var _services_settingsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settingsService */ "./src/app/services/settingsService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        if (this.settingsService.settings.useAutoComplete) {
            console.log(this.selectedLeader[0]);
            if (this.selectedLeader != null)
                teamNow.Charaktere.push(this.selectedLeader[0].name);
            if (this.selectedChar2 != null)
                teamNow.Charaktere.push(this.selectedChar2[0].name);
            if (this.selectedChar3 != null)
                teamNow.Charaktere.push(this.selectedChar3[0].name);
            if (this.selectedChar4 != null)
                teamNow.Charaktere.push(this.selectedChar4[0].name);
            if (this.selectedChar5 != null)
                teamNow.Charaktere.push(this.selectedChar5[0].name);
        }
        else {
            teamNow.Charaktere.push(this.selectedLeader);
            teamNow.Charaktere.push(this.selectedChar2);
            teamNow.Charaktere.push(this.selectedChar3);
            teamNow.Charaktere.push(this.selectedChar4);
            teamNow.Charaktere.push(this.selectedChar5);
        }
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
    SquadSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'squadsearch',
            template: __webpack_require__(/*! ./squadsearch.html */ "./src/app/squadSearch/squadsearch.html"),
            styles: [__webpack_require__(/*! ./squadsearch.css */ "./src/app/squadSearch/squadsearch.css")]
        }),
        __metadata("design:paramtypes", [_services_settingsService__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _services_gildenService__WEBPACK_IMPORTED_MODULE_1__["gildenService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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
//# sourceMappingURL=main.js.map