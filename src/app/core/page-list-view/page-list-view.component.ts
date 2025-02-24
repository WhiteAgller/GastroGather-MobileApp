import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {IonTabInput} from "../../models/ionTabInput";
import {IonTabsComponent} from "../ion-tabs/ion-tabs.component";
import {YourFriendsComponent} from "../../friends/your-friends/your-friends.component";
import {IonicModule} from "@ionic/angular";
import {YourRequestsComponent} from "../../friends/your-requests/your-requests.component";
import {NgComponentOutlet, NgIf} from "@angular/common";
import {add} from "ionicons/icons";
import {ModalController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-page-list-view',
  templateUrl: './page-list-view.component.html',
  styleUrls: ['./page-list-view.component.scss'],
  imports: [
    IonTabsComponent,
    YourFriendsComponent,
    IonicModule,
    YourRequestsComponent,
    NgIf,
    NgComponentOutlet
  ],
  standalone: true
})
export class PageListViewComponent  implements OnInit {

  public readonly IonTabsSetup: IonTabInput[] = [{tabName: "Vaše skupiny"}, {tabName: "Pozvánky do skupin"}]
  public pageSelected = 0;

  @Input()
  public components: any[] = [];

  @Input()
  public addComponentOptions: any = null;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  get currentComponent() {
    return this.components[this.pageSelected];
  }

  public onPageChange(newPageIndex: any){
    this.pageSelected = newPageIndex;
  }

  public async proceed(){
    const modal = await this.modalCtrl.create(this.addComponentOptions);
    await modal.present();
  }

  protected readonly add = add;
}
