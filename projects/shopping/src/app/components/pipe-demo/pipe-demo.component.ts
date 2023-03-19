import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  public categories: string[] = [
    'Electronics',
    'Mens Fashion',
    'Womens Fashion',
    'Medicines',
  ];

  public product: { Name: string; Price: number; Mfd: Date; Rate: number } = {
    Name: 'Samsung Tv',
    Price: 54000,
    Mfd: new Date('2023-03-18'),
    Rate: 0.245,
  };

  public name: string = 'dhanesh';
  public method(name: string) {
    name.bold();
  }

  public delivery: { product: string; city: string }[] = [
    { product: 'Samsung', city: 'delhi' },
    { product: 'Nokia', city: 'Hyderabad' },
    { product: 'Watch', city: 'Mumbai' },
    { product: 'Iphone', city: 'Goa' },
  ];

  public status: any = {
    delhi: 'Delivery in 2 days',
    Hyderabad: 'Same day Delivery',
    Mumbai: 'One day Delivery',
    other: 'Usually dispatched in 2-3 days',
  };
  ngOnInit(): void {
    console.log(JSON.stringify(this.product));
  }
}
