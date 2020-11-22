import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';

    this.httpClient.post<Product>(productUrl, productBody); //return an observable
  }

  updateProduct(productId: string, productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;

    this.httpClient.put<Product>(productUrl, productBody); //return an observable
  }

  viewProduct(productId: string): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;

    this.httpClient.get<Product>(productUrl); //return an observable
  }

  deleteProduct(productId: string): Observable<Product> {
    const productUrl = 'http://localhost:3000/products' + productId;

    this.httpClient.delete<Product>(productUrl); //return an observable
  }

  searchCategoryProduct(categoryId: string): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/category=' + categoryId;

    this.httpClient.get<Product>(productUrl); //return an observable
  }

  searchDateProduct(DateParam: string): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date=' + DateParam;

    this.httpClient.get<Product>(productUrl); //return an observable
  }
}
