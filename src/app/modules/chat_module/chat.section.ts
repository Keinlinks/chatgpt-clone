import { Component } from '@angular/core';
import { SideBarService } from 'src/app/services/sideBar.service';

@Component({
  selector: 'app-chat-container',

  template: `<div class="flex flex-col h-full relative">
    <app-header />

    <div class="flex-1 relative">
      <app-no-chat-screen />
    </div>
    <app-examples-prompts />
    <app-input-field />
    <p class="text-xs text-center text-[var(--color-secondary)] mb-2">
      ChatGPT puede cometer errores. Considera verificar la información
      importante.
    </p>
  </div> `,
  styleUrls: ['./styles/chat.styles.css'],
})
export class ChatContainer {}
