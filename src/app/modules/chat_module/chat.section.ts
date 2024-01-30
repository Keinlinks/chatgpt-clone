import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
  NgZone,
} from '@angular/core';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-chat-container',
  template: `<div class="flex flex-col h-screen relative">
    <div
      #chat
      class=" flex-1  z-0 overflow-y-auto customScroll"
      [style.overflowY]="isEmpty ? 'hidden' : 'auto'"
    >
      <div class="sticky top-0 bg-[var(--color-bg-primary)] w-full z-50">
        <app-header />
      </div>
      <app-no-chat-screen *ngIf="isEmpty" />
      <app-chat (scrollEvent)="scroll()" *ngIf="!isEmpty" />
    </div>

    <app-examples-prompts *ngIf="isEmpty" />
    <div class="flex-none w-full z-50">
      <app-input-field />
      <p class="text-xs text-center text-[var(--color-secondary)] mb-2">
        ChatGPT puede cometer errores. Considera verificar la información
        importante.
      </p>
    </div>
  </div> `,
  styleUrls: ['./styles/chat.styles.css'],
})
export class ChatContainer implements OnInit {
  isEmpty: boolean = true;
  constructor(private ngZone: NgZone, private chat: ChatStateService) {}
  @ViewChild('chat') chatContainer!: ElementRef;
  scroll() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.scrollBottom();
        });
      });
    });
  }
  ngOnInit(): void {
    this.chat.getCurrentChat().subscribe((t) => {
      if (t.id_chat > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    });
  }
  scrollBottom() {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    }
  }
}
