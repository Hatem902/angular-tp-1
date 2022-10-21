import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  defaultColor = 'black';
  color: string = this.defaultColor;

  colorReset(): void {
    this.color = this.defaultColor;
  }

  constructor() {}

  ngOnInit(): void {}
}
