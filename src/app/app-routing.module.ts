import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { SettingComponent } from './settings/setting';
import { CharSearchComponent } from './charSearch/charsearch';
import { SquadSearchComponent } from './squadSearch/squadsearch';
import { TBPlatoonComponent } from './TBPlatoons/platoontool';
import { RaidPlannerComponent } from './RaidPlanner/raidplanner';
import { ArenaTeamsComponent } from './arenaTeams/arenaTeams';
import { newCharSearchComponent } from './newCharSearch/newCharSearch';
import { EventsComponent } from './events/events';

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
    path: 'charsearch',
    component: CharSearchComponent
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
    path: 'events',
    component: EventsComponent
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
