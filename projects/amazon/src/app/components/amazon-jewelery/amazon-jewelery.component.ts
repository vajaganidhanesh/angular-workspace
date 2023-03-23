import { Component, OnInit } from '@angular/core';
import { fakestoreapiContract } from 'projects/shopping/src/app/contracts/fakestoreapi';
import { FakestoreService } from '../../services/Fakestore.service';

@Component({
  selector: 'app-amazon-jewelery',
  templateUrl: './amazon-jewelery.component.html',
  styleUrls: ['./amazon-jewelery.component.css'],
})
export class AmazonJeweleryComponent implements OnInit {
  public products: fakestoreapiContract[] = [];
  constructor(private data: FakestoreService) {}
  ngOnInit(): void {
    this.data.GetSpecificCategories('jewelery').subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
