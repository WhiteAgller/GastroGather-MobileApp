import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {EntryPageComponent} from "../entry/entry-page/entry-page.component";

export const routes: Routes = [
  {
    path: "",
    component: EntryPageComponent
  },
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
        path: 'groups',
        loadComponent: () => import('../groups/groups-page.component').then((m) => m.GroupsPageComponent),
      },
      {
        path: 'friends',
        loadComponent: () =>
          import('../friends/friends-page.component').then((m) => m.FriendsPage),
        children: [
          {
            path: 'your-friends',
            loadComponent: () =>
              import('../events/events-page.component').then((m) => m.EventsPage),
          },
          {
            path: 'your-requests',
            loadComponent: () =>
              import('../events/events-page.component').then((m) => m.EventsPage),
          }
        ]
      },
    ],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../profile/profile-page.component').then((m) => m.ProfilePage),
    data: {
      'backAllowed': true
    }
  }
];
