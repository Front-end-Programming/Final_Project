import { AuthGuard } from './auth.guard';
import { VisualComponent } from './components/visual/visual.component';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ChatComponent } from './components/chat/chat.component';

const appRoute: Routes = [
  
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: '',
        component: VisualComponent

      },

      {
        path: 'chat-main/:type/:name',
        component: ChatMainComponent
      }
    ]
  },
  
  
  {
    path: '',
    component: SignInComponent,
    data: {
      animation: 'sign-in',
    },
  },


  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      animation: 'sign-up',
    },
  },

  
  {
    path: '**',
    component: ErrorPageComponent,
  },

  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
