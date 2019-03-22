import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';
import { forEach } from '@angular/router/src/utils/collection';
import ODataContext from "devextreme/data/odata/context";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: 'skinternal',
  templateUrl: './skinternal.html',
  styleUrls: ['./skinternal.css']
})
export class SKInternalComponent {
  
  public dmgP4 = 100;

  private context: ODataContext = new ODataContext({
    url: "https://schattenkollektiv.gear.host/",
  entities: {
    internalGuildTracking: {
      key: "ID",
      keyType: "int"
    }
    },
    version: 4
});
  private dataSource: DataSource;

  public currentfield = "arenarank";
  public fieldNames = [
    "arenarank",
    "fleetrank",
    "overallGM",
    "charGM",
    "fleetGM",
    "spenden"
  ];

  constructor(public settingsService: SettingsService, public gildenService: gildenService) {
    //http://schattenkollektiv.gear.host/internalGuildTracking?
    this.dataSource = new DataSource({
      store: this.context['internalGuildTracking'],
      pageSize: 10000
    });
  }

  onLegendClick(e){
    let series = e.target;
    if (series.isVisible()) {
      series.hide();
    } else {
      series.show();
    }
  }

  onSeriesClick(e) {
    let series = e.target;
    if (series.isVisible()) {
      series.hide();
    } else {
      series.show();
    }
  }

  customizeTooltip(arg) {
    console.log(arg);
        return {
          text: arg.seriesName + ": " + arg.valueText
        }
    }

}
