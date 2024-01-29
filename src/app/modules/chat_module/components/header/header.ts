import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ChatStateService } from 'src/app/services/chatState.service';
import { SideBarService } from 'src/app/services/sideBar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
})
export class Header {
  menu_open: boolean = false;
  chatVersion: string = 'chatgpt3';
  private clickListener!: () => void;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private chatService: ChatStateService,
    private sidebar: SideBarService
  ) {
    chatService.getChatSelector().subscribe((value) => {
      this.menu_open = false;
      this.chatVersion = value;
    });
    sidebar.getOpenClose().subscribe((b) => {
      this.isSideBarOpen = !b;
    });
  }
  isSideBarOpen: boolean = false;
  open_popup() {
    this.menu_open = !this.menu_open;
    this.clickListener = this.renderer.listen(
      'document',
      'click',
      (event: Event) => {
        const clickedInside = this.el.nativeElement.contains(event.target);
        if (!clickedInside) {
          this.menu_open = false;
          this.clickListener();
        }
      }
    );
  }
}
