import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  IonAvatar,
  IonButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList, IonRefresher, IonRefresherContent
} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";
import {UsernamePipe} from "../../core/pipes/username.pipe";
import {CurrentUserService} from "../../core/services/current-user-service";


@Component({
  selector: 'app-your-requests',
  templateUrl: './your-requests.component.html',
  styleUrls: ['./your-requests.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    NgForOf,
    UsernamePipe,
    IonButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonRefresher,
    IonRefresherContent
  ]
})
export class YourRequestsComponent implements OnInit {

  public dataSource: any;
  constructor(private httpClient: HttpClient, private currentUser: CurrentUserService) { }

  async ngOnInit() {
    await this.loadData(null);
  }
  public async loadData(event: any) {
    this.httpClient.get("/api" + "/User/GetAllFriendInvites").subscribe((res: any) => {
      this.dataSource = res.items;
      if(event){
        event.target.complete();
      }
    });
  }

  public acceptInvitation(user: any){
    const currentUser = this.currentUser.getUsername();
    const invitation: any = user.friendInvitesSent.find((x: any) => x.friendsUsername == currentUser);
    this.httpClient.put("/api" + `/FriendInvite/Accept?id=${invitation.id}`, null).subscribe();
  }

  public declineInvitation(index: number){
    this.httpClient.put("/api" + "/FriendInvite/Decline", null);
  }


}
