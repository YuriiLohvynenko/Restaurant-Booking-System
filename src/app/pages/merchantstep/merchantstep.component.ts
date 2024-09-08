import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantstep',
  templateUrl: './merchantstep.component.html',
  styleUrls: ['./merchantstep.component.css']
})
export class MerchantstepComponent implements OnInit {

  constructor(private router: Router) { }
  nextstep()
  {
	  this.router.navigate(['/merchantstep2']);
  }
  ngOnInit(): void {
  }

}
