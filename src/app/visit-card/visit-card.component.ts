import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-card',
  templateUrl: './visit-card.component.html',
  styleUrls: ['./visit-card.component.scss'],
})
export class VisitCardComponent implements OnInit {
  fields = {
    name: {
      name: 'Full name',
      data: 'John Doe',
      placeholder: 'Insert your full name',
    },
    image: {
      name: 'Profile picture',
      data: `../../assets/imgs/profiles/image-1.png`,

      placeholder: 'Insert image-number | exemple : image-2 ',
    },
    job: {
      name: 'Job',
      data: 'Software Engineer',
      placeholder: 'Insert your job',
    },
    motto: {
      name: 'Motto',
      data: 'Improvement is everything',
      placeholder: 'Insert your motto',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
