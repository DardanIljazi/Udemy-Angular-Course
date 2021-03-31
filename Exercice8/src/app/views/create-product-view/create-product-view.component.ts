import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product-view',
  templateUrl: './create-product-view.component.html',
  styleUrls: ['./create-product-view.component.css']
})
export class CreateProductViewComponent implements OnInit {

  product!: Product

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.product = new Product('', 'Not in stock')
  }

  onSubmitCreateProduct() {
    this.productService.addProduct(this.product)
    this.router.navigate(['products'])
  }
}
