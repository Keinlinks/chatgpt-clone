import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  input: FormControl = new FormControl('', [Validators.required]);

  countLines(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (this.input.value.length > 50) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = `2.75rem`;
    }
  }
}
