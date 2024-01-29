import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  open_close: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor() {}
  getOpenClose() {
    return this.open_close.asObservable();
  }
  toggleSideBar() {
    this.open_close.next(!this.open_close.getValue());
  }
}
