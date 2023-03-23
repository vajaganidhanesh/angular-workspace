import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakestoreapiContract } from '../../contracts/FakestoreProducts';
import { FakestoreService } from '../../services/Fakestore.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: fakestoreapiContract = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    image: '',
    category: '',
  };
  public id: any = '';

  constructor(private route: ActivatedRoute, private data: FakestoreService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data.GetProduct(this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }
}
