// Angular cores
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Form module
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Animations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
