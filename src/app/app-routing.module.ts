import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent} from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ExtrasizeselectionComponent } from './pages/extrasizeselection/extrasizeselection.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderstatusComponent } from './pages/orderstatus/orderstatus.component';
import { SearchresultComponent } from './pages/searchresult/searchresult.component';
import { CategoryComponent } from './pages/category/category.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { PaymentsmethodComponent } from './pages/paymentsmethod/paymentsmethod.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { RidersignupComponent } from './pages/ridersignup/ridersignup.component';
import { RiderthankyouComponent } from './pages/riderthankyou/riderthankyou.component';
import { RidersignupprocessComponent } from './pages/ridersignupprocess/ridersignupprocess.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { TrackorderComponent } from './pages/trackorder/trackorder.component';
import { OrdersuccessComponent } from './pages/ordersuccess/ordersuccess.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PinlocationComponent } from './pages/pinlocation/pinlocation.component';
import { SinglerewardComponent } from './pages/singlereward/singlereward.component';
import { TermandconditionsComponent } from './pages/termandconditions/termandconditions.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CareerComponent } from './pages/career/career.component';
import { JobComponent } from './pages/job/job.component';
import { PressComponent } from './pages/press/press.component';
import { PressinnerComponent } from './pages/pressinner/pressinner.component';
import { FoundationComponent } from './pages/foundation/foundation.component';
import { SupportComponent } from './pages/support/support.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { UnderreviewapplicationComponent } from './pages/underreviewapplication/underreviewapplication.component';
import { MerchantstepComponent } from './pages/merchantstep/merchantstep.component';
import { Merchantstep2Component } from './pages/merchantstep2/merchantstep2.component';
import { Merchantstep3Component } from './pages/merchantstep3/merchantstep3.component';
import { Merchantstep4Component } from './pages/merchantstep4/merchantstep4.component';
const routes: Routes = [
{   path: '',
    component: HomeComponent,    
},
{   path: 'login',
    component: LoginComponent,    
},
{   path: 'register',
    component: RegisterComponent,    
},
{   path: 'forgotpassword',
    component: ForgotpasswordComponent,    
},
{   path: 'resetpassword',
    component: ResetpasswordComponent,    
},
{   path: 'extrasizeselection',
    component: ExtrasizeselectionComponent,    
},
{   path: 'products',
    component: ProductsComponent,    
},
{   path: 'checkout',
    component: CheckoutComponent,    
},
{   path: 'orderstatus',
    component: OrderstatusComponent,    
},
{   path: 'searchresult',
    component: SearchresultComponent,    
},
{
    path: 'category',
    component: CategoryComponent,
},
{
    path: 'wallet',
    component: WalletComponent,
},
{
    path: 'paymentmethod',
    component: PaymentsmethodComponent,
},
{
    path: 'changepassword',
    component: ChangepasswordComponent,
},
{
    path: 'ridersignup',
    component: RidersignupComponent,
},
{
    path: 'riderprocess',
    component: RidersignupprocessComponent,
},
{
    path: 'riderthankyou',
    component: RiderthankyouComponent,
},
{
    path: 'favorites',
    component: FavoritesComponent,
},
{
    path: 'addresses',
    component: AddressesComponent,
},
{
    path: 'reviews',
    component: ReviewsComponent,
},
{
    path: 'rewards',
    component: RewardsComponent,
},
{
    path: 'trackorder',
    component: TrackorderComponent,
},
{
    path: 'ordersuccess',
    component: OrdersuccessComponent,
},
{
    path: 'orders',
    component: OrdersComponent,
},
{
    path: 'pinlocation',
    component: PinlocationComponent,
},
{
    path: 'singlereward',
    component: SinglerewardComponent,
},
{
    path: 'termandconditions',
    component: TermandconditionsComponent,
},
{
    path: 'faq',
    component: FaqComponent,
},
{
    path: 'career',
    component: CareerComponent,
},
{
    path: 'job',
    component: JobComponent,
},
{
    path: 'press',
    component: PressComponent,
},
{
    path: 'pressinner',
    component: PressinnerComponent,
},
{
    path: 'foundation',
    component: FoundationComponent,
},
{
    path: 'support',
    component: SupportComponent,
},
{
    path: 'merchant',
    component: MerchantComponent,
},
{
    path: 'underreviewapplication',
    component:UnderreviewapplicationComponent,
},
{
    path: 'merchantstep',
    component:MerchantstepComponent,
},
{
    path: 'merchantstep2',
    component:Merchantstep2Component,
},	
{
    path: 'merchantstep3',
    component:Merchantstep3Component,
},	
{
    path: 'merchantstep4',
    component:Merchantstep4Component,
},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
