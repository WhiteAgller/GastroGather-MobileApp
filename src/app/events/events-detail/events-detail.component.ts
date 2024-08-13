import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Event} from "../../Models/Event";
import {ModalController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class EventsDetailComponent  implements OnInit {

  event!: Event;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
