import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { OfferComponent } from './offers/offer/offer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'login', component: LoginComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'new-offer', component:  OfferComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
