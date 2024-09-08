import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public showcontactinfo:boolean = true;
  public showdelivery:boolean = true;
  public showpaymentmethod:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  
    toggleContactinfo() {
    this.showcontactinfo = !this.showcontactinfo;
	
  }
   toggleDelivery() {
    this.showdelivery = !this.showdelivery;
  }
   togglePaymentmethod() {
    this.showpaymentmethod = !this.showpaymentmethod;
  }

}
