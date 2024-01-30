import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatI } from '../models/message.model';
import { ScheduleService } from './schedule.service';
import { chatsMock } from '../mock/chatsMock';
import { ChatStateService } from './chatState.service';

@Injectable({
  providedIn: 'root',
})
export class MockDBService {
  all_data: BehaviorSubject<ChatI[]> = new BehaviorSubject<ChatI[]>(chatsMock);
  constructor(private schedule: ScheduleService) {}

  getdata() {
    this.all_data.getValue();
  }
  setData(title: string, message: string) {
    const id = this.all_data.value.length + 1;
    this.all_data.next([
      ...this.all_data.value,
      {
        id_chat: id,
        messages: [{ id_user: 'You', message: message }],
        title: title,
      },
    ]);
    this.schedule.setSchedule({ id: id, title: title });
  }
}
