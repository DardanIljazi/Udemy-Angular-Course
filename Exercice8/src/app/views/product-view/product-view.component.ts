import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params.id, 10)
    this.product = this.productService.findElementById(id)
  }

}
