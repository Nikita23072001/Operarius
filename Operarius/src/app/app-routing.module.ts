import { SignUpComponent } from './signup/signup.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard.ts.guard';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forrgot-password/forrgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { FAQComponent } from './faq/faq.component';
import { OfferComponent } from './offers/offer/offer.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'sign-in', component: SigninComponent},
  { path: 'offers', component: OffersComponent },
  { path: 'new-offer', component:  OfferComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'register-user', component: SignUpComponent},
{ path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
{ path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
