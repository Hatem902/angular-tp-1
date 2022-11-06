import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/list/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { CvService } from './services/cv.service';
import { VisitCardComponent } from './visit-card/visit-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    VisitCardComponent,
    ParentToChildComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CvService],
  bootstrap: [AppComponent],
})
export class AppModule {}
