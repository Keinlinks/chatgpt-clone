import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  scrollingBottom: Subject<boolean> = new Subject();
  constructor() {}

  getScrolling() {
    return this.scrollingBottom.asObservable();
  }
}
