import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  itemCol = Array(50)
    .fill(0)
    .map((e, i) => i + 1);
  items = [];

  constructor() {
    interval(500)
      .pipe(
        startWith(1),
        map(e => Array(this.itemCol[Math.floor(Math.random() * this.itemCol.length)]).fill(0)),
        take(5)
      )
      .subscribe(res => (this.items = res));
  }

  ngOnInit() {}
}
