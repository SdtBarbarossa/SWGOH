import { Component } from '@angular/core';
import { gildenService } from '../services/gildenService';
import { SettingsService, Settings } from '../services/settingsService';

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
    let lastweek = (d => new Date(d.setDate(d.getDate() - 8)))(new Date);

    this.dataSource = new DataSource({
      store: this.context['internalGuildTracking'],
      pageSize: 10000,
      filter: ["timestamp", ">=", lastweek]
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

  resetFilters() {
    console.log("resetFilters");
    var filter = this.dataSource.filter();

    if (filter != null) {
      let lastweek = (d => new Date(d.setDate(d.getDate() - 8)))(new Date);
      this.dataSource.filter(["timestamp", ">=", lastweek]);
      this.dataSource.load();
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

  maxValChanged(e, fieldname, skinternalChart) {
    let lastweek = (d => new Date(d.setDate(d.getDate() - 8)))(new Date);
    this.dataSource.filter([[fieldname, "<=", e.value], ["timestamp", ">=", lastweek] ]);
    this.dataSource.load();
  }

  customizeTooltip(arg) {
    console.log(arg);
        return {
          text: arg.seriesName + ": " + arg.valueText
        }
    }

}
