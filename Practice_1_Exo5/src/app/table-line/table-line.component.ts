import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {
  @Input() id?: string
  @Input() brand?: string
  @Input() model?: string
  @Input() imgSrc?: string
  @Output() dataEmitter = new EventEmitter<object>()
  constructor() { }

  ngOnInit(): void {
  }

  emitDataInformation(): void {
    this.dataEmitter.emit({id: this.id, brand: this.brand, model: this.model, imgSrc: this.imgSrc})
  }
}
