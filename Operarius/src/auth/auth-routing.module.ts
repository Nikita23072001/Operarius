import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { FAQComponent } from 'src/app/faq/faq.component';
import { LoginComponent } from 'src/app/login/login.component';
import { OffersComponent } from 'src/app/offers/offers.component';
// tslint:disable-next-line:max-line-length
import { NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent, NbAuthComponent } from '@nebular/auth';
import { RegisterComponent } from 'src/app/register/register.component';



export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'faq', component: FAQComponent },
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
        ],
      },    { path: 'offers', component: OffersComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: NbLogoutComponent,
    },
    { path: 'request-password', component: NbRequestPasswordComponent,
    },
    {path: 'reset-password', component: NbResetPasswordComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
