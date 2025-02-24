import { Routes } from '@angular/router';
import {EntryPageComponent} from "./entry/entry-page/entry-page.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadComponent: () =>
      import('./entry/entry-page/entry-page.component').then(m => m.EntryPageComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./entry/register/register.component').then((m) => m.RegisterComponent),
  },
];

