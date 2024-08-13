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
    IonIcon
  ],
  standalone: true
})
export class HomePage implements OnInit {

  historyTableEvents: Event[] = [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

    let a = this.httpClient.get("https://localhost:7054/api/Table/AllByUserId?UserId=d4a8be1a-c8b6-4e4e-92d1-321cbbf93e89")
      .subscribe(x => console.log(x));

  }

  openEventDetailModal(i: number) {
    this.router.navigateByUrl("profile");
  }

  public redirectToProfile(){
    this.router.navigateByUrl("profile");
  }
}
