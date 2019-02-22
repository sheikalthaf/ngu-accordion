import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NguAccordionModule } from '../../../accordion/src/public_api';
import { NguAccordionModule } from 'accordion';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NguAccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
