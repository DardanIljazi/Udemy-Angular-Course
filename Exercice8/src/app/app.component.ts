import { Component } from '@angular/core';
import {ProductService} from './services/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<any>;

  constructor(private productService: ProductService) {
    this.products = productService.products
  }

  passAllProductsToState(newState: string): void {
    this.productService.switchAllToState(newState)
  }
}
