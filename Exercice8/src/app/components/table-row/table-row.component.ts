import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() id!: number
  @Input() name!: string
  @Input() state!: string

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  switchToState(id: number, newState: string): void {
    this.productService.switchProductToState(id, newState)
  }
}
