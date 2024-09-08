import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  @HostListener('window:scroll', [])
    onWindowScroll() {
		
    if (document.body.scrollTop > 30 ||     
    document.documentElement.scrollTop > 30) {
      document.getElementById('header').classList.add('headerbg');
    }
	else
	{
	document.getElementById('header').classList.remove('headerbg');
	}
	if (document.body.scrollTop > 350 ||     
    document.documentElement.scrollTop > 350) {
      document.getElementById('home').classList.add('showsearchbar');
    }
	else
	{
	document.getElementById('home').classList.remove('showsearchbar');
	}
	
  }
  openmenu()
  {
   document.getElementById('mobilesidebar').classList.add('open');
   document.getElementById('header').classList.add('menuopen');
  }
  closemenu()
  {
  document.getElementById('mobilesidebar').classList.remove('open');
  document.getElementById('header').classList.remove('menuopen');
  }
  filteropen()
  {
      document.getElementById('header').classList.toggle('filteropen');
  }
  ngOnInit(): void {
	 
  }

}
