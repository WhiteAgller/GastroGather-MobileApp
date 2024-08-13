import { Component, OnInit } from '@angular/core';
import {
  IonButton, IonButtons,
  IonContent, IonDatetime,
  IonHeader, IonIcon, IonInput,
  IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {CalendarComponent} from "../../shared/calendar/calendar.component";
import {TimeComponent} from "../../shared/time/time.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  imports: [
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonContent,
    IonItem,
    IonList,
    IonInput,
    IonIcon,
    IonDatetime,
    ReactiveFormsModule,
    IonLabel
  ],
  standalone: true
})
export class CreateEventComponent  implements OnInit {

  public form: FormGroup;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
    const today = new Date();
    today.setHours(18);
    today.setMinutes(18);

    const date = formatDate(today, "d.m.yyyy", "cs-CZ");
    const time = formatDate(today, "H:MM", "cs-CZ");

    this.form = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventLocation: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventTime: ['', Validators.required]
    });
  }

  ngOnInit() { }

  public create(){
    //crete event
  }

  public async openCalendar(){
    const modal = await this.modalCtrl.create({
      component: CalendarComponent,
      cssClass: "large-modal",
      initialBreakpoint: 1,
      breakpoints: [0, 1]
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'selected') {
      const date = formatDate(data, "d.MM.yyyy", "cs-CZ");
      this.form.controls["eventDate"].setValue(date);
    }
  }

  public async openTimeChooser(){
    const modal = await this.modalCtrl.create({
      component: TimeComponent,
      cssClass: "medium-modal",
      initialBreakpoint: 1,
      breakpoints: [0, 1]
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'selected') {
      const date = formatDate(data, "H:mm", "cs-CZ");
      this.form.controls["eventTime"].setValue(date);
    }

  }
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
