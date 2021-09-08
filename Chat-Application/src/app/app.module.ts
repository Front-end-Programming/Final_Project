// Angular cores
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Form module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Animations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import {MatIconModule} from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { JoinGroupComponent } from './components/join-group/join-group.component';
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { SendChatComponent } from './components/send-chat/send-chat.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { VisualComponent } from './components/visual/visual.component';
import { LightDarkComponent } from './components/light-dark/light-dark.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ChatComponent,
    ToastMessageComponent,
    UserListComponent,
    JoinGroupComponent,
    CreateGroupComponent,
    ChatMainComponent,
    SendChatComponent,
    ErrorPageComponent,
    VisualComponent,
    LightDarkComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
