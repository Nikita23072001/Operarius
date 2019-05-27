import { offer } from '../offer';
import { OFFERS } from './../mock-offer';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = OFFERS;
 // selectedOffer: offer;

  constructor() {}

  ngOnInit() {
  }


 // onSelect(Offer: offer): void {
   // this.selectedOffer = Offer;
 // }
}
