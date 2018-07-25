webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.css":
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n\r\n#raidplannerTable tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#raidplannerTable tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#raidplannerTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: 0;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 80px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n.selectedImg {\r\n  position: absolute;\r\n  top: -304px;\r\n  left: -350px;\r\n  transform: scale(0.1, 0.1);\r\n  -ms-transform: scale(0.1, 0.1);\r\n  -webkit-transform: scale(0.1, 0.1);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 65px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n\r\n  <div>\r\n\r\n    <button (click)=\"openModalSQUAD()\" style=\"width:100%; margin-bottom: 5px;\">Add-Squad</button>\r\n\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <select style=\"width:80%; display:inline-block;\" [(ngModel)]=\"ActualPlayer\">\r\n      <option *ngFor=\"let player of gildenService.gildenInfos.Members\" [ngValue]=\"player\">{{player.Name}}</option>\r\n    </select>\r\n\r\n    <button (click)=\"openModal()\" style=\"width:10%; display:inline-block;\">\r\n      Add Team\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <table id=\"raidplannerTable\" style=\"width:100%\">\r\n    <tr>\r\n      <th>Phase{{resetDmgDone()}}</th>\r\n      <th>Player</th>\r\n      <th>Team</th>\r\n      <th>Needed Dmg</th>\r\n      <th>Target %</th>\r\n      <th>Edit</th>\r\n    </tr>\r\n    <tr *ngFor=\"let squadForRaid of Phase1; let i = index\">\r\n      <td>P1</td>\r\n      <td>{{squadForRaid.owner}}</td>\r\n      <td><p *ngIf=\"squadForRaid.charaktere.length > 0\" style=\"float:left\">{{squadForRaid.charaktere[0].Name}},&nbsp;</p><p *ngIf=\"squadForRaid.charaktere.length > 1\" style=\"float:left\">{{squadForRaid.charaktere[1].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 2\" style=\"float:left\">{{squadForRaid.charaktere[2].Name}}, <p *ngIf=\"squadForRaid.charaktere.length > 3\" style=\"float:left\">{{squadForRaid.charaktere[3].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 4\" style=\"float:left\">{{squadForRaid.charaktere[4].Name}}</td>\r\n      <td>{{squadForRaid.damage}}%</td>\r\n      <td>{{getDmg1Now(squadForRaid.damage)}}%</td>\r\n      <td><button (click)=\"openModalEDIT(squadForRaid, 1, i)\">Edit</button><button (click)=\"removeSquadP1(squadForRaid)\" style=\"margin-left: 5px;\">Del</button></td>\r\n    </tr>\r\n    <tr *ngFor=\"let squadForRaid of Phase2 let i = index\">\r\n      <td>P2</td>\r\n      <td>{{squadForRaid.owner}}</td>\r\n      <td><p *ngIf=\"squadForRaid.charaktere.length > 0\" style=\"float:left\">{{squadForRaid.charaktere[0].Name}},&nbsp;</p><p *ngIf=\"squadForRaid.charaktere.length > 1\" style=\"float:left\">{{squadForRaid.charaktere[1].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 2\" style=\"float:left\">{{squadForRaid.charaktere[2].Name}}, <p *ngIf=\"squadForRaid.charaktere.length > 3\" style=\"float:left\">{{squadForRaid.charaktere[3].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 4\" style=\"float:left\">{{squadForRaid.charaktere[4].Name}}</td>\r\n      <td>{{squadForRaid.damage}}%</td>\r\n      <td>{{getDmg2Now(squadForRaid.damage)}}%</td>\r\n      <td><button (click)=\"openModalEDIT(squadForRaid, 2, i)\">Edit</button><button (click)=\"removeSquadP2(squadForRaid)\" style=\"margin-left: 5px;\">Del</button></td>\r\n    </tr>\r\n    <tr *ngFor=\"let squadForRaid of Phase3 let i = index\">\r\n      <td>P3</td>\r\n      <td>{{squadForRaid.owner}}</td>\r\n      <td><p *ngIf=\"squadForRaid.charaktere.length > 0\" style=\"float:left\">{{squadForRaid.charaktere[0].Name}},&nbsp;</p><p *ngIf=\"squadForRaid.charaktere.length > 1\" style=\"float:left\">{{squadForRaid.charaktere[1].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 2\" style=\"float:left\">{{squadForRaid.charaktere[2].Name}}, <p *ngIf=\"squadForRaid.charaktere.length > 3\" style=\"float:left\">{{squadForRaid.charaktere[3].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 4\" style=\"float:left\">{{squadForRaid.charaktere[4].Name}}</td>\r\n      <td>{{squadForRaid.damage}}%</td>\r\n      <td>{{getDmg3Now(squadForRaid.damage)}}%</td>\r\n      <td><button (click)=\"openModalEDIT(squadForRaid, 3, i)\">Edit</button><button (click)=\"removeSquadP3(squadForRaid)\" style=\"margin-left: 5px;\">Del</button></td>\r\n    </tr>\r\n    <tr *ngFor=\"let squadForRaid of Phase4 let i = index\">\r\n      <td>P4</td>\r\n      <td>{{squadForRaid.owner}}</td>\r\n      <td><p *ngIf=\"squadForRaid.charaktere.length > 0\" style=\"float:left\">{{squadForRaid.charaktere[0].Name}},&nbsp;</p><p *ngIf=\"squadForRaid.charaktere.length > 1\" style=\"float:left\">{{squadForRaid.charaktere[1].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 2\" style=\"float:left\">{{squadForRaid.charaktere[2].Name}}, <p *ngIf=\"squadForRaid.charaktere.length > 3\" style=\"float:left\">{{squadForRaid.charaktere[3].Name}},&nbsp;<p *ngIf=\"squadForRaid.charaktere.length > 4\" style=\"float:left\">{{squadForRaid.charaktere[4].Name}}</td>\r\n      <td>{{squadForRaid.damage}}%</td>\r\n      <td>{{getDmg4Now(squadForRaid.damage)}}%</td>\r\n      <td><button (click)=\"openModalEDIT(squadForRaid, 4, i)\">Edit</button><button (click)=\"removeSquadP4(squadForRaid)\" style=\"margin-left: 5px;\">Del</button></td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\" style=\"height:80%\">\r\n    <div class=\"modal-header\" style=\"height:10%\">\r\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n      <h2>Add a Squad</h2>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"height: 70%;\">\r\n\r\n      <div style=\"height:100%; overflow:scroll;\">\r\n\r\n        <div *ngFor=\"let charakter of ActualPlayer.Charaktere\">\r\n\r\n          <fieldset *ngIf=\"(charakter.Sterne > 6) && !( charAlreadyPlaced(charakter) )\" style=\"height: 135px;\" (click)=\"selectChar(charakter)\">\r\n            <legend>{{charakter.Name}} of {{charakter.Besitzer}}</legend>\r\n            Power: {{charakter.Power}}\r\n            <br />\r\n            <div class=\"parentOfImages\">\r\n              <img *ngIf=\"charakter.Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n              <img *ngIf=\"charakter.Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n              <img *ngIf=\"charakter.Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n              <img *ngIf=\"charakter.Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n              <img *ngIf=\"charakter.Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n              <img *ngIf=\"charakter.Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n              <img *ngIf=\"charakter.Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n              <img *ngIf=\"charakter.Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n              <img *ngIf=\"charakter.Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n              <img *ngIf=\"charakter.Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n              <img *ngIf=\"charakter.Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n              <img *ngIf=\"charakter.Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n              <img *ngIf=\"charakter.Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n              <img *ngIf=\"charakter.Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n              <img *ngIf=\"charakter.Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n              <img *ngIf=\"charakter.Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n              <div>\r\n                <img class=\"charImage\" src=\"/assets/picture/{{charakter.imageUrl}}\" alt=\"{{charakter.Name}}\">\r\n                <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{charakter.gearLevel}}.png\" alt=\"{{charakter.Name}}\">\r\n                <span class=\"char-level\">{{charakter.Level}}</span>\r\n                <span class=\"char-gear-level\">{{formatGearLevel(charakter.gearLevel)}}</span>\r\n              </div>\r\n              <progress class=\"\" value=\"{{charakter.Power}}\" max=\"{{charakter.MaxPower}}\"></progress> <span style=\"left: 55px; position: absolute; top: 80px; \"><b>{{ roundNumber((charakter.Power/charakter.MaxPower)*100) }}%</b></span>\r\n\r\n              <img class=\"selectedImg\" src=\"/assets/picture/selected.jpg\" *ngIf=\"SelectedChars.indexOf(charakter) > -1\">\r\n\r\n            </div>\r\n          </fieldset>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" style=\"height: 20%;\">\r\n\r\n      Phase:\r\n      <select style=\"width:30%;\" [(ngModel)]=\"SelectedPhase\">\r\n        <option [ngValue]=\"1\">Phase 1</option>\r\n        <option [ngValue]=\"2\">Phase 2</option>\r\n        <option [ngValue]=\"3\">Phase 3</option>\r\n        <option [ngValue]=\"4\">Phase 4</option>\r\n      </select>\r\n      Damage:\r\n      <input type=\"number\" step=\".01\" [(ngModel)]=\"DamageNow\" />\r\n      <button style=\"width: 100%;\" (click)=\"addSquadToPhase()\">Confirm</button>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- The EDIT Modal -->\r\n<div id=\"myModalEDIT\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\" style=\"height:80%\">\r\n    <div class=\"modal-header\" style=\"height:10%\">\r\n      <span class=\"close\" (click)=\"closeModalEDIT()\">&times;</span>\r\n      <h2>Edit a Squad</h2>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"height: 70%;\">\r\n\r\n      <div style=\"height:100%; overflow:scroll;\">\r\n\r\n        <div *ngFor=\"let charakter of ActualPlayer.Charaktere\">\r\n\r\n          <fieldset *ngIf=\"(charakter.Sterne > 6) && ( (!(charAlreadyPlaced(charakter))) || charInTemp(charakter) )\" style=\"height: 135px;\" (click)=\"selectChar(charakter)\">\r\n            <legend>{{charakter.Name}} of {{charakter.Besitzer}}</legend>\r\n            Power: {{charakter.Power}}\r\n            <br />\r\n            <div class=\"parentOfImages\">\r\n              <img *ngIf=\"charakter.Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n              <img *ngIf=\"charakter.Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n              <img *ngIf=\"charakter.Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n              <img *ngIf=\"charakter.Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n              <img *ngIf=\"charakter.Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n              <img *ngIf=\"charakter.Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n              <img *ngIf=\"charakter.Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n              <img *ngIf=\"charakter.Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n              <img *ngIf=\"charakter.Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n              <img *ngIf=\"charakter.Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n              <img *ngIf=\"charakter.Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n              <img *ngIf=\"charakter.Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n              <img *ngIf=\"charakter.Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n              <img *ngIf=\"charakter.Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n              <img *ngIf=\"charakter.Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n              <img *ngIf=\"charakter.Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n              <div>\r\n                <img class=\"charImage\" src=\"/assets/picture/{{charakter.imageUrl}}\" alt=\"{{charakter.Name}}\">\r\n                <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{charakter.gearLevel}}.png\" alt=\"{{charakter.Name}}\">\r\n                <span class=\"char-level\">{{charakter.Level}}</span>\r\n                <span class=\"char-gear-level\">{{formatGearLevel(charakter.gearLevel)}}</span>\r\n              </div>\r\n              <progress class=\"\" value=\"{{charakter.Power}}\" max=\"{{charakter.MaxPower}}\"></progress> <span style=\"left: 55px; position: absolute; top: 80px; \"><b>{{ roundNumber((charakter.Power/charakter.MaxPower)*100) }}%</b></span>\r\n\r\n              <img class=\"selectedImg\" src=\"/assets/picture/selected.jpg\" *ngIf=\"SelectedChars.indexOf(charakter) > -1\">\r\n\r\n            </div>\r\n          </fieldset>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" style=\"height: 20%;\">\r\n\r\n      Phase:\r\n      <select style=\"width:30%;\" [(ngModel)]=\"SelectedPhase\" disabled>\r\n        <option [ngValue]=\"1\">Phase 1</option>\r\n        <option [ngValue]=\"2\">Phase 2</option>\r\n        <option [ngValue]=\"3\">Phase 3</option>\r\n        <option [ngValue]=\"4\">Phase 4</option>\r\n      </select>\r\n      Damage:\r\n      <input type=\"number\" step=\".01\" [(ngModel)]=\"DamageNow\" />\r\n      <button style=\"width: 100%;\" (click)=\"editSquadInPhase()\">Confirm</button>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModalSQUAD\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\" style=\"height:80%\">\r\n    <div class=\"modal-header\" style=\"height:10%\">\r\n      <span class=\"close\" (click)=\"closeModalSQUAD()\">&times;</span>\r\n      <h2>Add a Squad</h2>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"height: 70%;\">\r\n\r\n      <select style=\"width:100%;\" [(ngModel)]=\"selectedTeam\" (ngModelChange)=\"getSquadsFromGildenInfos()\">\r\n        <option *ngFor=\"let team of myTeams\" [ngValue]=\"team\">{{team.Name}}</option>\r\n      </select>\r\n\r\n      <div style=\"height:100%; overflow:scroll;\">\r\n\r\n        <div *ngFor=\"let squad of squadsFromGildenInfos\" class=\"charNow\">\r\n          <fieldset style=\"height:85%\">\r\n            <legend>{{selectedTeam.Name}} of {{squad[0].Besitzer}}</legend>\r\n            Power: {{getPowerOfSquad(squad)}}\r\n            <br />\r\n            <div style=\"height:80%; width:100%\">\r\n              <div *ngIf=\"squad[0]\" class=\"divForChar\">\r\n                <div class=\"parentOfImages\">\r\n\r\n                  <img *ngIf=\"squad[0].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[0].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[0].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[0].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[0].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[0].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[0].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[0].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[0].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[0].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[0].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[0].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[0].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n                  <img *ngIf=\"squad[0].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n                  <img *ngIf=\"squad[0].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[0].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[0].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\" style=\"left:0px;\">\r\n\r\n                  <img class=\"charImage\" src=\"/assets/picture/{{squad[0].imageUrl}}\" alt=\"{{squad[0].Name}}\">\r\n                  <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[0].gearLevel}}.png\" alt=\"{{squad[0].Name}}\">\r\n                  <span class=\"char-level\">{{squad[0].Level}}</span>\r\n                  <span class=\"char-gear-level\">{{formatGearLevel(squad[0].gearLevel)}}</span>\r\n                  <progress class=\"progress1\" value=\"{{squad[0].Power}}\" max=\"{{squad[0].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[0].Power/squad[0].MaxPower)*100) }}%</b></span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"squad[1]\" class=\"divForChar\">\r\n                <div class=\"parentOfImages\">\r\n\r\n                  <img *ngIf=\"squad[1].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[1].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[1].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[1].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[1].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[1].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[1].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[1].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[1].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[1].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[1].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[1].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[1].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n                  <img *ngIf=\"squad[1].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n                  <img *ngIf=\"squad[1].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[1].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[1].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\" style=\"left:0px;\">\r\n\r\n                  <img class=\"charImage\" src=\"/assets/picture/{{squad[1].imageUrl}}\" alt=\"{{squad[1].Name}}\">\r\n                  <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[1].gearLevel}}.png\" alt=\"{{squad[1].Name}}\">\r\n                  <span class=\"char-level\">{{squad[1].Level}}</span>\r\n                  <span class=\"char-gear-level\">{{formatGearLevel(squad[1].gearLevel)}}</span>\r\n                  <progress class=\"progress1\" value=\"{{squad[1].Power}}\" max=\"{{squad[1].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[1].Power/squad[1].MaxPower)*100) }}%</b></span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"squad[2]\" class=\"divForChar\">\r\n                <div class=\"parentOfImages\">\r\n\r\n                  <img *ngIf=\"squad[2].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[2].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[2].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[2].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[2].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[2].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[2].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[2].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[2].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[2].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[2].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[2].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[2].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n                  <img *ngIf=\"squad[2].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n                  <img *ngIf=\"squad[2].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[2].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[2].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\" style=\"left:0px;\">\r\n\r\n                  <img class=\"charImage\" src=\"/assets/picture/{{squad[2].imageUrl}}\" alt=\"{{squad[2].Name}}\">\r\n                  <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[2].gearLevel}}.png\" alt=\"{{squad[2].Name}}\">\r\n                  <span class=\"char-level\">{{squad[2].Level}}</span>\r\n                  <span class=\"char-gear-level\">{{formatGearLevel(squad[2].gearLevel)}}</span>\r\n                  <progress class=\"progress1\" value=\"{{squad[2].Power}}\" max=\"{{squad[2].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[2].Power/squad[2].MaxPower)*100) }}%</b></span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"squad[3]\" class=\"divForChar\">\r\n                <div class=\"parentOfImages\">\r\n\r\n                  <img *ngIf=\"squad[3].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[3].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[3].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[3].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[3].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[3].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[3].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[3].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[3].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[3].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[3].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[3].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[3].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n                  <img *ngIf=\"squad[3].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n                  <img *ngIf=\"squad[3].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[3].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[3].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\" style=\"left:0px;\">\r\n\r\n                  <img class=\"charImage\" src=\"/assets/picture/{{squad[3].imageUrl}}\" alt=\"{{squad[3].Name}}\">\r\n                  <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[3].gearLevel}}.png\" alt=\"{{squad[3].Name}}\">\r\n                  <span class=\"char-level\">{{squad[3].Level}}</span>\r\n                  <span class=\"char-gear-level\">{{formatGearLevel(squad[3].gearLevel)}}</span>\r\n                  <progress class=\"progress1\" value=\"{{squad[3].Power}}\" max=\"{{squad[3].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[3].Power/squad[3].MaxPower)*100) }}%</b></span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"squad[4]\" class=\"divForChar\">\r\n                <div class=\"parentOfImages\">\r\n\r\n                  <img *ngIf=\"squad[4].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[4].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n                  <img *ngIf=\"squad[4].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[4].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n                  <img *ngIf=\"squad[4].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[4].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n                  <img *ngIf=\"squad[4].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[4].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n                  <img *ngIf=\"squad[4].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[4].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n                  <img *ngIf=\"squad[4].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[4].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n                  <img *ngIf=\"squad[4].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n                  <img *ngIf=\"squad[4].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n                  <img *ngIf=\"squad[4].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[4].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\" style=\"left:0px;\">\r\n                  <img *ngIf=\"squad[4].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\" style=\"left:0px;\">\r\n\r\n                  <img class=\"charImage\" src=\"/assets/picture/{{squad[4].imageUrl}}\" alt=\"{{squad[4].Name}}\">\r\n                  <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[4].gearLevel}}.png\" alt=\"{{squad[4].Name}}\">\r\n                  <span class=\"char-level\">{{squad[4].Level}}</span>\r\n                  <span class=\"char-gear-level\">{{formatGearLevel(squad[4].gearLevel)}}</span>\r\n                  <progress class=\"progress1\" value=\"{{squad[4].Power}}\" max=\"{{squad[4].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[4].Power/squad[4].MaxPower)*100) }}%</b></span>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </fieldset>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal-body\" style=\"height: 20%;\">\r\n\r\n      Phase:\r\n      <select style=\"width:30%;\" [(ngModel)]=\"SelectedPhase\">\r\n        <option [ngValue]=\"1\">Phase 1</option>\r\n        <option [ngValue]=\"2\">Phase 2</option>\r\n        <option [ngValue]=\"3\">Phase 3</option>\r\n        <option [ngValue]=\"4\">Phase 4</option>\r\n      </select>\r\n      Damage:\r\n      <input type=\"number\" step=\".01\" [(ngModel)]=\"DamageNow\" />\r\n      <button style=\"width: 100%;\" (click)=\"closeModalSQUAD()\">Confirm</button>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/RaidPlanner/raidplanner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaidPlannerComponent; });
/* unused harmony export squadForRaid */
/* unused harmony export charNameAndMember */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RaidPlannerComponent = /** @class */ (function () {
    function RaidPlannerComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.dmgP1 = 100;
        this.dmgP2 = 100;
        this.dmgP3 = 100;
        this.dmgP4 = 100;
        this.myTeams = new Array();
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
        }
        else {
            this.selectedTeam = this.myTeams[0];
        }
        this.getSquadsFromGildenInfos();
        this.loadRaidPlan();
    }
    RaidPlannerComponent.prototype.loadRaidPlan = function () {
        if (localStorage.raidPhase1 != null)
            this.Phase1 = JSON.parse(localStorage.raidPhase1);
        if (localStorage.raidPhase2 != null)
            this.Phase2 = JSON.parse(localStorage.raidPhase2);
        if (localStorage.raidPhase3 != null)
            this.Phase3 = JSON.parse(localStorage.raidPhase3);
        if (localStorage.raidPhase4 != null)
            this.Phase4 = JSON.parse(localStorage.raidPhase4);
    };
    RaidPlannerComponent.prototype.saveRaidPlan = function () {
        localStorage.raidPhase1 = JSON.stringify(this.Phase1);
        localStorage.raidPhase2 = JSON.stringify(this.Phase2);
        localStorage.raidPhase3 = JSON.stringify(this.Phase3);
        localStorage.raidPhase4 = JSON.stringify(this.Phase4);
    };
    RaidPlannerComponent.prototype.selectChar = function (charakter) {
        if (this.SelectedChars.indexOf(charakter) > -1) {
            this.SelectedChars.splice(this.SelectedChars.indexOf(charakter), 1);
        }
        else {
            if (this.SelectedChars.length > 4) {
                alert('a team can only hold 5 members');
            }
            else {
                this.SelectedChars.push(charakter);
            }
        }
    };
    RaidPlannerComponent.prototype.removeSquadP1 = function (squadForRaid) {
        var strconfirm = confirm("Are you sure you want to delete this squad?");
        if (strconfirm) {
            this.dmgP1 = 100;
            this.Phase1.splice(this.Phase1.indexOf(squadForRaid), 1);
            this.saveRaidPlan();
        }
    };
    RaidPlannerComponent.prototype.removeSquadP2 = function (squadForRaid) {
        var strconfirm = confirm("Are you sure you want to delete this squad?");
        if (strconfirm) {
            this.dmgP2 = 100;
            this.Phase2.splice(this.Phase2.indexOf(squadForRaid), 1);
            this.saveRaidPlan();
        }
    };
    RaidPlannerComponent.prototype.removeSquadP3 = function (squadForRaid) {
        var strconfirm = confirm("Are you sure you want to delete this squad?");
        if (strconfirm) {
            this.dmgP3 = 100;
            this.Phase3.splice(this.Phase3.indexOf(squadForRaid), 1);
            this.saveRaidPlan();
        }
    };
    RaidPlannerComponent.prototype.removeSquadP4 = function (squadForRaid) {
        var strconfirm = confirm("Are you sure you want to delete this squad?");
        if (strconfirm) {
            this.dmgP4 = 100;
            this.Phase4.splice(this.Phase4.indexOf(squadForRaid), 1);
            this.saveRaidPlan();
        }
    };
    RaidPlannerComponent.prototype.resetDmgDone = function () {
        this.dmgP1 = 100;
        this.dmgP2 = 100;
        this.dmgP3 = 100;
        this.dmgP4 = 100;
    };
    RaidPlannerComponent.prototype.getDmg1Now = function (Damage) {
        this.dmgP1 = this.dmgP1 - Damage;
        return this.dmgP1.toFixed(2);
    };
    RaidPlannerComponent.prototype.getDmg2Now = function (Damage) {
        this.dmgP2 = this.dmgP2 - Damage;
        return this.dmgP2.toFixed(2);
    };
    RaidPlannerComponent.prototype.getDmg3Now = function (Damage) {
        this.dmgP3 = this.dmgP3 - Damage;
        return this.dmgP3.toFixed(2);
    };
    RaidPlannerComponent.prototype.getDmg4Now = function (Damage) {
        this.dmgP4 = this.dmgP4 - Damage;
        return this.dmgP4.toFixed(2);
    };
    RaidPlannerComponent.prototype.charInTemp = function (charakter) {
        for (var i = 0; i < this.TempEditChars.length; i++) {
            if (this.TempEditChars[i].Name == charakter.Name && this.TempEditChars[i].Besitzer == charakter.Besitzer) {
                console.log('true for ' + charakter.Name);
                return true;
            }
        }
        return false;
    };
    RaidPlannerComponent.prototype.charAlreadyPlaced = function (charakter) {
        for (var i = 0; i < this.Phase1.length; i++) {
            for (var x = 0; x < this.Phase1[i].charaktere.length; x++) {
                if (this.Phase1[i].charaktere[x].Name == charakter.Name && this.Phase1[i].charaktere[x].Besitzer == charakter.Besitzer) {
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
        return false;
        ;
    };
    RaidPlannerComponent.prototype.editSquadInPhase = function () {
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
    };
    RaidPlannerComponent.prototype.addSquadToPhase = function () {
        var nowSquad = new squadForRaid();
        for (var i = 0; i < this.SelectedChars.length; i++) {
            nowSquad.charaktere.push(new charNameAndMember(this.SelectedChars[i].Name, this.SelectedChars[i].Besitzer));
        }
        nowSquad.owner = this.SelectedChars[0].Besitzer;
        nowSquad.damage = this.DamageNow;
        if (this.SelectedPhase == 1)
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
    };
    RaidPlannerComponent.prototype.roundNumber = function (number) {
        return Math.round(number);
    };
    RaidPlannerComponent.prototype.formatGearLevel = function (level) {
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
    //FROM SquadSearch
    RaidPlannerComponent.prototype.getPowerOfSquad = function (charakters) {
        var tempPower = 0;
        for (var i = 0; i < charakters.length; i++) {
            tempPower += charakters[i].Power;
        }
        return tempPower;
    };
    RaidPlannerComponent.prototype.getSquadsFromGildenInfos = function () {
        this.squadsFromGildenInfos = this.gildenService.findSquads(this.selectedTeam);
    };
    RaidPlannerComponent.prototype.getMyTeams = function () {
        if (localStorage.midiMyTeams != null)
            this.myTeams = JSON.parse(localStorage.midiMyTeams);
    };
    RaidPlannerComponent.prototype.saveMyTeams = function () {
        localStorage.midiMyTeams = JSON.stringify(this.myTeams);
    };
    // When the user clicks the button, open the modal 
    RaidPlannerComponent.prototype.openModal = function () {
        this.SelectedChars = new Array();
        if (this.ActualPlayer == null) {
            alert('please pick a player');
            return;
        }
        else {
            this.ActualPlayer.Charaktere = this.ActualPlayer.Charaktere.sort(function (a, b) { return a.Power > b.Power ? -1 : a.Power < b.Power ? 1 : 0; });
        }
        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    RaidPlannerComponent.prototype.closeModal = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    // When the user clicks the button, open the modal 
    RaidPlannerComponent.prototype.openModalEDIT = function (squadForRaid, phase, index) {
        this.DamageNow = squadForRaid.damage;
        this.SelectedPhase = phase;
        this.TempIndexOfPhase = index;
        console.log(index);
        this.ActualPlayer = this.gildenService.getMemberByName(squadForRaid.owner);
        if (this.ActualPlayer == null) {
            alert('couldnt find member with name ' + squadForRaid.owner);
            return;
        }
        this.ActualPlayer.Charaktere = this.ActualPlayer.Charaktere.sort(function (a, b) { return a.Power > b.Power ? -1 : a.Power < b.Power ? 1 : 0; });
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
    };
    // When the user clicks on <span> (x), close the modal
    RaidPlannerComponent.prototype.closeModalEDIT = function () {
        var modal = document.getElementById('myModalEDIT');
        modal.style.display = "none";
    };
    // When the user clicks the button, open the modal 
    RaidPlannerComponent.prototype.openModalSQUAD = function () {
        alert('not ready yet');
        // Get the modal
        var modal = document.getElementById('myModalSQUAD');
        modal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    RaidPlannerComponent.prototype.closeModalSQUAD = function () {
        var modal = document.getElementById('myModalSQUAD');
        modal.style.display = "none";
    };
    RaidPlannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'raidplanner',
            template: __webpack_require__("./src/app/RaidPlanner/raidplanner.html"),
            styles: [__webpack_require__("./src/app/RaidPlanner/raidplanner.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_gildenService__["a" /* gildenService */]])
    ], RaidPlannerComponent);
    return RaidPlannerComponent;
}());

var squadForRaid = /** @class */ (function () {
    function squadForRaid() {
        this.charaktere = new Array();
    }
    return squadForRaid;
}());

var charNameAndMember = /** @class */ (function () {
    function charNameAndMember(name, besitzer) {
        this.Name = name;
        this.Besitzer = besitzer;
    }
    return charNameAndMember;
}());

var squad = /** @class */ (function () {
    function squad() {
        this.Name = 'SquadName';
        this.Charaktere = new Array();
    }
    return squad;
}());


/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.css":
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n\r\n#platoons tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n\r\n#platoons tr:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n#platoons th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n\r\n.charImage {\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* The Modal (background) */\r\n\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n\r\n/* Add Animation */\r\n\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n\r\n  <select style=\"width:100%;\" [(ngModel)]=\"ActualPhase\" (ngModelChange)=\"loadTable()\">\r\n    <option [ngValue]=\"DSTB1\">DS-TB-Phase 1</option>\r\n    <option [ngValue]=\"DSTB2\">DS-TB-Phase 2</option>\r\n    <option [ngValue]=\"DSTB3\">DS-TB-Phase 3</option>\r\n    <option [ngValue]=\"LSTB1\">LS-TB-Phase 1</option>\r\n    <option [ngValue]=\"LSTB2\">LS-TB-Phase 2</option>\r\n    <option [ngValue]=\"LSTB3\">LS-TB-Phase 3</option>\r\n    <option [ngValue]=\"AllChars1\">All Chars - 1 Star</option>\r\n    <option [ngValue]=\"AllChars2\">All Chars - 2 Star</option>\r\n    <option [ngValue]=\"AllChars3\">All Chars - 3 Star</option>\r\n    <option [ngValue]=\"AllChars4\">All Chars - 4 Star</option>\r\n    <option [ngValue]=\"AllChars5\">All Chars - 5 Star</option>\r\n    <option [ngValue]=\"AllChars6\">All Chars - 6 Star</option>\r\n    <option [ngValue]=\"AllChars7\">All Chars - 7 Star</option>\r\n  </select>\r\n\r\n  <table id=\"platoons\" style=\"width:100%\">\r\n    <tr>\r\n      <th>Charname</th>\r\n      <th>Needed</th>\r\n      <th>Available</th>\r\n      <th>Difference</th>\r\n      <th>Stars Needed</th>\r\n    </tr>\r\n    <tr *ngFor=\"let neededChar of ActualPhase\">\r\n      <td ><a (click)=\"showMembersWhoHave(neededChar)\" href=\"javascript:void();\">{{neededChar.name}}</a></td>\r\n      <td>{{neededChar.benoetigt}}</td>\r\n\r\n      <td *ngIf=\"neededChar.benoetigt > neededChar.gildenbesitz\" style=\"background:red\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt == neededChar.gildenbesitz)\" style=\"background:orange\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"(neededChar.benoetigt < neededChar.gildenbesitz) && !(neededChar.benoetigt*2 <= neededChar.gildenbesitz)\" style=\"background:yellow\">{{neededChar.gildenbesitz}}</td>\r\n      <td *ngIf=\"neededChar.benoetigt*2 <= neededChar.gildenbesitz\" style=\"background:green\">{{neededChar.gildenbesitz}}</td>\r\n      <td>{{neededChar.differenz}}</td>\r\n      <td>{{neededChar.sterne}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/TBPlatoons/platoontool.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBPlatoonComponent; });
/* unused harmony export neededChar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'platoontool',
            template: __webpack_require__("./src/app/TBPlatoons/platoontool.html"),
            styles: [__webpack_require__("./src/app/TBPlatoons/platoontool.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_gildenService__["a" /* gildenService */]])
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__("./src/app/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_setting__ = __webpack_require__("./src/app/settings/setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charSearch_charsearch__ = __webpack_require__("./src/app/charSearch/charsearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__squadSearch_squadsearch__ = __webpack_require__("./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TBPlatoons_platoontool__ = __webpack_require__("./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__RaidPlanner_raidplanner__ = __webpack_require__("./src/app/RaidPlanner/raidplanner.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        component: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomeComponent */]
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_3__settings_setting__["a" /* SettingComponent */]
    },
    {
        path: 'charsearch',
        component: __WEBPACK_IMPORTED_MODULE_4__charSearch_charsearch__["a" /* CharSearchComponent */]
    },
    {
        path: 'squadsearch',
        component: __WEBPACK_IMPORTED_MODULE_5__squadSearch_squadsearch__["a" /* SquadSearchComponent */]
    },
    {
        path: 'platoontool',
        component: __WEBPACK_IMPORTED_MODULE_6__TBPlatoons_platoontool__["a" /* TBPlatoonComponent */]
    },
    {
        path: 'raidplanner',
        component: __WEBPACK_IMPORTED_MODULE_7__RaidPlanner_raidplanner__["a" /* RaidPlannerComponent */]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 10;\r\n  left: 0px;\r\n  top: 0px;\r\n}\r\n\r\nli {\r\n  float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n      background-color: #111;\r\n    }\r\n\r\n/* The side navigation menu */\r\n\r\n.sidenav {\r\n  height: 100%; /* 100% Full-height */\r\n  width: 0; /* 0 width - change this with JavaScript */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Stay on top */\r\n  top: 0; /* Stay at the top */\r\n  left: 0;\r\n  background-color: #111; /* Black*/\r\n  overflow-x: hidden; /* Disable horizontal scroll */\r\n  padding-top: 60px; /* Place content 60px from the top */\r\n  -webkit-transition: 0.2s;\r\n  transition: 0.2s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n\r\n.sidenav a:hover {\r\n      color: #f1f1f1;\r\n    }\r\n\r\n/* Position and style the close button (top right corner) */\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n\r\n#main {\r\n  -webkit-transition: margin-left .5s;\r\n  transition: margin-left .5s;\r\n  padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"closeNav()\">Home</a>\r\n  <a routerLink=\"/charsearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">Charsearch</a>\r\n  <a routerLink=\"/squadsearch\" routerLinkActive=\"active\" (click)=\"closeNav()\">Squadsearch</a>\r\n  <a routerLink=\"/platoontool\" routerLinkActive=\"active\" (click)=\"closeNav()\">TB-Platoon</a>\r\n  <a routerLink=\"/raidplanner\" routerLinkActive=\"active\" (click)=\"closeNav()\">Raid-Planner</a>\r\n  <a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">Settings</a>\r\n</div>\r\n\r\n<!-- Use any element to open the sidenav -->\r\n<div>\r\n  <ul>\r\n    <li>\r\n      <a href=\"javascript:void(0)\" (click)=\"openNav()\">&#9776;</a>\r\n    </li>\r\n    <li style=\"float:right\"><a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeNav()\">Settings</a></li>\r\n  </ul>\r\n  <div style=\"height:40px;\">\r\n\r\n  </div>\r\n  <div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__services_gildenService__["a" /* gildenService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__("./src/app/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_setting__ = __webpack_require__("./src/app/settings/setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__charSearch_charsearch__ = __webpack_require__("./src/app/charSearch/charsearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__squadSearch_squadsearch__ = __webpack_require__("./src/app/squadSearch/squadsearch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__TBPlatoons_platoontool__ = __webpack_require__("./src/app/TBPlatoons/platoontool.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__RaidPlanner_raidplanner__ = __webpack_require__("./src/app/RaidPlanner/raidplanner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_select_dropdown__ = __webpack_require__("./node_modules/ngx-select-dropdown/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__settings_setting__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__charSearch_charsearch__["a" /* CharSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__squadSearch_squadsearch__["a" /* SquadSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__TBPlatoons_platoontool__["a" /* TBPlatoonComponent */],
                __WEBPACK_IMPORTED_MODULE_15__RaidPlanner_raidplanner__["a" /* RaidPlannerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_16_ngx_select_dropdown__["a" /* SelectDropDownModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_11__services_gildenService__["a" /* gildenService */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClient */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charSearch/charsearch.css":
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.charImage {\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 25px;\r\n  z-index: 0;\r\n  transform: scale(1.2, 1.2);\r\n  -ms-transform: scale(1.2, 1.2);\r\n  -webkit-transform: scale(1.2, 1.2);\r\n}\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 35px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 55px;\r\n  left: 120px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 3;\r\n}\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 70px;\r\n  top: 53px;\r\n  z-index: 3;\r\n  width: 30px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 43px;\r\n  top: 65px;\r\n  z-index: 3;\r\n  width: 30px;\r\n  padding: 0 5px;\r\n}\r\n\r\nprogress {\r\n  background-color: #f3f3f3;\r\n  border: 0;\r\n  top: 115px;\r\n  position: absolute;\r\n  height: 18px;\r\n  border-radius: 9px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/charSearch/charsearch.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Charname ( e.g 'Boba Fett' or 'Boba'  )\" [(ngModel)]=\"charToSearch\" (ngModelChange)=\"getCharsFromGildenInfos()\">\r\n\r\n<div *ngFor=\"let char of charsFromGildenInfos\" class=\"charNow\">\r\n  <fieldset style=\"height: 170px;\">\r\n    <legend>{{char.Name}} of {{char.Besitzer}}</legend>\r\n    Power: {{char.Power}}\r\n    <br />\r\n    <div class=\"parentOfImages\">\r\n      <img *ngIf=\"char.Sterne>0\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<1\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>1\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<2\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>2\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<3\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>3\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<4\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>4\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<5\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>5\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<6\" src=\"/assets/picture/nostar.png\">\r\n      <img *ngIf=\"char.Sterne>6\" src=\"/assets/picture/star.png\">\r\n      <img *ngIf=\"char.Sterne<7\" src=\"/assets/picture/nostar.png\">\r\n\r\n      <img *ngIf=\"char.Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n      <img *ngIf=\"char.Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n      <img *ngIf=\"char.Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n      <div class=\"parentOfImages\">\r\n        <img class=\"charImage\" src=\"/assets/picture/{{char.imageUrl}}\" alt=\"{{char.Name}}\">\r\n        <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{char.gearLevel}}.png\" alt=\"{{char.Name}}\">\r\n        <span class=\"char-level\">{{char.Level}}</span>\r\n        <span class=\"char-gear-level\">{{formatGearLevel(char.gearLevel)}}</span>\r\n      </div>\r\n      <progress class=\"\" value=\"{{char.Power}}\" max=\"{{char.MaxPower}}\"></progress> <span style=\"left: 55px; position: absolute; top: 115px; \"><b>{{ roundNumber((char.Power/char.MaxPower)*100) }}%</b></span>\r\n      </div>\r\n      </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/charSearch/charsearch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharSearchComponent = /** @class */ (function () {
    function CharSearchComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.charToSearch = "";
    }
    CharSearchComponent.prototype.getCharsFromGildenInfos = function () {
        this.charsFromGildenInfos = this.gildenService.findCharByName(this.charToSearch);
        console.log(this.charsFromGildenInfos);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'charsearch',
            template: __webpack_require__("./src/app/charSearch/charsearch.html"),
            styles: [__webpack_require__("./src/app/charSearch/charsearch.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_gildenService__["a" /* gildenService */]])
    ], CharSearchComponent);
    return CharSearchComponent;
}());



/***/ }),

