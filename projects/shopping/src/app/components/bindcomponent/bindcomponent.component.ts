import { Component } from '@angular/core';
import { productContract } from '../../contracts/formdata';
@Component({
  selector: 'app-bindcomponent',
  templateUrl: './bindcomponent.component.html',
  styleUrls: ['./bindcomponent.component.css'],
})
export class BindcomponentComponent {
  public userName: string = 'dhanesh';
  public stock: boolean = false;
  public twidth: number = 200;
  public theight: number = 150;

  Product: productContract = {
    Name: 'sdf',
    Price: 0,
    Stock: false,
    Shipped: 'selectone',
  };
}
