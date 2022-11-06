import { Injectable } from '@angular/core';
import { CvItem } from '../classes/cv-item';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  items: CvItem[] = [
    {
      id: 1,
      name: 'Jhon Doe',
      age: 21,
      cin: 15252444,
      job: 'Software Engineer',
      path: '../../assets/imgs/profiles/image-4.png',
    },
    {
      id: 2,
      name: 'Mark yetter',
      age: 23,
      cin: 954542444,
      job: 'Teacher',
      path: '../../assets/imgs/profiles/image-5.png',
    },
  ];
  currentItem: CvItem = {
    id: 1,
    name: 'Jhon Doe',
    age: 21,
    cin: 15252444,
    job: 'Software Engineer',
    path: '../../assets/imgs/profiles/image-4.png',
  };

  getDetails(): CvItem {
    return this.currentItem;
  }
  getItems(): CvItem[] {
    return this.items;
  }

  setDetails(id: number) {
    const foundItem = this.items.find((item) => item.id == id);
    if (foundItem) {
      this.currentItem.age = foundItem.age;
      this.currentItem.path = foundItem.path;
      this.currentItem.name = foundItem.name;
      this.currentItem.job = foundItem.job;
    }
  }
  constructor() {}
}
