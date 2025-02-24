import {Component} from '@angular/core';
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonIcon, IonInput, IonItem, IonList,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";

import {FormsModule} from "@angular/forms";


export class newProduct {
  name: string = "";
}

@Component({
  selector: 'app-counter-add-product',
  templateUrl: './counter-add-product.component.html',
  styleUrls: ['./counter-add-product.component.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonItem, IonIcon, IonInput],
  standalone: true
})
export class CounterAddProductComponent {
  constructor(private modalCtrl: ModalController) {}

  name: string = "";

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  send() {
    let product = new newProduct()
    product.name = this.name;
    this.modalCtrl.dismiss(product, 'save');
  }
}
