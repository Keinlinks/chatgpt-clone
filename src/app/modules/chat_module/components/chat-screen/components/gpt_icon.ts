import { Component } from '@angular/core';

@Component({
  selector: 'icon',
  template: `<div class="rounded-full bg-[var(--color-green)] h-6 w-6 relative">
    <img
      class="absolute top-[4px] left-1 h-4 w-4"
      src="../../../../assets/chatGPT-icon.svg"
    />
  </div>`,
})
export class IconChatGPT {}
