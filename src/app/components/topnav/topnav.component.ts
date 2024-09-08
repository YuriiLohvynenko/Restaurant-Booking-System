import { Component, OnInit } from '@angular/core';
import { FoodtypeService } from '../../service/foodtype.service';
import { Foodtype } from '../../service/foodtype';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
foodTypes: Foodtype[] = [];
topnavOptions={items: 7, dots: false, nav:true,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{
        0:{
            items:2
        },
        575:{
            items:3
        },
		768:{
		 items:5
		},
        993:{
            items:7
        }
    }};
  constructor(private foodTypeService: FoodtypeService) { }

  ngOnInit(): void {
    this.foodTypeService.getfoodTypes().subscribe((foodTypes: Foodtype[])=>{
      this.foodTypes = foodTypes;
    })
  }

}
