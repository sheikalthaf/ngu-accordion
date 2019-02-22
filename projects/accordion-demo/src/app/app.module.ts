import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguAccordionModule } from '../../../accordion/src/public_api';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StaticComponent } from './static/static.component';
import { AppRoutingModule } from './app.routing';
// import { NguAccordionModule } from 'accordion';

@NgModule({
  declarations: [AppComponent, DynamicComponent, StaticComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, NguAccordionModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
