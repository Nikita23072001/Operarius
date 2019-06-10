import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isCollapsed = new BehaviorSubject(true);
  currentIsCollapsed = this.isCollapsed.asObservable();
  constructor() { }
  changeCollapsed() {
    this.isCollapsed.next(!this.isCollapsed);
  }
  getUserDetails() {
  }
}
