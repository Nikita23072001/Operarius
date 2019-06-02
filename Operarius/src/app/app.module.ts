import { NgxAuthRoutingModule } from './../auth/auth-routing.module';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { HeaderComponent } from './background/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


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
import { FAQComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule } from '@nebular/theme';
import { RegisterComponent } from './register/register.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAkJCUFuDBkBO3pKN6I7CwoJyhhfQYaZFw',
  authDomain: 'operarius-3f1cb.firebaseapp.com',
  databaseURL: 'https://operarius-3f1cb.firebaseio.com',
  projectId: 'operarius-3f1cb',
  storageBucket: 'operarius-3f1cb.appspot.com',
  messagingSenderId: '680782784545',
  appId: '1:680782784545:web:a0893c864505ee5f'
};


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
    FooterComponent,
    FAQComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxAuthRoutingModule,
    DataTablesModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
            baseEndpoint: 'http://example.com/app-api/v1',
            login: {
              endpoint: '/auth/sign-in',
              method: 'post',
            },
            register: {
              endpoint: '/auth/sign-up',
              method: 'post',
            },
            logout: {
              endpoint: '/auth/sign-out',
              method: 'post',
            },
            requestPass: {
              endpoint: '/auth/request-pass',
              method: 'post',
            },
            resetPass: {
              endpoint: '/auth/reset-pass',
              method: 'post',
            }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        register: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          redirectDelay: 0,
        },
      },
    }),
  //   RouterModule.forRoot([
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'admin',
  //       component: AdminComponent
  //     },
  //     {
  //       path: '',
  //       component: HomeComponent
  //     }
  //   ])
  // ],
  ],
  providers: [],
  bootstrap: [AppComponent,
  NavbarComponent,
HeaderComponent]
})
export class AppModule { }
