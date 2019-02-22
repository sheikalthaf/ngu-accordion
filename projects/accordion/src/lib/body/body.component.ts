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
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngu-accordion-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [bodyExpansion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'isActive'
  }
})
export class BodyComponent implements AfterContentInit {
  // _accordBody: AccordionData;
  isActive = false;
  panelState: string[] = ['collapsed', 'expanded'];
  @ContentChild(HeaderComponent) header: HeaderComponent;
  @Output() clickListners = new EventEmitter<boolean>();
  headerEvt: Observable<boolean> = of(this.isActive);

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  animateAccord(active: boolean, isMatched: boolean) {
    if (isMatched || this.isActive !== active) {
      this.animate();
    }
    this.isActive = active;
  }

  ngAfterContentInit() {
    this.headerEvt = this.header.headerClicked.pipe(map(() => this.isActive));
  }

  animate() {
    this.panelState.reverse();
    this.header.direction = this.panelState[0] === 'expanded';
    this.cdr.detectChanges();
  }

  // get referencer(): AccordionData {
  //   return this._accordBody;
  // }

  set referencer(data: AccordionData) {
    // this._accordBody = data;
    this.isActive = data.active;
  }
}
