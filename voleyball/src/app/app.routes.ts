import { Routes } from '@angular/router';
import { HistoryComponent } from './history-component/history-component';
import { RulesComponent } from './rules-component/rules-component';
import { TurnirComponent } from './turnir-component/turnir-component';

export const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'turnir', component: TurnirComponent },
  { path: 'history', component: HistoryComponent }
];