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
  public CartItems: fakestoreapiContract[] = [];
  public CartItemsCount: number = 0;
  public isCartVisible: Boolean = false;
  public price: number = 0;
  public quantity: number = 0;

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

  public GetCartItemsCount(): void {
    this.CartItemsCount = this.CartItems.length;
  }

  public Onchange(value: string): void {
    if (value === 'all') {
      this.LoadProducts(`http://fakestoreapi.com/products`);
    } else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${value}`);
    }
  }

  async AddToCart(itemId: number): Promise<void> {
    const response = await fetch(`http://fakestoreapi.com/products/${itemId}`);
    const data = await response.json();
    console.log(data);
    this.CartItems.push(data);
    this.GetCartItemsCount();
    alert(`${data.title} Added to Cart`);
    this.price = this.price + data.price;
    this.quantity = this.quantity + 1;
  }

  public Toggle(): void {
    this.isCartVisible = this.isCartVisible === false ? true : false;
  }

  public RemoveItem(index: number, price: number): void {
    let flag = confirm('Are you sure want to delete this item? ');
    if (flag === true) {
      this.price = this.price - price;
      this.quantity = this.quantity - 1;
      this.CartItems.splice(index, 1);
      this.GetCartItemsCount();
    }
  }

  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProducts(`http://fakestoreapi.com/products`);
  }
}
