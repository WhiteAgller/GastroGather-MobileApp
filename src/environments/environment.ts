// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {OAuth2AuthenticateOptions} from "@capacitor-community/generic-oauth2/dist/esm/definitions";

export const environment = {
  production: false,
  domain: "https://localhost:7054"
};

export const oAuthOptions: OAuth2AuthenticateOptions =
  {
    appId: "my-client-id",
    responseType: "code",
    redirectUrl: "http://localhost:8100",
    accessTokenEndpoint: environment.domain + "/connect/token",
    authorizationBaseUrl: environment.domain + "/connect/authorize",
    pkceEnabled: true,
  }



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
