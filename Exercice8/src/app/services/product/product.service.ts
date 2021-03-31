import { Injectable } from '@angular/core';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<Product>

  constructor() {
    this.products = []
    for (let i = 1; i <= 10; i++) {
      this.products.push(new Product(
        'Product' + i,
        'In stock'
      ))
    }
  }

  switchAllToState(newState: string): void {
    this.products.forEach((product) => {
      product.state = newState
    })
  }

  switchProductToState(id: number, newState: string): void {
    this.findElementById(id).state = newState
  }

  findElementById(id: number): any {
    return this.products.find(product => product.id === id)
  }

  addProduct(product: Product) {
    this.products.push(product)
  }

  findElementIndexById(id: number): number {
    return this.products.findIndex(product => product.id === id)
  }

  updateProduct(product: Product) {
    const productIndex = this.findElementIndexById(product.id)
    this.products[productIndex] = product
  }
}
