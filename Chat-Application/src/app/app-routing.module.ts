import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoute: Routes = [
  
  {
    path: '',
    component: SignInComponent,
    data: {
      animation: 'sign-in'
    }
  },

  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {
      animation: 'sign-up'
    }
  },

  



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
