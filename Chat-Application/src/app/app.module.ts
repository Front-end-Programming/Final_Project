import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Giang/header/header.component';
import { ManHinhChinhComponent } from './Giang/man-hinh-chinh/man-hinh-chinh.component';
import { RegisterComponent } from './Lâm/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManHinhChinhComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