/***/ "./src/app/home/home.css":
/***/ (function(module, exports) {

module.exports = "tr:nth-child(even) {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h3>\r\n    Welcome to Swgoh-Helper!\r\n  </h3>\r\n\r\n  <table *ngIf=\"gildenService.gildenInfos.OGM>0\" style=\"width: 100%;\">\r\n    <tr>\r\n      <td>All Datas and Pictures are from <a href=\"http://www.swgoh.gg\">www.swgoh.gg</a></td>\r\n    </tr>\r\n    <tr>\r\n      <td>GildenURL = {{settingsService.settings.gildenUrl}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>GildenAPI = {{settingsService.settings.apiUrl}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>GildenOGM = {{gildenService.gildenInfos.OGM}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>GildenCGM = {{gildenService.gildenInfos.CGM}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>GildenFGM = {{gildenService.gildenInfos.FGM}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Gilden Chars for TW = {{gildenService.gildenInfos.CharsForTW}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Last Sync = {{gildenService.gildenInfos.Lastsync}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <h3 *ngIf=\"settingsService.settings.apiUrl==''\">Please go to Settings and enter a Gilden-API!</h3>\r\n  <h3 *ngIf=\"gildenService.gildenInfos.OGM==0&&settingsService.settings.apiUrl!=''\">Please Synchronise with swgoh.gg by hitting the button at the bottom!</h3>\r\n\r\n</div>\r\n\r\n<button (click)=\"syncApi()\" style=\"position: absolute; bottom: 10px; left: 0px;\">Synchronise ({{gildenService.syncstatus}})</button>\r\n"

/***/ }),

