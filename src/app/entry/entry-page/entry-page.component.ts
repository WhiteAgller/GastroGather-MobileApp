import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar, NavController
} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {GenericOAuth2} from "@capacitor-community/generic-oauth2";
import {oAuthOptions} from "../../../environments/environment";
import {CurrentUserService} from "../../core/services/current-user-service";


@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss'],
  imports: [
    NgForOf,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonList,
    IonItem,
    IonCol,
    IonInput,
    IonButton,
    IonIcon
  ],
  standalone: true
})
export class EntryPageComponent implements OnInit {
  public accessToken: any;
  public refreshToken: any;
  constructor(private router: Router, private currentUserService: CurrentUserService) { }

  ngOnInit() {}

  public async login(){
    GenericOAuth2.authenticate(oAuthOptions)
      .then(response => {
        this.accessToken = response['access_token']; // storage recommended for android logout
        this.refreshToken = response['refresh_token'];

        if(this.accessToken){
          this.currentUserService.setUserName(this.accessToken);
          this.router.navigate(['/tabs/home'])
        }

        // only if you include a resourceUrl protected user values are included in the response!
        let oauthUserId = response['id'];
        let name = response['name'];

      })
      .catch(reason => {
        console.error('OAuth rejected', reason);
      });
    //await this.router.navigate(['login']);
  }

  public register(){
    this.router.navigate(['/register']);
  }

}
