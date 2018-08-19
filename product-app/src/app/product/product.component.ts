import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../model/productItem';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductItem;

  newProduct: ProductItem;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.newProduct = new ProductItem();
  }

  resetProduct() {
    this.product = null;
    this.newProduct = new ProductItem();
  }

  saveProduct(newProduct: ProductItem) {
    this.productService.addProduct(newProduct);
  }

  updateProduct(updateProduct: ProductItem) {
    this.productService.updateProduct(updateProduct);
  }

}
