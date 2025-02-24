import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton, IonButtons,
  IonHeader, IonIcon,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";
import {Location, NgClass, NgIf, NgStyle} from "@angular/common";


@Component({
  selector: 'app-modal-ion-header',
  templateUrl: './ion-modal-header.component.html',
  styleUrls: ['./ion-modal-header.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    NgIf,
    NgStyle,
    NgClass,
    IonButtons,
  ]
})
export class IonModalHeaderComponent {

  @Input()
  public name: string = "";

  constructor(private modalCtrl: ModalController) { }


  public async close(){
    await this.modalCtrl.dismiss();
  }
}
