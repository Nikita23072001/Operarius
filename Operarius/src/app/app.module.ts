import { NbThemeModule, NbSidebarModule, NbLayoutModule, } from '@nebular/theme';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './background/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    OffersComponent,
    OfferDetailComponent,
    FooterComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NbLayoutModule,
    NbSidebarModule,
    DataTablesModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent,
  NavbarComponent,
HeaderComponent]
})
export class AppModule { }
