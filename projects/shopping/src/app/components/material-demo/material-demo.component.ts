import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css'],
})
export class MaterialDemoComponent implements OnInit {
  public Products: fakestoreapiContract[] = [];
  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.Products = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
