import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-headerwithoutsearch',
  templateUrl: './headerwithoutsearch.component.html',
  styleUrls: ['./headerwithoutsearch.component.css']
})
export class HeaderwithoutsearchComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 100 ||     
    document.documentElement.scrollTop > 100) {
      document.getElementById('header').classList.add('headerbg');
    }
	else
	{
	document.getElementById('header').classList.remove('headerbg');
	}
  }
  ngOnInit(): void {
  }

}
