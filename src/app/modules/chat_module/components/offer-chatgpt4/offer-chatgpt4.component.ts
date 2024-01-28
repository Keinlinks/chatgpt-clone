import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-offer-chatgpt4',
  templateUrl: './offer-chatgpt4.component.html',
  styleUrls: ['./offer-chatgpt4.component.css'],
})
export class OfferChatgpt4Component {
  form: FormControl = new FormControl('chatgpt3');

  updateRadio(value: string) {
    this.form.setValue(value);
  }
}
