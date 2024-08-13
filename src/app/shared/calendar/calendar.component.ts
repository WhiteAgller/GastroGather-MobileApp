import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent, IonDatetime, IonHeader, IonModal, ModalController} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonContent, IonDatetime, IonModal, IonButton, FormsModule]
})
export class CalendarComponent  implements OnInit {

  public selectedDate: Date = new Date();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  select(){
    this.modalCtrl.dismiss(this.selectedDate, 'selected');
  }

}
