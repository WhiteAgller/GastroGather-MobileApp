import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {IonModalHeaderComponent} from "../../../core/ion-modal-header/ion-modal-header.component";

@Component({
  selector: 'app-add-friend-username',
  templateUrl: './add-friend-username.component.html',
  styleUrls: ['./add-friend-username.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    ReactiveFormsModule,
    IonModalHeaderComponent
  ],
  standalone: true
})
export class AddFriendUsernameComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private httpClient: HttpClient) { }

  form: any = null;

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
    });
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  submit(){
    this.httpClient.post("/api" + `/FriendInvite`, {friendsUsername: this.getUsername()})
      .subscribe( async  x=>{
        await this.close();
      });
    this.getUsername()
  }

  private getUsername(){
    return this.form.controls.username.value;
  }
}
