import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forrgot-password/forrgot-password.component';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './background/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { environment } from 'src/environments/environment.prod';
import { OfferComponent } from './offers/offer/offer.component';
import { OfferService } from './shared/offer.service';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './shared/services/auth.service';
import { SignUpComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';



export const firebaseConfig = {
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
    AdminComponent,
    HomeComponent,
    OffersComponent,
    FooterComponent,
    FAQComponent,
    OfferComponent,
    HowItWorksComponent,
    ProfileComponent,
    EmailComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SigninComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'new-offer',
        component: OfferComponent
      }
    ])
  ],
  providers: [OfferService, AngularFirestore, AuthService, AngularFireAuth],
  bootstrap: [AppComponent,
  NavbarComponent,
HeaderComponent]
})
export class AppModule { }
