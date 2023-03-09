import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css'],
})
export class ForDemoComponent implements OnInit {
  public users: { name: string; age: number }[] = [
    { name: 'alex', age: 23 },
    { name: 'paul', age: 23 },
    { name: 'john', age: 23 },
  ];
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

  public Products: { Name: string; Price: number }[] = [
    {
      Name: 'Samsung Tv',
      Price: 73000,
    },
    {
      Name: 'Samsung Tv',
      Price: 73000,
    },
  ];
  public MarsObject: any = {};
  public Product: fakestoreapiContract[] = [];
  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY'
      );
      const data = await response.json();
      this.MarsObject = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  public UpdateClick() {
    this.users = [
      { name: 'alex', age: 23 },
      { name: 'paul', age: 23 },
      { name: 'john', age: 23 },
      { name: 'john', age: 23 },
    ];
  }

  public TrackChange(index: number): number {
    return index;
  }

  // async ngOnit(): Promise<void> {
  //   const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
  //   const data =await response.json()
  //   this.MarsObject = data;
  //   console.log(data);

  //   }
}
