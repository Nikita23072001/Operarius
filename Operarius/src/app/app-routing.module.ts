import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { FAQComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'login', component: LoginComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'register', component: NbRegisterComponent},
  { path: 'logout', component: NbLogoutComponent,
  },
  { path: 'request-password', component: NbRequestPasswordComponent,
  },
  {path: 'reset-password', component: NbResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
