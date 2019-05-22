import { Offer } from './../Offer';
import { OFFERS } from './../mock-offer';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = OFFERS;

  selectedOffer: Offer;
  onSelect(Offerr: Offer): void {
    this.selectedOffer = Offerr;
  }

  ngOnInit() {
  }

}
