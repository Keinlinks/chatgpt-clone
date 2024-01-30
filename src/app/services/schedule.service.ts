import { Injectable } from '@angular/core';
import { ScheduleList } from '../models/message.model';
import { BehaviorSubject } from 'rxjs';
import { chatsMock, scheduleMock } from '../mock/chatsMock';
import { ChatStateService } from './chatState.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private schedule: BehaviorSubject<ScheduleList[]> = new BehaviorSubject<
    ScheduleList[]
  >(scheduleMock);
  constructor() {}

  getSchedule() {
    return this.schedule.asObservable();
  }
  setSchedule(value: ScheduleList) {
    this.schedule.next([...this.schedule.value, value]);
  }
}
