import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatStateService } from 'src/app/services/chatState.service';
import { ScrollingService } from 'src/app/services/scrolling.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  input: FormControl = new FormControl('', [Validators.required]);
  constructor(
    private chatService: ChatStateService,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}
  countLines(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (this.input.value.length > 50) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = `2.75rem`;
    }
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.input.value) {
      if (this.chatService.currentChatMessages.getValue().id_chat == 0) {
        this.chatService.newChat({
          id_chat: 1,
          messages: [{ id_user: 'you', message: this.input.value }],
          title: this.input.value,
        });
      } else {
        const user_id = this.userService.currentUser.name;
        this.chatService.setNewMessage({
          id_user: 'You',
          message: this.input.value,
        });
      }

      this.input.reset();
    }
  }
}
