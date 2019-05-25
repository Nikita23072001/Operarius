import { offer } from './../offer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  @Input() Offer: offer;

  constructor() { }

  ngOnInit() {
  }

}
