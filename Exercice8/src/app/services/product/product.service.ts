import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<any>

  constructor() {
    this.products = []
    for (let i = 1; i <= 10; i++) {
      this.products.push(
        {
          id: i,
          name: 'Product' + i,
          state: 'In stock'
        }
      )
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
}
