import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';

@Component({
  selector: 'app-fakestoreapi',
  templateUrl: './fakestoreapi.component.html',
  styleUrls: ['./fakestoreapi.component.css'],
})
export class FakestoreapiComponent implements OnInit {
  public Product: fakestoreapiContract = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  };
  public LoadProduct(id: number): void {
    fetch(`http://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.Product = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.LoadProduct(1);
  }

  public Count: number = 1;
  public NextClick(): void {
    this.Count++;
    this.LoadProduct(this.Count);
  }

  public PrevClick(): void {
    this.Count--;
    this.LoadProduct(this.Count);
  }
}
