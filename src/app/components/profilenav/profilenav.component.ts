import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilenav',
  templateUrl: './profilenav.component.html',
  styleUrls: ['./profilenav.component.css']
})
export class ProfilenavComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) { }
  changepassword()
  {
  this.router.navigate(['/changepassword']);
  }
  favorites()
  {
  this.router.navigate(['/favorites']);
  }
  paymentmethod()
  {
  this.router.navigate(['/paymentmethod']);
  }
  addresses()
  {
  this.router.navigate(['/addresses']);
  }
  wallet()
  {
  this.router.navigate(['/wallet']);
  }
  reviews()
  {
  this.router.navigate(['/reviews']);
  }
  rewards()
  {
  this.router.navigate(['/rewards']);
  }
  ngOnInit(): void {
   this.href = this.router.url;
  }

}
