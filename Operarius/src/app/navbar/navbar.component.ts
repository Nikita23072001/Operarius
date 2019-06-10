import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed: boolean;
  constructor(private data: AuthService) {
   }

  ngOnInit() {
    this.data.currentIsCollapsed.subscribe(collapsed => this.collapsed = collapsed);
  }
  changeCollapse() {
    this.data.changeCollapsed();
  }
}
