import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { ChatContainer } from './chat.section';
import { RouterModule, Routes } from '@angular/router';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { NoChatScreenComponent } from './components/no-chat-screen/no-chat-screen.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferChatgpt4Component } from './components/offer-chatgpt4/offer-chatgpt4.component';
import { ListItemComponent } from './components/offer-chatgpt4/components/list-item/list-item.component';
import { ExamplesPromptsComponent } from './components/examples-prompts/examples-prompts.component';
import { ExamplesComponent } from './components/examples-prompts/components/examples/examples.component';
import { MessageComponent } from './components/chat-screen/components/message';
import { ChatComponent } from './components/chat-screen/chat';
import { IconChatGPT } from './components/chat-screen/components/gpt_icon';

const routes: Routes = [
  {
    path: '',
    component: ChatContainer,
  },
];

@NgModule({
  declarations: [
    Header,
    ChatContainer,
    MainChatComponent,
    NoChatScreenComponent,
    InputFieldComponent,
    OfferChatgpt4Component,
    ListItemComponent,
    ExamplesPromptsComponent,
    ExamplesComponent,
    MessageComponent,
    ChatComponent,
    IconChatGPT,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ChatContainer],
})
export class ChatModule {}
