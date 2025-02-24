import {Component, Input, OnInit, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  IonAvatar,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent
} from "@ionic/angular/standalone";
import {NgForOf, NgIf} from "@angular/common";
import {UsernamePipe} from "../pipes/username.pipe";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  imports: [
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    UsernamePipe,
    NgForOf,
    IonCheckbox,
    NgIf
  ],
  standalone: true
})
export class ListViewComponent implements OnInit {

  public dataSource: any;

  @Input()
  url: string = ""

  @Input()
  showProperty: string = "";

  @Input()
  directive: PipeTransform | null = null;

  @Input()
  selectable: boolean = false;
  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    await this.loadData();
  }

  public async loadData(event: any = null) {
    this.httpClient.get("/api" + this.url).subscribe((res: any) => {
      this.dataSource = res.items || [];
      if(event){
        event.target.complete();
      }
    });
  }

  public getFormatedValue(item: any){
    if (!this.showProperty) {
      return '';
    }
    if(this.directive){
      return this.directive.transform(item[this.showProperty]);
    }
    return item[this.showProperty];
  }
}
