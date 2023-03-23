import { Component, OnInit } from '@angular/core';
import { FakestoreService } from '../../services/Fakestore.service';
import { fakestoreapiContract } from '../../contracts/FakestoreProducts';
@Component({
  selector: 'app-amazon-home',
  templateUrl: './amazon-home.component.html',
  styleUrls: ['./amazon-home.component.css'],
})
export class AmazonHomeComponent implements OnInit {
  public products: fakestoreapiContract[] = [];
  constructor(private data: FakestoreService) {}

  ngOnInit(): void {
    this.data.GetProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
