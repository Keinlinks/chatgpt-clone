import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleContainer } from './schedule.section';
import { ScheduleHeaderComponent } from './components/schedule_header/schedule_header.component';
import { ListScheduleComponent } from './components/list_schedule/list_schedule.component';
import { ListItemSchedule } from './components/list_schedule/components/list-item/list_item';

@NgModule({
  declarations: [
    ScheduleContainer,
    ScheduleHeaderComponent,
    ListScheduleComponent,
    ListItemSchedule,
  ],
  imports: [CommonModule],
  exports: [ScheduleContainer],
})
export class ScheduleModule {}