/***/ "./src/app/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(settingsService, gildenService) {
        this.settingsService = settingsService;
        this.gildenService = gildenService;
        this.isSyncing = false;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("./src/app/home/home.html"),
            styles: [__webpack_require__("./src/app/home/home.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_gildenService__["a" /* gildenService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/gildenService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gildenService; });
/* unused harmony export GildenInfos */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var gildenService = /** @class */ (function () {
    function gildenService(settingsService, http) {
        this.settingsService = settingsService;
        this.settings = new __WEBPACK_IMPORTED_MODULE_1__services_settingsService__["a" /* Settings */]();
        this.gildenInfos = new GildenInfos();
        this.gildenInfosTemp = new GildenInfos();
        this.syncstatus = '';
        this.settings = this.settingsService.getSettings();
        this.http = http;
        this.getGildenInfos();
        this.getCharInfos();
        if (this.charInfos != null) {
            console.log(this.charInfos);
            console.log(this.charInfos[0].name);
        }
    }
    gildenService.prototype.getGildenInfos = function () {
        if (localStorage.midiGildenInfos != null)
            this.gildenInfos = JSON.parse(localStorage.midiGildenInfos);
    };
    gildenService.prototype.saveGildenInfos = function (gildenInfos) {
        localStorage.midiGildenInfos = JSON.stringify(gildenInfos);
        this.syncstatus = 'Gildeninfos Saved';
    };
    gildenService.prototype.getCharInfos = function () {
        if (localStorage.midiCharInfos != null)
            this.charInfos = JSON.parse(localStorage.midiCharInfos);
    };
    gildenService.prototype.saveCharInfos = function (charInfos) {
        localStorage.midiCharInfos = JSON.stringify(charInfos);
        this.charInfos = charInfos;
    };
    gildenService.prototype.syncGildenInfos = function () {
        var _this = this;
        this.gildenInfosTemp = new GildenInfos();
        this.syncstatus = 'Frage an bei SWGOH';
        var callsToGo = 3;
        var zetaLink = "";
        if (this.settings.gildenUrl != "") {
            if (this.settings.gildenUrl.endsWith("/")) {
                zetaLink = this.settings.gildenUrl + "zetas/";
            }
            else {
                zetaLink = this.settings.gildenUrl + "/zetas/";
            }
            callsToGo++;
        }
        console.log('first call = ' + 'https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/');
        this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/characters/', { responseType: 'json' })
            .subscribe(function (data) {
            _this.jsonResponseSWGOHCharacters = data;
            _this.saveCharInfos(data);
            _this.syncstatus = 'Anfrage 1 von ' + callsToGo + ' bei SWGOH OK';
            console.log('second call = ' + 'https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/');
            _this.http.get('https://cors-anywhere.herokuapp.com/' + 'https://swgoh.gg/api/ships/', { responseType: 'json' })
                .subscribe(function (data) {
                _this.jsonResponseSWGOHShips = data;
                _this.syncstatus = 'Anfrage 2 von ' + callsToGo + ' bei SWGOH OK';
                console.log('third call = ' + 'https://cors-anywhere.herokuapp.com/' + _this.settings.apiUrl);
                _this.http.get('https://cors-anywhere.herokuapp.com/' + _this.settings.apiUrl, { responseType: 'json' })
                    .subscribe(function (data) {
                    _this.jsonResponseSWGOH = data;
                    _this.syncstatus = 'Anfrage 3 von ' + callsToGo + ' bei SWGOH OK';
                    console.log('fourth call = ' + 'https://cors-anywhere.herokuapp.com/' + zetaLink);
                    if (callsToGo == 4) {
                        _this.http.get('https://cors-anywhere.herokuapp.com/' + zetaLink, { responseType: 'text' })
                            .subscribe(function (data) {
                            _this.htmlResponseSWGOHZetas = data;
                            _this.syncstatus = 'Anfrage 4 von ' + callsToGo + ' bei SWGOH OK';
                            _this.updateGildenInfos();
                        });
                    }
                    else {
                        _this.updateGildenInfos();
                    }
                });
            });
        });
    };
    gildenService.prototype.updateGildenInfos = function () {
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
                    char.imageUrl = this.jsonResponseSWGOHCharacters[i].image.replace("//swgoh.gg/static/img/assets/tex.", "");
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
            var parser = new DOMParser();
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
                this.gildenInfos.Members = this.gildenInfos.Members.sort(function (a, b) { return b.OGM - a.OGM; });
                break;
            case "CGM":
                this.gildenInfos.Members = this.gildenInfos.Members.sort(function (a, b) { return b.CGM - a.CGM; });
                break;
            case "FGM":
                this.gildenInfos.Members = this.gildenInfos.Members.sort(function (a, b) { return b.FGM - a.FGM; });
                break;
            case "Name":
                this.gildenInfos.Members = this.gildenInfos.Members.sort(function (a, b) { return a.Name.localeCompare(b.Name); });
                break;
            default:
                this.gildenInfos.Members = this.gildenInfos.Members.sort(function (a, b) { return a.Name.localeCompare(b.Name); });
                break;
        }
        this.saveGildenInfos(this.gildenInfos);
        console.log(this.gildenInfos);
    };
    gildenService.prototype.getMemberByName = function (name) {
        return this.gildenInfos.Members.find(function (a) { return a.Name == name; });
    };
    gildenService.prototype.addCharakterToGildenInfos = function (char) {
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
        }
        else {
            var memberTemp = new Member();
            memberTemp.Name = char.Besitzer;
            memberTemp.Charaktere.push(char);
            this.gildenInfosTemp.Members.push(memberTemp);
            console.log('Added Member: ' + memberTemp.Name);
        }
    };
    gildenService.prototype.addShipToGildenInfos = function (ship) {
        this.gildenInfosTemp.OGM += ship.Power;
        this.gildenInfosTemp.FGM += ship.Power;
        var MemberNow = this.TempfindMemberbyName(ship.Besitzer);
        if (MemberNow != null) {
            MemberNow.Ships.push(ship);
            MemberNow.OGM += ship.Power;
            MemberNow.FGM += ship.Power;
        }
        else {
            var memberTemp = new Member();
            memberTemp.Name = ship.Besitzer;
            memberTemp.Ships.push(ship);
            this.gildenInfosTemp.Members.push(memberTemp);
            console.log('Added Member: ' + memberTemp.Name);
        }
    };
    //GildenInfos Function
    gildenService.prototype.findMemberbyName = function (memberName) {
        for (var i = 0; i < this.gildenInfos.Members.length; i++) {
            if (this.gildenInfos.Members[i].Name == memberName) {
                return this.gildenInfos.Members[i];
            }
        }
        return null;
    };
    gildenService.prototype.findCharbyNameAndMember = function (memberName, charName) {
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
    };
    gildenService.prototype.TempfindMemberbyName = function (memberName) {
        for (var i = 0; i < this.gildenInfosTemp.Members.length; i++) {
            if (this.gildenInfosTemp.Members[i].Name == memberName) {
                return this.gildenInfosTemp.Members[i];
            }
        }
        return null;
    };
    gildenService.prototype.findSquads = function (squadToFind) {
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
    };
    gildenService.prototype.compareSquads = function (a, b) {
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
    };
    gildenService.prototype.findCharByName = function (charName) {
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
    };
    gildenService.prototype.findCharByNameAndStar = function (charName, star) {
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
    };
    gildenService.prototype.findShipByNameAndStar = function (charName, star) {
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
    };
    gildenService.prototype.compareChar = function (a, b) {
        if (a.Power > b.Power)
            return -1;
        if (a.Power < b.Power)
            return 1;
        return 0;
    };
    gildenService.prototype.getCharByNameAndMember = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        for (var i = 0; i < member.Charaktere.length; i++) {
            if (member.Charaktere[i].Name.toLowerCase().includes(name.toLowerCase())) {
                return member.Charaktere[i];
            }
        }
        return null;
    };
    gildenService.prototype.getCharByNameAndMemberExact = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        for (var i = 0; i < member.Charaktere.length; i++) {
            if (member.Charaktere[i].Name.toLowerCase() == name.toLowerCase()) {
                return member.Charaktere[i];
            }
        }
        return null;
    };
    gildenService.prototype.getShipByNameAndMemberExact = function (name, member) {
        if (name == undefined || name == '') {
            return null;
        }
        for (var i = 0; i < member.Ships.length; i++) {
            if (member.Ships[i].Name.toLowerCase() == name.toLowerCase()) {
                return member.Ships[i];
            }
        }
        return null;
    };
    gildenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], gildenService);
    return gildenService;
}());

