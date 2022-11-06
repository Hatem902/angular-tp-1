import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss'],
})
export class ParentToChildComponent implements OnInit {
  @Output() colorEvent = new EventEmitter<string>();
  @Input() bgColor: string = 'black';

  constructor() {}

  ngOnInit(): void {}

  sendColor(color: string) {
    this.colorEvent.emit(color);
  }
}
