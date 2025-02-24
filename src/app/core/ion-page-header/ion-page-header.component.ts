import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonHeader, IonIcon,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {ActivatedRoute, Router} from "@angular/router";
import {Location, NgClass, NgIf, NgStyle} from "@angular/common";


@Component({
  selector: 'app-page-ion-header',
  templateUrl: './ion-page-header.component.html',
  styleUrls: ['./ion-page-header.component.scss'],
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
  ]
})
export class IonPageHeaderComponent implements OnInit {

  @Input()
  public name: string = "";

  public backAllowed: boolean = false;

  constructor(private router: Router, private _location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.backAllowed = data['backAllowed'];
    });
  }

  public openProfile(){
    this.router.navigate(['/profile']);
  }

  public back(){
    this._location.back();
  }
}
