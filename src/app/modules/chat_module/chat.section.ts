import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  template: `<div class="flex flex-col h-full">
    <app-header />
    <div class="basis-[100%] relative">
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
