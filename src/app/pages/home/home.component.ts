import { Component, OnInit } from '@angular/core';

import { FoodtypeService } from '../../service/foodtype.service';
import { Foodtype } from '../../service/foodtype';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
foodTypes: Foodtype[] = [];
homenavOptions={items: 7, dots: true, nav:true,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{
        0:{
            items:2
        },
        575:{
            items:3
        },
		768:{
		 items:5
		},
        992:{
            items:7
        }
    }};
recentOptions={items: 4,margin:30, dots: true, nav:true,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
		768:{
		 items:2
		},
         992:{
            items:3
        },
		1201:{
		   item:4
		}
    }};
promotionsOptions={items: 4,margin:30, dots: true, nav:true,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        768:{
            items:2
        },
		 993:{
            items:3
        },
		1201:{
		   item:4
		}
    }};
  constructor(private foodTypeService: FoodtypeService) { }

  ngOnInit(): void {
    this.foodTypeService.getfoodTypes().subscribe((foodTypes: Foodtype[])=>{
      this.foodTypes = foodTypes;
    })
  }

}
