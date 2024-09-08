import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantstep3',
  templateUrl: './merchantstep3.component.html',
  styleUrls: ['./merchantstep3.component.css']
})
export class Merchantstep3Component implements OnInit {

  constructor(private router: Router) { }
   nextstep()
  {
	  this.router.navigate(['/merchantstep4']);
  }
  ngOnInit(): void {
  }

}
