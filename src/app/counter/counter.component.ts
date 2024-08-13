import {Component, OnInit} from '@angular/core';
import {
  IonButton, IonCol, IonContent, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonList, IonRow, IonTitle, IonToolbar, ModalController
} from '@ionic/angular/standalone';
import {Product} from "../Models/Product";
import {CounterYourProductsComponent} from "./counter-your-products/counter-your-products.component";
import {Event} from "../Models/Event";


@Component({
  selector: 'counter',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonInput,
    IonTitle,
    IonToolbar
  ],
})
export class CounterComponent implements OnInit {

  activeEvent!: Event;
  selectedId: number = -1;
  selectedProduct: Product | undefined = null!;

  yourProducts: Product[] = [];

  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {
    this.yourProducts = [
      new Product(0,"Pívo", 40, 0),
      new Product(1, "Panák", 80, 0),
      new Product(2, "Pívo2", 80, 0)
    ]
    this.selectedProduct = this.yourProducts[0]
  }
  increase() {
    if(this.selectedProduct != undefined){
      this.selectedProduct.amount++;
    }
  }
  decrease() {
    if(this.selectedProduct != undefined){
      this.selectedProduct.amount--;
    }
  }

  async openMenu() {
    const modal = await this.modalCtrl.create({
      component: CounterYourProductsComponent,
      cssClass: 'medium-modal',
      componentProps: {
        selectedProduct: this.selectedProduct,
        yourProducts: this.yourProducts
      }
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'selection') {
      this.selectedProduct = data;
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
