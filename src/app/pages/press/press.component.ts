import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
topnews={items: 1, dots: true, nav:false,  navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]};
  constructor() { }

  ngOnInit(): void {
  }

}
