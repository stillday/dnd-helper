import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SpellComponent } from './spell/spell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SpellDetailComponent },
  { path: 'spell', component: SpellComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
