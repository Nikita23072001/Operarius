import { OfferService } from 'src/app/shared/offer.service';
import { offer } from './Offer';
import { Component, OnInit } from '@angular/core';
import { Offer } from '../shared/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  list: Offer[];

  constructor(private service: OfferService) {
  }

  ngOnInit() {
    this.service.getOffers().subscribe(actionArray => {
    this.list = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data() } as Offer;
    // tslint:disable-next-line:semicolon
    })
    });
  }


 // onSelect(Offer: offer): void {
   // this.selectedOffer = Offer;
 // }
}
