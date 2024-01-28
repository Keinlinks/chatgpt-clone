import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() svg: number = 1;
  @Input() muted_text = '';
  @Input() title = '';
  @Input() id = '';
  @Input() option = '';

  @Output() radioChange = new EventEmitter<string>();
  check: boolean = false;
  selected(event: Event) {
    if (this.option != this.id) {
      const input = event.target as HTMLInputElement;
      this.radioChange.emit(input.value);
    }
  }
}
