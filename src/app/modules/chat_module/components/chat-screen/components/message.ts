import { Component, Input, OnInit } from '@angular/core';
import { MessagePayload } from 'src/app/models/message.model';

@Component({
  selector: 'Message',
  template: `<div class="flex px-4 py-2 justify-center w-full">
    <div class="max-w-[61%] w-full">
      <div class="flex gap-3">
        <img
          *ngIf="image_url"
          class="h-6 w-6  rounded-full"
          [src]="image_url"
        />
        <icon *ngIf="!image_url" />
        <div class="flex flex-col">
          <h4 class="text-white font-extrabold text-opacity-75">
            {{ messagePayload.id_user }}
          </h4>
          <p class="text-white text-opacity-80">{{ messagePayload.message }}</p>
        </div>
      </div>
    </div>
  </div>`,
})
export class MessageComponent implements OnInit {
  @Input() messagePayload: MessagePayload = { id_user: '', message: '' };
  image_url: string = '';

  constructor() {}
  ngOnInit(): void {
    if (this.messagePayload.id_user.toLowerCase() != 'chatgpt')
      this.image_url =
        'https://lh3.googleusercontent.com/a/AEdFTp5lB4VooyWX-7JFL2dqgVgTsXghtVXNISn3Kh2T=s96-c';
  }
}
