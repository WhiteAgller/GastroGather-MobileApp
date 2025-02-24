import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  public username = "";
  constructor(private httpClient: HttpClient) {}

  setUserName(token: string): void {
    const headers = { 'Authorization': `Bearer ${token}` }
    this.httpClient.get("/api" + "/connect/userinfo", {headers: headers}).subscribe((x : any) => {
      this.username = x.sub;
      localStorage.setItem("username", this.username);
    });
  }

  getUsername(): string | null {
    return localStorage.getItem("username");
  }

}
