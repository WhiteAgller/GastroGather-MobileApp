import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";
import {IonTabInput} from "../../models/ionTabInput";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ion-tabs',
  templateUrl: './ion-tabs.component.html',
  styleUrls: ['./ion-tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, NgForOf]
})
export class IonTabsComponent  implements OnInit {

  @Input()
  public pages: IonTabInput[] = []

  public currentSelectedTab: number = 0;

  @Output()
  onPageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {  }

  selectTab(tab: number): void {
    this.currentSelectedTab = tab;
    this.onPageChange.emit(tab);
  }
}
