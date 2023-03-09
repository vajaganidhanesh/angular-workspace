import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';

@Component({
  selector: 'app-booking-site',
  templateUrl: './booking-site.component.html',
  styleUrls: ['./booking-site.component.css'],
})
export class BookingSiteComponent implements OnInit {
  constructor() {}
  public Categories: string[] = [];
  public Products: fakestoreapiContract[] = [];

  public LoadCategories(): void {
    fetch('http://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.unshift('all');
        this.Categories = data;
      });
  }

  public LoadProducts(url: string): void {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.Products = data;
      });
  }

  public Onchange(value: string): void {
    if (value === 'all') {
      this.LoadProducts(`http://fakestoreapi.com/products`);
    } else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${value}`);
    }
  }

  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProducts(`http://fakestoreapi.com/products`);
  }
}
