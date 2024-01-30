import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-schedule-header',
  templateUrl: `./schedule.header.html`,
  styleUrls: ['./schedule_header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleHeaderComponent {
  constructor(private chat: ChatStateService) {}
  newChat() {
    this.chat.clearChat();
  }
}
