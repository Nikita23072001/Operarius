import { offer } from '../offer';
import { OFFERS } from './../mock-offer';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  
  offers = OFFERS;
 // selectedOffer: offer;
  collapsed :Boolean;
  constructor(private data: AuthService) {
    
  }

  ngOnInit() {
    this.data.currentIsCollapsed.subscribe(collapsed => this.collapsed = collapsed)
  }


 // onSelect(Offer: offer): void {
   // this.selectedOffer = Offer;
 // }
}
