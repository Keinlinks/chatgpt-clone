import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SideBarService } from 'src/app/services/sideBar.service';

@Component({
  selector: 'app-schedule-container',
  template: `<div
    class="flex-col flex px-3 bg-black overflow-x-hidden gap-5 w-[260px] overflow-hidden hover:overflow-y-auto h-screen customScroll"
    [@openCloseAnimation]="stateSidebar"
  >
    <div
      (click)="toggleEstado()"
      class="sticky left-0 pt-5 top-0 bg-black z-50"
    >
      <app-schedule-header />
    </div>
    <app-list-schedule [dateInfo]="'Today'" />
    <app-list-schedule [dateInfo]="'Yesterday'" />
  </div> `,
  animations: [
    trigger('openCloseAnimation', [
      state(
        'open',
        style({
          width: '260px',
        })
      ),
      state(
        'close',
        style({
          width: '0px',
          padding: '0px',
        })
      ),
      transition('open <=> close', [animate('0.1s')]),
    ]),
  ],
  styleUrls: ['../../share/components/scrollbar.css'],
})
export class ScheduleContainer implements OnInit {
  stateSidebar: string = 'open';
  constructor(private sideBar: SideBarService) {}
  toggleEstado() {
    console.log(this.stateSidebar);
    this.stateSidebar = this.stateSidebar === 'close' ? 'open' : 'close';
  }
  ngOnInit(): void {
    this.sideBar.getOpenClose().subscribe((b) => {
      if (b) {
        this.stateSidebar = 'open';
      } else {
        this.stateSidebar = 'close';
      }
    });
  }
}
