import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        loadComponent: () =>
          import('../events/events-page.component').then((m) => m.EventsPage),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home-page.component').then((m) => m.HomePage),
      },
      {
        path: 'friends',
        loadComponent: () =>
          import('../friends/friends-page.component').then((m) => m.FriendsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../profile/profile-page.component').then((m) => m.ProfilePage),
  },
];
