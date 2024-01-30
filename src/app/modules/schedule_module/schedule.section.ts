import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScheduleList } from 'src/app/models/message.model';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SideBarService } from 'src/app/services/sideBar.service';

@Component({
  selector: 'app-schedule-container',
  template: `<div
    class="flex-col flex px-3 bg-black overflow-x-hidden gap-5 w-[260px] overflow-hidden hover:overflow-y-auto h-screen customScroll"
    [@openCloseAnimation]="stateSidebar"
  >
    <div class="sticky left-0 pt-5 top-0 bg-black z-50">
      <app-schedule-header />
    </div>
    <app-list-schedule [item_list]="infoSchedule" [dateInfo]="'Today'" />
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
  infoSchedule: ScheduleList[] = [];
  constructor(
    private sideBar: SideBarService,
    private schedule: ScheduleService
  ) {}
  toggleState() {
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
    this.schedule.getSchedule().subscribe((r) => {
      this.infoSchedule = r;
    });
  }
}
