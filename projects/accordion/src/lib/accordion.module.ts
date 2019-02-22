import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, HeaderComponent, BodyComponent],
  exports: [AccordionComponent, HeaderComponent, BodyComponent]
})
export class NguAccordionModule {}
