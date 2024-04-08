import { Component, Input, inject } from '@angular/core';
import { Examples } from 'src/app/models/examples_prompts';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent {
  chatService = inject(ChatStateService);
  @Input() data: Examples = { p: '', title: '' };

  clicked() {
    this.chatService.newChat({
      id_chat: 50,
      messages: [{ id_user: 'you', message: this.data.p }],
      title: this.data.title,
    });
  }
}
