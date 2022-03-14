import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output()
  emisor: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  applyFilter(ev: any) {
    console.log(ev.target.value);
    console.log('sending info .. => ' + ev.target.value);
    this.emisor.emit(ev.target.value);
  }
}
