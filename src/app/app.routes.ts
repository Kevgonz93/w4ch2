import { Routes } from '@angular/router';
import { PerDaComponent } from './forms/per-da/per-da.component';
import { LoginComponent } from './forms/login/login.component';

export const routes: Routes = [
  { path: 'per-da', component: PerDaComponent },
  { path: 'login', component: LoginComponent },
];
