import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { HeaderComponent } from './header/header.component';

import { CommonService } from './common.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavigationComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
