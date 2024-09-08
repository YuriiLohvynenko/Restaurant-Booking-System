import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riderfaqs',
  templateUrl: './riderfaqs.component.html',
  styleUrls: ['./riderfaqs.component.css']
})
export class RiderfaqsComponent implements OnInit {

  constructor() { }
  riderfaqOptions={items: 1, dots: true, nav:false };
  ngOnInit(): void {
  }

}
