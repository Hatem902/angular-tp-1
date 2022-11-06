import { Component, OnInit } from '@angular/core';
import { CvItem } from 'src/app/classes/cv-item';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  details: CvItem | undefined = this.cvService.getDetails();

  constructor(private cvService: CvService) {}

  ngOnInit(): void {}
}
