import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngu-accordion-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '[class.active]': 'isActive',
    '(click)': 'headerClick()'
  }
})
export class HeaderComponent {
  isActive: boolean;

  set direction(val: boolean) {
    this.isActive = val;
  }

  @Output('headerClicked') headerClicked = new EventEmitter();

  headerClick() {
    this.headerClicked.emit();
  }

  constructor() {}
}
