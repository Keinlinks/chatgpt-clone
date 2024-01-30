import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ScheduleList } from 'src/app/models/message.model';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list_item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemSchedule {
  @Input() info: ScheduleList = { id: 0, title: '' };
  private timer: any;
  loading: boolean = false;
  @ViewChild('more') moreElement!: ElementRef;
  @ViewChild('archive') archiveElement!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private chat: ChatStateService
  ) {}

  init(id: string) {
    if (!this.loading) {
      this.loading = true;
      let element: ElementRef;
      if (id == 'more') {
        element = this.moreElement;
      } else {
        element = this.archiveElement;
      }
      this.timer = setTimeout(() => {
        this.renderer.removeClass(element.nativeElement, 'hidden');
        this.loading = false;
      }, 900);
    }
  }

  reset(id: string) {
    this.loading = false;

    let element: ElementRef;
    if (id == 'more') {
      element = this.moreElement;
    } else {
      element = this.archiveElement;
    }
    clearTimeout(this.timer);
    this.renderer.addClass(element.nativeElement, 'hidden');
  }

  changeChat() {
    this.chat.changeChat(this.info.id);
  }
}
