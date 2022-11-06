import { Component, Input, OnInit } from '@angular/core';
import { CvItem } from 'src/app/classes/cv-item';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() id: number = 1;
  @Input() name: string = '';
  @Input() path: string = '';
  details: CvItem | undefined = this.cvService.getDetails();
  constructor(private cvService: CvService) {}
  setDetails(idf: number): void {
    this.cvService.setDetails(idf);
  }
  ngOnInit(): void {}
}
