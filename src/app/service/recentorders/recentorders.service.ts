import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RecentordersService {

  API_URL: string = "api/";
  constructor(private httpClient: HttpClient) { }
  getRecentOrders() {
    return this.httpClient.get(this.API_URL + 'recentOrders')
  }
}
