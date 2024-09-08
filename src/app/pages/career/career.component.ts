import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
careeraboutus={items: 1, dots: true, nav:true,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]};
  constructor() { }

  ngOnInit(): void {
  }

}
