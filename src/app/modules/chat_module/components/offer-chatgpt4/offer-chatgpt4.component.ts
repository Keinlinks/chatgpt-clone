import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatStateService } from 'src/app/services/chatState.service';

@Component({
  selector: 'app-offer-chatgpt4',
  templateUrl: './offer-chatgpt4.component.html',
  styleUrls: ['./offer-chatgpt4.component.css'],
})
export class OfferChatgpt4Component {
  form: FormControl = new FormControl('chatgpt3');

  constructor(private chatService: ChatStateService) {
    chatService.getChatSelector().subscribe((value) => {
      this.form.setValue(value);
    });
  }

  updateRadio(value: string) {
    this.chatService.setChatSelector(value);
  }
}