var GildenInfos = /** @class */ (function () {
    function GildenInfos() {
        this.Members = new Array();
        this.OGM = 0;
        this.CGM = 0;
        this.FGM = 0;
        this.CharsForTW = 0;
    }
    return GildenInfos;
}());

var Member = /** @class */ (function () {
    function Member() {
        this.Charaktere = new Array();
        this.Ships = new Array();
        this.OGM = 0;
        this.CGM = 0;
        this.FGM = 0;
    }
    return Member;
}());
var Charakter = /** @class */ (function () {
    function Charakter() {
    }
    return Charakter;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    return Ship;
}());
var squad = /** @class */ (function () {
    function squad() {
        this.Name = 'SquadName';
        this.Charaktere = new Array();
    }
    return squad;
}());


/***/ }),

/***/ "./src/app/services/settingsService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());

var Settings = /** @class */ (function () {
    function Settings() {
        this.apiUrl = "";
        this.gildenUrl = "";
        this.sortMemberBy = "OGM";
        this.showErrors = true;
        this.useAutoComplete = true;
        this.autoSyncNow = false;
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/settings/setting.css":
/***/ (function(module, exports) {

module.exports = "select {\r\n  width: 100%;\r\n  padding: 16px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\ninput[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Customize the label (the container) */\r\n\r\n.container {\r\n  display: block;\r\n  position: relative;\r\n  float: left;\r\n  left: 135px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  /*font-size: 22px;*/\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  top: -50px;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n  position: absolute;\r\n  top:12px;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  float: left;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.container .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n} \r\n"

/***/ }),

/***/ "./src/app/settings/setting.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <fieldset>\r\n    <legend>Settings :</legend>\r\n\r\n    <p style=\"float:left\">Gilden-URL:</p>\r\n    <input type=\"text\" placeholder=\"api-url ( e.g https://swgoh.gg/g/39155/schatten-koll3ktiv/ )\" [(ngModel)]=\"this.settings.gildenUrl\">\r\n\r\n    <p style=\"float:left\">Sort Member by:</p>\r\n    <select [(ngModel)]=\"this.settings.sortMemberBy\">\r\n      <option value=\"OGM\">Overall GM</option>\r\n      <option value=\"CGM\">Charakter GM</option>\r\n      <option value=\"FGM\">Fleet GM</option>\r\n      <option value=\"Name\">Name</option>\r\n    </select>\r\n\r\n    <p>Use Autocomplete:</p>\r\n\r\n    <p>Show Errors:</p>\r\n\r\n    <label class=\"container\" style=\"top:-85px\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.useAutoComplete\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n\r\n    <label class=\"container\">\r\n      <input type=\"checkbox\" [(ngModel)]=\"this.settings.showErrors\">\r\n      <span class=\"checkmark\"></span>\r\n    </label>\r\n\r\n    <button (click)=\"saveSettings()\">Save Settings</button>\r\n  </fieldset>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = /** @class */ (function () {
    function SettingComponent(settingsService, router) {
        this.settingsService = settingsService;
        this.router = router;
        this.settings = this.settingsService.getSettings();
    }
    SettingComponent.prototype.saveSettings = function () {
        if (this.settings.gildenUrl.startsWith("https://swgoh.gg/g/")) {
            this.settings.gildenUrl = this.settings.gildenUrl;
            var urlTemp = this.settings.gildenUrl.replace("https://swgoh.gg/g/", "");
            console.log(urlTemp);
            var n = urlTemp.indexOf('/');
            urlTemp = urlTemp.substring(0, n != -1 ? n : urlTemp.length);
            console.log(urlTemp);
            var urlTemp2 = "https://swgoh.gg/api/guilds/" + urlTemp + "/units/";
            this.settings.apiUrl = urlTemp2;
            console.log(this.settings.apiUrl);
        }
        this.settings.autoSyncNow = true;
        this.settingsService.saveSettings(this.settings);
        this.router.navigate(['./home']);
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'setting',
            template: __webpack_require__("./src/app/settings/setting.html"),
            styles: [__webpack_require__("./src/app/settings/setting.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/squadSearch/squadsearch.css":
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.parentOfImages {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 55px;\r\n  height: 80px;\r\n}\r\n\r\n.charImage {\r\n  z-index: -1;\r\n  position: absolute;\r\n  top: -25px;\r\n  left: -25px;\r\n  border-radius: 50%;\r\n  transform: scale(0.4, 0.4);\r\n  -ms-transform: scale(0.4, 0.4);\r\n  -webkit-transform: scale(0.4, 0.4);\r\n}\r\n\r\n.star11 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 6px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star12 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 13px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star13 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 21px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star14 {\r\n  position: absolute;\r\n  top: -5px;\r\n  left: 30px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star15 {\r\n  position: absolute;\r\n  top: -3px;\r\n  left: 39px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star16 {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 48px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.star17 {\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 55px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta1 {\r\n  position: absolute;\r\n  top: 37px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta2 {\r\n  position: absolute;\r\n  top: 21px;\r\n  left: -5px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.zeta3 {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 0px;\r\n  transform: scale(0.6, 0.6);\r\n  -ms-transform: scale(0.6, 0.6);\r\n  -webkit-transform: scale(0.6, 0.6);\r\n  z-index: 2;\r\n}\r\n\r\n.gearImage {\r\n  position: absolute;\r\n  top: -0px;\r\n  left: -0px;\r\n  z-index: 0;\r\n  transform: scale(0.7, 0.7);\r\n  -ms-transform: scale(0.7, 0.7);\r\n  -webkit-transform: scale(0.7, 0.7);\r\n}\r\n\r\n.char-level {\r\n  color: #fff;\r\n  background-color: #264257;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  top: 45px;\r\n  left: 40px;\r\n  z-index: 2;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.char-gear-level {\r\n  color: #fff;\r\n  background-color: #006600;\r\n  border: 2px solid #fff;\r\n  text-align: center;\r\n  border-radius: 100%/130% 130% 15px 15px;\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 55px;\r\n  z-index: 3;\r\n  width: 15px;\r\n  padding: 0 5px;\r\n  font-size: x-small;\r\n}\r\n\r\n.divForChar {\r\n  width: 58px;\r\n  height: 90px;\r\n  display: inline-block;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n\r\n.progress1 {\r\n  background-color: #bcd6ff;\r\n  border: 0;\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 13px;\r\n  height: 18px;\r\n  width: 55px;\r\n}\r\n\r\n.progressText {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 23px;\r\n}\r\n\r\nselect {\r\n  padding: 10px 10px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\nbutton {\r\n  background-color: #2196F3;\r\n  border: none;\r\n  color: white;\r\n  padding: 16px 32px;\r\n  text-decoration: none;\r\n  /*margin: 4px 2px;*/\r\n  cursor: pointer;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 11; /* Sit on top */\r\n  padding-top: 50px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n  position: relative;\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 95%;\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: animatetop;\r\n  animation-duration: 0.4s\r\n}\r\n\r\n/* Add Animation */\r\n\r\n@-webkit-keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n@keyframes animatetop {\r\n  from {\r\n    top: -300px;\r\n    opacity: 0\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: white;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.modal-header {\r\n  padding: 2px 16px;\r\n  background-color: #2196F3;\r\n  color: white;\r\n}\r\n\r\n.modal-body {\r\n  padding: 2px 16px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/squadSearch/squadsearch.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;\">\r\n  <div style=\"width:68%; display: inline-block;\">\r\n    <select style=\"width:100%;\" [(ngModel)]=\"selectedTeam\" (ngModelChange)=\"getSquadsFromGildenInfos()\">\r\n      <option *ngFor=\"let team of myTeams\" [ngValue]=\"team\">{{team.Name}}</option>\r\n    </select>\r\n  </div>\r\n  <div style=\"width: 30%; display: inline-block;\">\r\n<button (click)=\"deleteThisTeam()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">Del</button>\r\n<button (click)=\"openModal()\" style=\"display: inline-block; position: relative; padding: 7px 5px; width: 30%;\">Add</button>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let squad of squadsFromGildenInfos\" class=\"charNow\">\r\n  <fieldset style=\"height:85%\">\r\n    <legend>{{selectedTeam.Name}} of {{squad[0].Besitzer}}</legend>\r\n    Power: {{getPowerOfSquad(squad)}}\r\n    <br />\r\n    <div style=\"height:80%; width:100%\">\r\n      <div *ngIf=\"squad[0]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[0].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[0].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[0].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[0].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[0].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[0].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[0].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[0].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[0].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[0].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[0].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[0].imageUrl}}\" alt=\"{{squad[0].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[0].gearLevel}}.png\" alt=\"{{squad[0].Name}}\">\r\n          <span class=\"char-level\">{{squad[0].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[0].gearLevel)}}</span>\r\n          <progress class=\"progress1\" value=\"{{squad[0].Power}}\" max=\"{{squad[0].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[0].Power/squad[0].MaxPower)*100) }}%</b></span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[1]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[1].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[1].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[1].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[1].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[1].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[1].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[1].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[1].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[1].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[1].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[1].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[1].imageUrl}}\" alt=\"{{squad[1].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[1].gearLevel}}.png\" alt=\"{{squad[1].Name}}\">\r\n          <span class=\"char-level\">{{squad[1].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[1].gearLevel)}}</span>\r\n          <progress class=\"progress1\" value=\"{{squad[1].Power}}\" max=\"{{squad[1].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[1].Power/squad[1].MaxPower)*100) }}%</b></span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[2]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[2].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[2].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[2].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[2].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[2].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[2].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[2].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[2].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[2].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[2].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[2].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[2].imageUrl}}\" alt=\"{{squad[2].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[2].gearLevel}}.png\" alt=\"{{squad[2].Name}}\">\r\n          <span class=\"char-level\">{{squad[2].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[2].gearLevel)}}</span>\r\n          <progress class=\"progress1\" value=\"{{squad[2].Power}}\" max=\"{{squad[2].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[2].Power/squad[2].MaxPower)*100) }}%</b></span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[3]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[3].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[3].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[3].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[3].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[3].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[3].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[3].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[3].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[3].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[3].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[3].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[3].imageUrl}}\" alt=\"{{squad[3].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[3].gearLevel}}.png\" alt=\"{{squad[3].Name}}\">\r\n          <span class=\"char-level\">{{squad[3].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[3].gearLevel)}}</span>\r\n          <progress class=\"progress1\" value=\"{{squad[3].Power}}\" max=\"{{squad[3].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[3].Power/squad[3].MaxPower)*100) }}%</b></span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div *ngIf=\"squad[4]\" class=\"divForChar\">\r\n        <div class=\"parentOfImages\">\r\n\r\n          <img *ngIf=\"squad[4].Sterne>0\" src=\"/assets/picture/star.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne<1\" src=\"/assets/picture/nostar.png\" class=\"star11\">\r\n          <img *ngIf=\"squad[4].Sterne>1\" src=\"/assets/picture/star.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne<2\" src=\"/assets/picture/nostar.png\" class=\"star12\">\r\n          <img *ngIf=\"squad[4].Sterne>2\" src=\"/assets/picture/star.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne<3\" src=\"/assets/picture/nostar.png\" class=\"star13\">\r\n          <img *ngIf=\"squad[4].Sterne>3\" src=\"/assets/picture/star.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne<4\" src=\"/assets/picture/nostar.png\" class=\"star14\">\r\n          <img *ngIf=\"squad[4].Sterne>4\" src=\"/assets/picture/star.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne<5\" src=\"/assets/picture/nostar.png\" class=\"star15\">\r\n          <img *ngIf=\"squad[4].Sterne>5\" src=\"/assets/picture/star.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne<6\" src=\"/assets/picture/nostar.png\" class=\"star16\">\r\n          <img *ngIf=\"squad[4].Sterne>6\" src=\"/assets/picture/star.png\" class=\"star17\">\r\n          <img *ngIf=\"squad[4].Sterne<7\" src=\"/assets/picture/nostar.png\" class=\"star17\">\r\n\r\n          <img *ngIf=\"squad[4].Zetas>=1\" src=\"/assets/picture/zeta.png\" class=\"zeta1\">\r\n          <img *ngIf=\"squad[4].Zetas>=2\" src=\"/assets/picture/zeta.png\" class=\"zeta2\">\r\n          <img *ngIf=\"squad[4].Zetas>=3\" src=\"/assets/picture/zeta.png\" class=\"zeta3\">\r\n\r\n          <img class=\"charImage\" src=\"/assets/picture/{{squad[4].imageUrl}}\" alt=\"{{squad[4].Name}}\">\r\n          <img class=\"gearImage\" src=\"/assets/GearPNG/gear-icon-g{{squad[4].gearLevel}}.png\" alt=\"{{squad[4].Name}}\">\r\n          <span class=\"char-level\">{{squad[4].Level}}</span>\r\n          <span class=\"char-gear-level\">{{formatGearLevel(squad[4].gearLevel)}}</span>\r\n          <progress class=\"progress1\" value=\"{{squad[4].Power}}\" max=\"{{squad[4].MaxPower}}\"></progress> <span class=\"progressText\"><b>{{ roundNumber((squad[4].Power/squad[4].MaxPower)*100) }}%</b></span>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n\r\n\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <span class=\"close\" (click)=\"closeModal()\">&times;</span>\r\n      <h2>Add a Squad</h2>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n\r\n      <p>\r\n        <input type=\"text\" placeholder=\"Squadname ( e.g 'Phönix' or 'Brotini'  )\" [(ngModel)]=\"squadName\">\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Leader :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedLeader\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\"  [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedLeader\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 2 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar2\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar2\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 3 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar3\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar3\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 4 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar4\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar4\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n      <p style=\"width:100%;\">\r\n        Char 5 :\r\n        <select *ngIf=\"!(settingsService.settings.useAutoComplete)\" [(ngModel)]=\"selectedChar5\">\r\n          <option *ngFor=\"let char of gildenService.charInfos\" [ngValue]=\"char.name\">{{char.name}}</option>\r\n        </select>\r\n\r\n        <ngx-select-dropdown *ngIf=\"(settingsService.settings.useAutoComplete)\" [config]=\"autoCompleteConfig\" [options]=\"gildenService.charInfos\"\r\n                             [(value)]=\"selectedChar5\" [multiple]=\"false\">\r\n        </ngx-select-dropdown>\r\n      </p>\r\n\r\n      <button style=\"width: 100%\" (click)=\"addSquadToMyTeams()\">Confirm</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/squadSearch/squadsearch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquadSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gildenService__ = __webpack_require__("./src/app/services/gildenService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settingsService__ = __webpack_require__("./src/app/services/settingsService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'squadsearch',
            template: __webpack_require__("./src/app/squadSearch/squadsearch.html"),
            styles: [__webpack_require__("./src/app/squadSearch/squadsearch.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settingsService__["b" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_1__services_gildenService__["a" /* gildenService */]])
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map