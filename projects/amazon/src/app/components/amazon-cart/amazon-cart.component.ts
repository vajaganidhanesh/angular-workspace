import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-cart',
  templateUrl: './amazon-cart.component.html',
  styleUrls: ['./amazon-cart.component.css'],
})
export class AmazonCartComponent {
  public Title(): string {
    return 'Amazon Shopping Cart';
  }
  public Total(qty: number, price: number): number {
    return qty * price;
  }
}
