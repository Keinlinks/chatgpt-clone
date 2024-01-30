import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarService } from './services/sideBar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'chatgpt';
}
