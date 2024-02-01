import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MessagePayload } from 'src/app/models/message.model';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChatComponent implements OnInit {
  chat_messages: MessagePayload[] = [];
  @Output() scrollEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(private chatService: ChatStateService) {}

  ngOnInit() {
    this.chatService.getCurrentChat().subscribe((chat) => {
      this.chat_messages = chat.messages;
      this.scrollEvent.emit(this.chat_messages.length == 0);
    });
  }
}
