import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schedule-header',
  templateUrl: `./schedule.header.html`,
  styleUrls: ['./schedule_header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleHeaderComponent {}
