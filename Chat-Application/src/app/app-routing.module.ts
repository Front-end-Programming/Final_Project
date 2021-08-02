import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoute: Routes = [
  
  {
    path: 'sign-in',
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

  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full'
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
