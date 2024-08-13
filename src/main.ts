import {enableProdMode, LOCALE_ID} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData} from "@angular/common";
import localeCs from '@angular/common/locales/cs';
import {provideHttpClient} from "@angular/common/http";
registerLocaleData(localeCs, 'cs-CZ');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(),
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {timezone: 'UTC +2'}},
    {provide: LOCALE_ID, useValue: 'cs-CZ' }
  ],
});
