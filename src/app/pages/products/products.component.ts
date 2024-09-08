import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
mySlideOptions={items: 7, dots: false, nav:true,  navText: ["<img src='../../../assets/images/prev-arrow.png'>","<img src='../../../assets/images/next-arrow.png'>"]};
  constructor() { }

  ngOnInit(): void {
  }

}
