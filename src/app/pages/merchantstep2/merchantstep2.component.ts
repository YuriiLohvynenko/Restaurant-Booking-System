import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantstep2',
  templateUrl: './merchantstep2.component.html',
  styleUrls: ['./merchantstep2.component.css']
})
export class Merchantstep2Component implements OnInit {

  constructor(private router: Router) { }
   nextstep()
  {
	  this.router.navigate(['/merchantstep3']);
  }
  ngOnInit(): void {
  }

}
