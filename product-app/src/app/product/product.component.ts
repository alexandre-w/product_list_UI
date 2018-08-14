import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../model/productItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductItem;

  constructor() { }

  ngOnInit() {
  }

  resetProduct() {
    this.product = null;
  }

}
