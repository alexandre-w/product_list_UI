import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProductItem } from './model/productItem';
import { keys } from './keys';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = keys.serviceUrl;

  constructor(private http: Http) { }

  getProducts(): Promise<ProductItem[]> {
    return this.http.get(this.productUrl)
            .toPromise()
            .then(response => response.json() as ProductItem[])
            .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  updateProduct(product: ProductItem): Promise<any> {
    const url = `${this.productUrl}/${product._id}`;
    return this.http.put(url, product)
    .toPromise()
    .then(response => response.json() as ProductItem)
    .catch(this.handleError);

  }

  addProduct(product: ProductItem): Promise<any> {
    return this.http.post(this.productUrl, product)
            .toPromise()
            .then(response => response.json() as ProductItem)
            .catch(this.handleError);
  }

}
