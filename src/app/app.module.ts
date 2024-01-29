import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './modules/chat_module/chat.module';
import { ScheduleModule } from './modules/schedule_module/schedule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarButton } from './share/components/button_sideBar';
@NgModule({
  declarations: [AppComponent, SideBarButton],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    ScheduleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
