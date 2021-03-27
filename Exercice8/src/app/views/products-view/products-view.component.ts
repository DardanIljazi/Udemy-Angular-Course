import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  products: Array<any>;

  constructor(private productService: ProductService) {
    this.products = productService.products
  }

  passAllProductsToState(newState: string): void {
    this.productService.switchAllToState(newState)
  }

  ngOnInit(): void {
  }
}
