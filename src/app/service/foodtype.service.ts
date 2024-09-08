import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodtypeService {
  API_URL: string = "api/";
  constructor(private httpClient: HttpClient) { }
  getfoodTypes() {
    return this.httpClient.get(this.API_URL + 'foodTypes')
  }
}
