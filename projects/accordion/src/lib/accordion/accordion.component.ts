import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList
} from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { AccordionData } from '../accordion-data';
import { BodyComponent } from '../body/body.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[ngu-accordion]',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  /** used to maintain the single open at a time */
  @Input() singular = true;

  _mainData: AccordionData[] = [];

  _currentActive: number;

  /** close all the body child's on Init */
  @Input() collapsed = true;

  @ContentChildren(BodyComponent) _accBody: QueryList<BodyComponent>;

  clickedSub: Subscription;

  constructor() {}

  ngAfterContentInit() {
    this.clickedSub = this._accBody.changes
      .pipe(
        startWith(1),
        switchMap(() => merge(...this.initFnt()))
      )
      .subscribe(res => {
        this.headerClicks(res.accordionBody, res.e);
      });
  }

  ngOnDestroy() {
    this.clickedSub.unsubscribe();
  }

  private initFnt() {
    this._mainData = [];
    return this._accBody.map((accordionBody, index) => {
      if (this.collapsed) {
        accordionBody.animateAccord(false, false);
      }

      this._mainData.push({
        id: index + 1,
        hide: false,
        active: !this.collapsed
      });

      accordionBody.referencer = this._mainData[index];

      return accordionBody.headerEvt.pipe(map(e => ({ accordionBody, e })));
    });
  }

  private headerClicks(accordionBody: BodyComponent, res: boolean) {
    this._accBody.forEach((accordBody, index) => {
      if (accordionBody === accordBody) {
        accordBody.animateAccord(!res, true);
      } else if (this.singular) {
        accordBody.animateAccord(false, false);
      }
    });
  }
}
