import { Component, OnInit } from '@angular/core';
import {Event} from "../../Models/Event";
import {
  IonButton, IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss'],
  standalone: true,
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
    IonIcon,
    IonLabel,
    IonButtons
  ],
})
export class EventsDetailComponent  implements OnInit {

  event!: Event;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
