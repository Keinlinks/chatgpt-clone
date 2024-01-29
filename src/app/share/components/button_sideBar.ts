import { Component } from '@angular/core';
import { SideBarService } from 'src/app/services/sideBar.service';

@Component({
  selector: 'app-sidebar-button',
  template: ` <button
    (click)="toggleSideBar()"
    style="transform: translate(260px)"
    class="z-50 absolute left-1 top-1/2 text-4xl w-7 h-9"
    [style.transform]="open_close ? 'translate(260px)' : 'translate(0px)'"
  >
    <div>
      <div
        class="h-[10px] w-1 rounded-full bg-white bg-opacity-50 -rotate-45"
        [style.transform]="
          open_close
            ? 'translateY(0.1rem) rotate(15deg) translateZ(0px)'
            : 'translateY(0.1rem) rotate(-15deg) translateZ(0px)'
        "
      ></div>
      <div
        class="h-[10px] w-1 rounded-full bg-white bg-opacity-50"
        [style.transform]="
          open_close
            ? 'translateY(0rem) rotate(-15deg) translateZ(0px)'
            : 'translateY(0rem) rotate(15deg) translateZ(0px)'
        "
      ></div>
    </div>
  </button>`,
})
export class SideBarButton {
  open_close!: boolean;
  constructor(private sideBar: SideBarService) {
    sideBar.getOpenClose().subscribe((b) => {
      this.open_close = b;
    });
  }

  toggleSideBar() {
    this.sideBar.toggleSideBar();
  }
}
