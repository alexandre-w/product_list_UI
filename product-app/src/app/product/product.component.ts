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

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  resetProduct() {
    this.product = null;
  }

  saveProduct(updateProduct: ProductItem) {
    this.productService.updateProduct(updateProduct);
  }

}
