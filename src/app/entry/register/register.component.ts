import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonToolbar
} from "@ionic/angular/standalone";
import {Location, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonToolbar,
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  standalone: true
})
export class RegisterComponent  implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _location: Location) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.minLength(4)])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  validations = {
    'name': [
      { type: 'required', message: 'Jméno je povinné' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'usernameNotAvailable', message: 'Your username is already taken.' }
    ],
    // other validations
  };

  close(){
    this._location.back();
  }

}
