import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {UsernamePipe} from "../../core/pipes/username.pipe";
import {IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {IonModalHeaderComponent} from "../../core/ion-modal-header/ion-modal-header.component";
import {IonFabComponent} from "../../core/ion-fab/ion-fab.component";
import {ListViewComponent} from "../../core/list-view/list-view.component";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss'],
  imports: [
    NgForOf,
    UsernamePipe,
    IonContent,
    IonModalHeaderComponent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonTitle,
    ListViewComponent,
    IonFabComponent,
    ListViewComponent
  ],
  standalone: true
})
export class AddGroupComponent implements OnInit {

  public friends: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  protected readonly UsernamePipe = new UsernamePipe();
}
