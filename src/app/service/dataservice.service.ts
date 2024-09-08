import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements InMemoryDbService {

  constructor() { }
    createDb()
  {
  

    let  products =  [
      {  id:  1,  name:  'Product 1' },
      {  id:  2,  name:  'Product 2' },
      {  id:  3,  name:  'Product 3' },
      {  id:  4,  name:  'Product 4' },
      {  id:  5,  name:  'Product 5' }      
    ];
    let foodTypes = [
      {
        "icon": "menu-europian.png",
        "name": "European"
      },
      {
        "icon": "menu-fastfood.png",
        "name": "Fast food"
      },
      {
        "icon": "menu-healthy.png",
        "name": "Healthy"
      },
      {
        "icon": "menu-indian.png",
        "name": "Indian"
      },
      {
        "icon": "menu-italian.png",
        "name": "Italian"
      },
      {
        "icon": "menu-thai.png",
        "name": "Thai"
      },
      {
        "icon": "menu-europian.png",
        "name": "European"
      },
      {
        "icon": "menu-fastfood.png",
        "name": "Fast food"
      },
      {
        "icon": "menu-healthy.png",
        "name": "Healthy"
      }
    ];
    
    let recentOrders = [
      {
        "imageName": "recent_order_item_1.jpeg",
        "name": "Rice with young green peas",
        "foodType": "Indonesian",
        "freeDelivery": true,
        "price": "230$",
        "deliveryTime": "30 min",
        "foodCharacteristics": [
          {
            "icon": "icon_nuts.png",
            "name": "nuts"
          },
          {
            "icon": "icon_no_chilly.png",
            "name": "No chilly"
          },
          {
            "icon": "icon_no_gluten.png",
            "name": "No gluten"
          },
          {
            "icon": "icon_no_lactose.png",
            "name": "No lactose"
          }
        ]
      },
      {
        "imageName": "recent_order_item_2.jpeg",
        "name": "Rice with young green peas",
        "foodType": "Indonesian",
        "freeDelivery": true,
        "price": "240$",
        "deliveryTime": "30 min",
        "foodCharacteristics": [
          {
            "icon": "icon_nuts.png",
            "name": "nuts"
          },
          {
            "icon": "icon_no_chilly.png",
            "name": "No chilly"
          },
          {
            "icon": "icon_no_gluten.png",
            "name": "No gluten"
          },
          {
            "icon": "icon_no_lactose.png",
            "name": "No lactose"
          }
        ]
      },
      {
        "imageName": "recent_order_item_3.jpeg",
        "name": "Rice with young green peas",
        "foodType": "Indonesian",
        "freeDelivery": false,
        "price": "250$",
        "deliveryTime": "30 min",
        "deliveryCost": "2$",
        "foodCharacteristics": [
          {
            "icon": "icon_nuts.png",
            "name": "nuts"
          },
          {
            "icon": "icon_no_chilly.png",
            "name": "No chilly"
          },
          {
            "icon": "icon_no_gluten.png",
            "name": "No gluten"
          },
          {
            "icon": "icon_no_lactose.png",
            "name": "No lactose"
          }
        ]
      },
      {
        "imageName": "recent_order_item_4.jpeg",
        "name": "Rice with young green peas",
        "foodType": "Indonesian",
        "freeDelivery": true,
        "price": "260$",
        "deliveryTime": "30 min",
        "foodCharacteristics": [
          {
            "icon": "icon_nuts.png",
            "name": "nuts"
          },
          {
            "icon": "icon_no_chilly.png",
            "name": "No chilly"
          },
          {
            "icon": "icon_no_gluten.png",
            "name": "No gluten"
          },
          {
            "icon": "icon_no_lactose.png",
            "name": "No lactose"
          }
        ]
      },
      {
        "imageName": "recent_order_item_4.jpeg",
        "name": "Test",
        "foodType": "Indonesian",
        "freeDelivery": true,
        "price": "260$",
        "deliveryTime": "30 min",
        "foodCharacteristics": [
          {
            "icon": "icon_nuts.png",
            "name": "nuts"
          },
          {
            "icon": "icon_no_chilly.png",
            "name": "No chilly"
          },
          {
            "icon": "icon_no_gluten.png",
            "name": "No gluten"
          },
          {
            "icon": "icon_no_lactose.png",
            "name": "No lactose"
          }
        ]
      }
    ]
    return { products, foodTypes, recentOrders };

   
  }
}
