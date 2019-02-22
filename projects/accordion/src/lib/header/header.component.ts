import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[ngu-accordion-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(click)': 'headerClick()'
  }
})
export class HeaderComponent {
  isActive: boolean;

  @Output() headerClicked = new EventEmitter();

  set direction(val: boolean) {
    this.isActive = val;
  }

  constructor() {}

  headerClick() {
    this.headerClicked.emit();
  }
}
