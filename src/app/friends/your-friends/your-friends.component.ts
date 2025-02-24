import { Component, OnInit } from '@angular/core';
import {IonAvatar, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";
import {UsernamePipe} from "../../core/pipes/username.pipe";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-your-friends',
  templateUrl: './your-friends.component.html',
  styleUrls: ['./your-friends.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    NgForOf,
    UsernamePipe,
    IonRefresher,
    IonRefresherContent
  ]
})
export class YourFriendsComponent  implements OnInit {

  public dataSource: any;
  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    await this.loadData(null);
  }

  public async loadData(event: any) {
    this.httpClient.get("/api" + "/User/GetAllFriends").subscribe((res: any) => {
      this.dataSource = res.items;
      if(event){
        event.target.complete();
      }
    });
  }
}
