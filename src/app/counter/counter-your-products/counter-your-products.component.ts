import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../Models/Product";
import {CounterAddProductComponent} from "../counter-add-product/counter-add-product.component";
import {NgForOf} from "@angular/common";
import {
  ActionSheetController,
  IonButton,
  IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid,
  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonRow, IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-counter-your-products',
  templateUrl: './counter-your-products.component.html',
  styleUrls: ['./counter-your-products.component.scss'],
  imports: [
    NgForOf,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonList,
    IonItem,
    IonCol,
    IonInput,
    IonIcon,
    IonLabel,
    IonFab,
    IonFabButton
  ],
  standalone: true
})
export class CounterYourProductsComponent implements OnInit {

  yourProducts: Product[] = [];
  selectedProduct!: Product | undefined;

  constructor(private modalCtrl: ModalController,
              private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  onMouseClicked = (event: MouseEvent, i: number) => {
    const newSelectedProduct = this.yourProducts.find(x => x.id == i);
    this.modalCtrl.dismiss(newSelectedProduct, 'selection');
  }
  async addNewProduct() {
    const modal = await this.modalCtrl.create({
      component: CounterAddProductComponent,
      cssClass: 'small-modal',
      initialBreakpoint: 1,
      breakpoints: [0,1]
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      this.yourProducts.push(data);
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Smazat',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Upravit',
          data: {
            action: 'edit',
          },
        },
        {
          text: 'Zavřít',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
