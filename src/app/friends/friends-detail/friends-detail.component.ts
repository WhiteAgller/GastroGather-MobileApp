
import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";


@Component({
  selector: 'app-friends-detail',
  templateUrl: './friends-detail.component.html',
  styleUrls: ['./friends-detail.component.scss'],
})
export class FriendsDetailComponent  implements OnInit {

  users: User[] = [];
  constructor() { }

  ngOnInit() {
    this.users = [
      new User(0, "Avery Turner", "Pívo", 5),
      new User(1, "Olivia Knight", "Víno", 2),
      new User(2, "Liam Bennett", "Pívo", 1),
      new User(3, "Sophia Gallagher", "Drink", 4),
      new User(4, "Ethan Blackwell", "Pívo", 3),
    ]
  }

  handleReorder(event: any) {
    event.detail.complete();
  }
}
