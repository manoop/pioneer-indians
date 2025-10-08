import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { CommunityComponent } from './pages/community/community.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'events', component: EventsComponent, data: { animation: 'EventsPage' } },
  { path: 'programs', component: ProgramsComponent, data: { animation: 'ProgramsPage' } },
  { path: 'community', component: CommunityComponent, data: { animation: 'CommunityPage' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
