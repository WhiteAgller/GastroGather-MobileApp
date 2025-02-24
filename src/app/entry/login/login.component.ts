import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {
  IonBackButton,
  IonButton, IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList, IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {GenericOAuth2} from "@capacitor-community/generic-oauth2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonInput,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    IonButtons,
    IonBackButton
  ],
  standalone: true
})
export class LoginComponent {

  public form: FormGroup;

  public accessToken = null;
  public refreshToken = null;

  constructor(private formBuilder: FormBuilder, private _location: Location, private router: Router, private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  close(){
    this._location.back();
  }
  public login(){
    GenericOAuth2.authenticate({})
      .then(response => {
        console.log("test");
        console.log("TADY")
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

}
