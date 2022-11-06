import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parentColor: string = '';
  childColor: string = '';
  setParentColor(parentColor: any): void {
    this.parentColor = parentColor;
  }
}
