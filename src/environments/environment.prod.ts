import {OAuth2AuthenticateOptions} from "@capacitor-community/generic-oauth2/dist/esm/definitions";

export const environment = {
  production: true,
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
