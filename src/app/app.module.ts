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
import { SelectDropDownModule } from 'ngx-select-dropdown'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    CharSearchComponent,
    SquadSearchComponent,
    TBPlatoonComponent,
    RaidPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SelectDropDownModule
  ],
  providers: [SettingsService, gildenService, HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
