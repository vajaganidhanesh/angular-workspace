import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fakestoreapiContract } from '../../app/contracts/FakestoreProducts';

@Injectable({
  providedIn: 'any',
})
export class FakestoreService {
  constructor(private http: HttpClient) {}
  public GetProducts(): Observable<fakestoreapiContract[]> {
    return this.http.get<fakestoreapiContract[]>(
      'http://fakestoreapi.com/products'
    );
  }

  public GetCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'http://fakestoreapi.com/products/categories'
    );
  }

  public GetSpecificCategories(
    Categorie: string
  ): Observable<fakestoreapiContract[]> {
    return this.http.get<fakestoreapiContract[]>(
      `http://fakestoreapi.com/products/category/${Categorie}`
    );
  }
  public GetProduct(id: string): Observable<fakestoreapiContract> {
    return this.http.get<fakestoreapiContract>(
      `http://fakestoreapi.com/products/${id}`
    );
  }
}
