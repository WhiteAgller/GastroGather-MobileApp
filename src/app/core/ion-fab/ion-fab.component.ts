import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {IonFab, IonFabButton, IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-ion-fab',
  templateUrl: './ion-fab.component.html',
  styleUrls: ['./ion-fab.component.scss'],
  imports: [
    IonIcon,
    IonFabButton,
    IonFab
  ],
  standalone: true
})
export class IonFabComponent  implements OnInit {

  @Input()
  public iconName: string = "";

  constructor() { }

  ngOnInit() {}


  public proceed(){
    console.log("42");
  }
}
