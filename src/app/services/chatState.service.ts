import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatI, MessagePayload } from '../models/message.model';
import { chatsMock } from '../mock/chatsMock';
import { MockDBService } from './mockDB.service';

@Injectable({
  providedIn: 'root',
})
export class ChatStateService {
  chatSelector: BehaviorSubject<string> = new BehaviorSubject<string>(
    'chatgpt3'
  );
  currentChatMessages: BehaviorSubject<ChatI> = new BehaviorSubject<ChatI>({
    id_chat: 0,
    messages: [],
    title: '',
  });
  constructor(private db: MockDBService) {}

  getChatSelector() {
    return this.chatSelector.asObservable();
  }
  setChatSelector(value: string) {
    this.chatSelector.next(value);
  }
  getCurrentChat() {
    return this.currentChatMessages.asObservable();
  }
  setNewMessage(newMessage: MessagePayload) {
    let chati = this.currentChatMessages.getValue();
    chati.messages.push(newMessage);
    this.currentChatMessages.next(chati);
  }

  changeChat(id: number) {
    this.currentChatMessages.next(this.db.all_data.value[id - 1]);
  }
  clearChat() {
    this.currentChatMessages.next({
      id_chat: 0,
      messages: [],
      title: '',
    });
  }
  newChat(firstMessage: ChatI) {
    this.db.setData(firstMessage.title, firstMessage.messages[0].message);
    this.changeChat(this.db.all_data.value.length);
  }
}
