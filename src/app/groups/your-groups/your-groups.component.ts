import { Component, OnInit } from '@angular/core';
import {IonAvatar, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent} from "@ionic/angular/standalone";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {UsernamePipe} from "../../core/pipes/username.pipe";
import {HttpClient} from "@angular/common/http";
import {ListViewComponent} from "../../core/list-view/list-view.component";

@Component({
  selector: 'app-your-groups',
  templateUrl: './your-groups.component.html',
  styleUrls: ['./your-groups.component.scss'],
  imports: [
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonRefresher,
    IonRefresherContent,
    NgForOf,
    UsernamePipe,
    NgOptimizedImage,
    ListViewComponent,
    ListViewComponent
  ],
  standalone: true
})
export class YourGroupsComponent implements OnInit {

  public dataSource: any;
  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    await this.loadData(null);
  }
  public async loadData(event: any) {
    this.httpClient.get("/api" + "/Group/GetAllGroups").subscribe((res: any) => {
      this.dataSource = res.items;
      if(event){
        event.target.complete();
      }
    });
  }

  protected readonly Math = Math;
}
