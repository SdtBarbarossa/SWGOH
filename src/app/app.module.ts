import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home';
import { SettingComponent } from './settings/setting';
import { CharSearchComponent } from './charSearch/charsearch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settingsService';
import { gildenService } from './services/gildenService';
import { HttpClient, HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { SquadSearchComponent } from './squadSearch/squadsearch';
import { TBPlatoonComponent } from './TBPlatoons/platoontool';
import { RaidPlannerComponent } from './RaidPlanner/raidplanner';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { LZStringModule, LZStringService } from 'ng-lz-string';
import { ArenaTeamsComponent } from './arenaTeams/arenaTeams';
import { gearLinkPipe } from './pipes/charpipe/gearLink.pipe';
import { CharNamePipe } from './pipes/charpipe/charName.pipe';
import { CharImageLinkPipe } from './pipes/charpipe/charLink.pipe';
import { CharGearPipe } from './pipes/charpipe/charGear.pipe';
import { ModSetNamePipe } from './pipes/modpipes/ModSetName.pipe';
import { ModStatNamePipe } from './pipes/modpipes/ModStatName.pipe';
import { ModStatValuePipe } from './pipes/modpipes/ModStatValue.pipe';
import { ModSlotNamePipe } from './pipes/modpipes/ModSlotName.pipe';
import { newCharSearchComponent } from './newCharSearch/newCharSearch';
import { DxDataGridModule, DxTextAreaModule } from 'devextreme-angular';
import { ColumnWidthPipe } from './pipes/columnwidth.pipe';
import { ColumnTypePipe } from './pipes/columntype.pipe';
import { ColumnFixedPipe } from './pipes/columnfixed.pipe';
import { LanguagePipe } from './pipes/language/language.pipe';
import { EventsComponent } from './events/events';
import { EventShowPipe } from './pipes/events/eventShow.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    CharSearchComponent,
    SquadSearchComponent,
    TBPlatoonComponent,
    RaidPlannerComponent,
    ArenaTeamsComponent,
    newCharSearchComponent,
    EventsComponent,

    //Pipes here

    gearLinkPipe,
    CharNamePipe,
    CharImageLinkPipe,
    CharGearPipe,
    ModSetNamePipe,
    ModStatNamePipe,
    ModStatValuePipe,
    ModSlotNamePipe,
    ColumnWidthPipe,
    ColumnTypePipe,
    ColumnFixedPipe,
    LanguagePipe,
    EventShowPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SelectDropDownModule,
    LZStringModule,
    DxDataGridModule,
    DxTextAreaModule
  ],
  providers: [SettingsService, gildenService, HttpClient, LZStringService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
