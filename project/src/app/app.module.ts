import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './comp/nav/nav.component';
import { AsideComponent } from './comp/aside/aside.component';
import { AsideSponsorComponent } from './comp/aside-sponsor/aside-sponsor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    AsideSponsorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
