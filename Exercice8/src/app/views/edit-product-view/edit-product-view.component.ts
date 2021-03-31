import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.css']
})
export class EditProductViewComponent implements OnInit {

  product!: Product
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const productId = parseInt(this.activatedRoute.snapshot.params.id, 10)
    this.product = this.productService.findElementById(productId)
  }

  onSubmitEditProduct() {
    this.productService.updateProduct(this.product)
    this.router.navigate(['products'])
  }
}
