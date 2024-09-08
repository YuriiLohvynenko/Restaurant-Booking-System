import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderwithoutsearchComponent } from './components/headerwithoutsearch/headerwithoutsearch.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataserviceService } from "./service/dataservice.service";
import { RegisterComponent } from './pages/register/register.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ExtrasizeselectionComponent } from './pages/extrasizeselection/extrasizeselection.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderstatusComponent } from './pages/orderstatus/orderstatus.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProfileshortComponent } from './components/profileshort/profileshort.component';
import { ProfilenavComponent } from './components/profilenav/profilenav.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { PaymentsmethodComponent } from './pages/paymentsmethod/paymentsmethod.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { RidersignupComponent } from './pages/ridersignup/ridersignup.component';
import { RidersignupprocessComponent } from './pages/ridersignupprocess/ridersignupprocess.component';
import { RiderthankyouComponent } from './pages/riderthankyou/riderthankyou.component';
import { RiderfaqsComponent } from './components/riderfaqs/riderfaqs.component';
import { TrackorderComponent } from './pages/trackorder/trackorder.component';
import { OrdersuccessComponent } from './pages/ordersuccess/ordersuccess.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SinglerewardComponent } from './pages/singlereward/singlereward.component';
import { PinlocationComponent } from './pages/pinlocation/pinlocation.component';
import { TermandconditionsComponent } from './pages/termandconditions/termandconditions.component';
import { JobComponent } from './pages/job/job.component';
import { CareerComponent } from './pages/career/career.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PressComponent } from './pages/press/press.component';
import { PressinnerComponent } from './pages/pressinner/pressinner.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { SupportComponent } from './pages/support/support.component';
import { MerchantstepComponent } from './pages/merchantstep/merchantstep.component';
import { UnderreviewapplicationComponent } from './pages/underreviewapplication/underreviewapplication.component';
import { Merchantstep2Component } from './pages/merchantstep2/merchantstep2.component';
import { Merchantstep3Component } from './pages/merchantstep3/merchantstep3.component';
import { Merchantstep4Component } from './pages/merchantstep4/merchantstep4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    HeaderwithoutsearchComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ExtrasizeselectionComponent,
    TopnavComponent,
    CheckoutComponent,
    OrderstatusComponent,
    SearchresultComponent,
    CategoryComponent,
    ProfileshortComponent,
    ProfilenavComponent,
    WalletComponent,
    PaymentsmethodComponent,
    ChangepasswordComponent,
    FavoritesComponent,
    ReviewsComponent,
    RewardsComponent,
    AddressesComponent,
    RidersignupComponent,
    RidersignupprocessComponent,
    RiderthankyouComponent,
    RiderfaqsComponent,
    TrackorderComponent,
    OrdersuccessComponent,
    OrdersComponent,
    SinglerewardComponent,
    PinlocationComponent,
    TermandconditionsComponent,
    JobComponent,
    CareerComponent,
    FaqComponent,
    PressComponent,
    PressinnerComponent,
    MerchantComponent,
    FoundationComponent,
    SupportComponent,
    MerchantstepComponent,
    UnderreviewapplicationComponent,
    Merchantstep2Component,
    Merchantstep3Component,
    Merchantstep4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	OwlModule,
	HttpClientModule,
    InMemoryWebApiModule.forRoot(DataserviceService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
