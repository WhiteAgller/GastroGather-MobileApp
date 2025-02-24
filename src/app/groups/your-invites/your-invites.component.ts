import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrentUserService} from "../../core/services/current-user-service";
import {
  IonAvatar,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-your-invites',
  templateUrl: './your-invites.component.html',
  styleUrls: ['./your-invites.component.scss'],
  standalone: true,
  imports: [IonList, IonRefresher, IonRefresherContent, IonItem, IonAvatar, IonLabel, IonButton]
})
export class YourInvitesComponent  implements OnInit {

  public dataSource: any;
  constructor(private httpClient: HttpClient, private currentUser: CurrentUserService) { }

  async ngOnInit() {
    await this.loadData(null);
  }
  public async loadData(event: any) {
    this.httpClient.get("/api" + "/GroupInvite/GetAllInvitesByUserId").subscribe((res: any) => {
      this.dataSource = res.items;
      if(event){
        event.target.complete();
      }
    });
  }

  public acceptInvitation(id: any){
    this.httpClient.put("/api" + `/GroupInvite/Accept?id=${id}`, null).subscribe();
  }

  public declineInvitation(index: number){
    this.httpClient.put("/api" + "/GroupInvite/Decline", null);
  }

}
