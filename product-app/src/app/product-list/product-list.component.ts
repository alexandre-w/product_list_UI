import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { ProductItem } from '../model/productItem' ;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductItem[];
  selectedProduct: ProductItem;

  constructor(private productService: ProductService ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .then(items => {
      this.products = items;
    });
  }

  displayDetails(product: ProductItem) {
    this.selectedProduct = product ;
  }

}
