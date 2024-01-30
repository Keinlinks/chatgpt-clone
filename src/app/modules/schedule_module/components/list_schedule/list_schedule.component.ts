import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScheduleList } from 'src/app/models/message.model';

@Component({
  selector: 'app-list-schedule',

  templateUrl: `./list_schedule.html`,
  styleUrls: ['./list_schedule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListScheduleComponent {
  @Input() dateInfo: string = '';
  @Input() item_list: ScheduleList[] = [];
}
