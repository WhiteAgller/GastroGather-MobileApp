import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {
  IonAvatar,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonItem, IonLabel,
  IonList, IonTabBar, IonTabButton, IonTabs, ModalController
} from "@ionic/angular/standalone";
import {NgForOf, NgIf} from "@angular/common";
import {UsernamePipe} from "../core/pipes/username.pipe";
import {YourRequestsComponent} from "./your-requests/your-requests.component";
import {YourFriendsComponent} from "./your-friends/your-friends.component";
import {AddFriendUsernameComponent} from "./add-friend/add-friend-username/add-friend-username.component";
import {IonPageHeaderComponent} from "../core/ion-page-header/ion-page-header.component";

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
  imports: [
    IonPageHeaderComponent,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonFabList,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    NgForOf,
    UsernamePipe,
    IonTabs,
    IonTabBar,
    IonTabButton,
    NgIf,
    YourRequestsComponent,
    YourFriendsComponent
  ],
  standalone: true
})
export class FriendsPage implements OnInit {

  public dataSource: any;
  public yourFriendsSelected: boolean = true;
  public yourRequestsSelected: boolean = false;
  constructor(private httpClient: HttpClient, private modalCtrl: ModalController) { }

  async ngOnInit() {
    await this.loadData();
  }

  public async loadData(){
    this.httpClient.get("/api" + "/User/GetAllFriends").subscribe((res: any) => {
      this.dataSource = res.items;
    });
  }

  selectTab(tab: 'friends' | 'requests'): void {
    this.yourFriendsSelected = (tab === 'friends');
    this.yourRequestsSelected = (tab === 'requests');
  }

  public async inviteUserByUsername(){
    const modal = await this.modalCtrl.create({
      component: AddFriendUsernameComponent,
      cssClass: "small-modal",
      initialBreakpoint: 1,
      breakpoints: [0, 1]
    });

    await modal.present();
  }

}
