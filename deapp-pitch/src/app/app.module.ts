import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PitchComponent } from './pitch/pitch.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsConditionsComponent,
    PitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
