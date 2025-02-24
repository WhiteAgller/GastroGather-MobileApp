import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Event} from "../Models/Event";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonInput,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IonPageHeaderComponent} from "../core/ion-page-header/ion-page-header.component";


@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
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
    IonPageHeaderComponent
  ],
  standalone: true
})
export class HomePage implements OnInit {

  historyTableEvents: Event[] = [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {}

  openEventDetailModal(i: number) {
    this.router.navigateByUrl("profile");
  }

  public redirectToProfile(){
    this.router.navigateByUrl("profile");
  }
}
