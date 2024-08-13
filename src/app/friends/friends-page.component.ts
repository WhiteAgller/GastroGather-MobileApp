import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-friends',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss'],
  standalone: true
})
export class FriendsPage implements OnInit {

  public test: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'})
    let a = this.httpClient.get("https://localhost:7054/api/Table/AllByUserId?UserId=d4a8be1a-c8b6-4e4e-92d1-321cbbf93e89", {headers: headers})
      .subscribe(x => console.log(x));
  }

}
