import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css'],
})
export class ProductsDataComponent implements OnInit {
  public Products: fakestoreapiContract[] = [];
  public AllProducts: number = 0;
  public Electronics: number = 0;
  public mens: number = 0;
  public womens: number = 0;
  public jewellery: number = 0;
  ngOnInit(): void {
    fetch(`http://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        this.Products = data;
        this.AllProducts = data.length;
        this.Electronics = data.filter(
          (products: any) => products.category == 'electronics'
        ).length;

        this.jewellery = data.filter(
          (products: any) => products.category == 'jewelery'
        ).length;
        this.mens = data.filter(
          (products: any) => products.category == "men's clothing"
        ).length;
        this.womens = data.filter(
          (products: any) => products.category == "women's clothing"
        ).length;
      })

      .catch((err) => {
        console.log(err);
      });
  }

  public GetCategoryName(e: any) {
    console.log(e);
    if (e === 'allproducts') {
      fetch(`http://fakestoreapi.com/products`)
        .then((response) => response.json())
        .then((data) => {
          this.Products = data;
        });
    } else {
      fetch(`http://fakestoreapi.com/products/category/${e}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.Products = data;
        });
    }
  }

  public product: any = {};

  public getProduct(e: any) {
    alert(JSON.stringify(e));
    this.product = e;
  }
}
