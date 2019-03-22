import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { SettingComponent } from './settings/setting';
import { SquadSearchComponent } from './squadSearch/squadsearch';
import { TBPlatoonComponent } from './TBPlatoons/platoontool';
import { RaidPlannerComponent } from './RaidPlanner/raidplanner';
import { ArenaTeamsComponent } from './arenaTeams/arenaTeams';
import { newCharSearchComponent } from './newCharSearch/newCharSearch';
import { EventsComponent } from './events/events';
import { ComparerComponent } from './comparer/comparer';
import { FleetTeamsComponent } from './fleetTeams/fleetTeams';
import { ShipSearchComponent } from './shipSearch/shipSearch';
import { MemberTrackingComponent } from './MemberTracking/membertracking';
import { ZetasComponent } from './zetas/zetas';
import { SKInternalComponent } from './skInternal/skinternal';
import { GuildchartsComponent } from './guildcharts/guildcharts';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingComponent
  },
  {
    path: 'squadsearch',
    component: SquadSearchComponent
  },
  {
    path: 'platoontool',
    component: TBPlatoonComponent
  },
  {
    path: 'raidplanner',
    component: RaidPlannerComponent
  },
  {
    path: 'arenateams',
    component: ArenaTeamsComponent
  },
  {
    path: 'newCharSearch',
    component: newCharSearchComponent
  }, 
  {
    path: 'comparer',
    component: ComparerComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'fleetarena',
    component: FleetTeamsComponent
  },
  {
    path: 'shipsearch',
    component: ShipSearchComponent
  },
  {
    path: 'membertracking',
    component: MemberTrackingComponent
  },
  {
    path: 'zetas',
    component: ZetasComponent
  },
  {
    path: 'skinternal',
    component: SKInternalComponent
  },
  {
    path: 'guildcharts',
    component: GuildchartsComponent
  }, 
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
