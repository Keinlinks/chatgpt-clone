import { Component, Input } from '@angular/core';
import { Examples } from 'src/app/models/examples_prompts';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent {
  @Input() data: Examples = { p: '', title: '' };
}
