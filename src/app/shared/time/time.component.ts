import { Component, OnInit } from '@angular/core';
import {IonButton, IonContent, IonDatetime, IonHeader, IonModal, ModalController} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  standalone: true,
  imports: [IonContent, IonDatetime, IonModal, IonHeader, IonButton, FormsModule]
})
export class TimeComponent  implements OnInit {

  public selectedTime = new Date();
  constructor(private modalCtrl: ModalController) {
    this.selectedTime.setHours(18);
    this.selectedTime.setMinutes(0);
    console.log(this.selectedTime)
  }

  ngOnInit() {}

  select(){
    this.modalCtrl.dismiss(this.selectedTime, 'selected');
  }

}
