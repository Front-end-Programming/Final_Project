import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Giang/header/header.component';
import { ManHinhChinhComponent } from './Giang/man-hinh-chinh/man-hinh-chinh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManHinhChinhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
