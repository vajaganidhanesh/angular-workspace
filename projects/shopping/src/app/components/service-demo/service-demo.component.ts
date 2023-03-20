import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from '../../contracts/fakestoreapi';
import { FakestoreService } from '../../service/fakestore.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
})
export class ServiceDemoComponent implements OnInit {
  public Products: fakestoreapiContract[] = [];
  public Categories: string[] = [];
  constructor(private fakestore: FakestoreService) {}
  ngOnInit(): void {
    this.fakestore.GetCategories().subscribe((data) => {
      this.Categories = data;
    });

    this.fakestore.GetProducts().subscribe((data) => {
      this.Products = data;
    });
  }
}
