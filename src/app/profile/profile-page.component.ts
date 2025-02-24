import { Component } from '@angular/core';
import {GenericOAuth2} from "@capacitor-community/generic-oauth2";
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {IonPageHeaderComponent} from "../core/ion-page-header/ion-page-header.component";


@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  imports: [
    IonButton,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonContent,
    IonPageHeaderComponent
  ],
  standalone: true
})
export class ProfilePage{

  accessToken: string = "";
  refreshToken: string = "";

  onOAuthBtnClick() {
    GenericOAuth2.authenticate({android:{appId: ""}, })
      .then(response => {
        this.accessToken = response['access_token']; // storage recommended for android logout
        this.refreshToken = response['refresh_token'];

        // only if you include a resourceUrl protected user values are included in the response!
        let oauthUserId = response['id'];
        let name = response['name'];

        // go to backend
      })
      .catch(reason => {
        console.error('OAuth rejected', reason);
      });
  }

  // Refreshing tokens only works on iOS/Android for now
  onOAuthRefreshBtnClick() {
    if (!this.refreshToken) {
      console.error('No refresh token found. Log in with OAuth first.');
    }

    GenericOAuth2.refreshToken({appId: "", refreshToken: "x", accessTokenEndpoint:"y", scope: "x"})
      .then(response => {
        this.accessToken = response['access_token']; // storage recommended for android logout
        // Don't forget to store the new refresh token as well!
        this.refreshToken = response['refresh_token'];
        // Go to backend
      })
      .catch(reason => {
        console.error('Refreshing token failed', reason);
      });
  }

  onLogoutClick() {
    GenericOAuth2.logout(
      {},
      this.accessToken, // only used on android
    )
      .then(() => {
        // do something
      })
      .catch(reason => {
        console.error('OAuth logout failed', reason);
      });
  }
}
