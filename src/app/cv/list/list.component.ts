import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/classes/cv-item';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: CvItem[] = this.cvService.getItems();

  constructor(private cvService: CvService) {}

  ngOnInit(): void {}
}
