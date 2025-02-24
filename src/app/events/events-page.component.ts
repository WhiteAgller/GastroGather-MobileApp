import {Component, OnInit} from '@angular/core';
import {Event} from "../Models/Event";
import {DatePipe, NgForOf} from "@angular/common";
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonContent, IonFab, IonFabButton,
  IonGrid,
  IonHeader, IonIcon, IonImg, IonInput, IonItem,
  IonList,
  IonRow, IonSearchbar,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {EventsDetailComponent} from "./events-detail/events-detail.component";
import {CounterComponent} from "../counter/counter.component";
import {DateEventPipe} from "../shared/pipes/date-event-pipe";
import {CreateEventComponent} from "./create-event/create-event.component";
import {IonPageHeaderComponent} from "../core/ion-page-header/ion-page-header.component";

@Component({
  selector: 'app-events',
  templateUrl: 'events-page.component.html',
  styleUrls: ['events-page.component.scss'],
  standalone: true,
  imports: [NgForOf, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonList, IonItem, IonCol, IonInput, IonButton, IonIcon, DatePipe, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonSearchbar, DateEventPipe, IonFab, IonFabButton, IonPageHeaderComponent, IonAccordionGroup, IonAccordion],
})
export class EventsPage implements OnInit {

  events: Event[] = []
  filterResult: Event[] = []

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    this.events = [
      new Event(0,"Birthday#22","123 Main Street",  today, 4),
      new Event(1, "Team building","456 Elm Avenue", tomorrow, 6),
      new Event(2, "After work", "789 Oak Lane", new Date(2024, 3, 15, 15, 4), 2),
      new Event(0,"Birthday#22","123 Main Street",  today, 4),
      new Event(1, "Team building","456 Elm Avenue", tomorrow, 6),
      new Event(2, "After work", "789 Oak Lane", new Date(2024, 3, 15, 15, 4), 2),
      new Event(0,"Birthday#22","123 Main Street",  today, 4),
      new Event(1, "Team building","456 Elm Avenue", tomorrow, 6),
      new Event(2, "After work", "789 Oak Lane", new Date(2024, 3, 15, 15, 4), 2)
    ]
    this.filterResult = [...this.events];
  }

  async openEventDetailModal(id: number, event: any){
    event.stopPropagation();
    const modal = await this.modalCtrl.create({
      component: EventsDetailComponent,
      cssClass: 'medium-modal',
      componentProps: {
        event: this.events.find(x => x.id == id)
      }
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  public async openCounter(id: number) {
    const modal = await this.modalCtrl.create({
      component: CounterComponent,
      componentProps: {
        activeEvent: this.events.find(x => x.id == id)
      }
    });
    await modal.present();
  }

  public async createNewEvent(){
    const modal = await this.modalCtrl.create({
      component: CreateEventComponent
    });

    await modal.present();
  }

  public filterData(event: any){
    const query = event.target.value.toLowerCase();
    this.filterResult = this.events.filter((d) => d.name.toLowerCase().indexOf(query) > -1);
  }

  public data(){

  }
}
