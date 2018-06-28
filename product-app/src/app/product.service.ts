import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { ProductItem } from './productItem';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private productUrl = 'http://localhost:3000/api/product';

  constructor(private http: Http) { }

  getProducts(): Promise<ProductItem[]> {
    return this.http.get(this.productUrl)
            .toPromise()
            .then(response => response.json().data as ProductItem[])
            .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
