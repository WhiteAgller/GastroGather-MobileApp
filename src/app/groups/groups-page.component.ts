import {Component, ComponentRef, OnInit} from '@angular/core';
import {PageListViewComponent} from "../core/page-list-view/page-list-view.component";
import {IonicModule, ModalOptions} from "@ionic/angular";
import {YourRequestsComponent} from "../friends/your-requests/your-requests.component";
import {HttpClient} from "@angular/common/http";
import {YourGroupsComponent} from "./your-groups/your-groups.component";
import {AddGroupComponent} from "./add-group/add-group.component";
import {IonModalHeaderComponent} from "../core/ion-modal-header/ion-modal-header.component";
import {IonPageHeaderComponent} from "../core/ion-page-header/ion-page-header.component";

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
  imports: [
    IonModalHeaderComponent,
    PageListViewComponent,
    IonicModule,
    IonPageHeaderComponent
  ],
  standalone: true
})
export class GroupsPageComponent  implements OnInit {

  public components= [YourGroupsComponent, YourRequestsComponent]

  public addComponentModal : ModalOptions = {
    component: AddGroupComponent,
  }
  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
  }
}
