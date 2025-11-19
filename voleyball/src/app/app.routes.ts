import { Routes } from '@angular/router';
import { RulesComponent } from './rules-component/rules-component';
import { TurnirComponent } from './turnir-component/turnir-component';

export const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'turnir', component: TurnirComponent }
];