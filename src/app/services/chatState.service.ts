import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatStateService {
  chatSelector: BehaviorSubject<string> = new BehaviorSubject<string>(
    'chatgpt3'
  );
  constructor() {}

  getChatSelector() {
    return this.chatSelector.asObservable();
  }
  setChatSelector(value: string) {
    this.chatSelector.next(value);
  }
}
