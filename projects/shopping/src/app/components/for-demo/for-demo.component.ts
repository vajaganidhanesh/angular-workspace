import { Component } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css'],
})
export class ForDemoComponent {
  // public Categories: string[] = ['All', 'Electronics', 'Footwear', 'Fashion'];
  public Categories: { categories: string; products: string[] }[] = [
    {
      categories: 'Electronics',
      products: ['televisons', 'referigrators'],
    },
    {
      categories: 'Textiles',
      products: ['shirts', 'pants'],
    },
  ];
}
