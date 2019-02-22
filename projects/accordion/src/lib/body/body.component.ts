import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { bodyExpansion } from './../accordion.animation';
import { AccordionData } from '../accordion-data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-accordion-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [bodyExpansion],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements AfterContentInit {
  _accordBody: AccordionData;
  isActive = true;
  panelState: string[] = ['expanded', 'collapsed'];
  @ContentChild(HeaderComponent) header: HeaderComponent;
  @Output() clickListner = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  animateAccord(active, isMatched) {
    if (isMatched || this.isActive !== active) {
      this.animate();
    }
    this.isActive = active;
  }

  ngAfterContentInit() {
    this.header.headerClicked.subscribe(() => {
      this.clickListner.emit(this.isActive);
    });
  }

  animate() {
    this.panelState.reverse();
    this.header.direction = this.panelState[0] === 'expanded';
    this.cdr.detectChanges();
  }

  get referencer(): AccordionData {
    return this._accordBody;
  }

  set referencer(data: AccordionData) {
    this._accordBody = data;
    this.isActive = data.active;
  }
}
