import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cars: Array<any>
  @Output() dataEmitter = new EventEmitter<object>()

  constructor() {
    this.cars = []

    this.cars.push({
      id: 0,
      brand: "BMW",
      model: "5th serie berline m",
      imgSrc: "assets/bmw_serie_5_berline_m.jpg"
    })

    this.cars.push({
      id: 1,
      brand: "Volkswagen",
      model: "Passat",
      imgSrc: "assets/vw_passat_099.jpg\n"
    })
  }

  ngOnInit(): void {
    this.dataEmitter.emit(this.cars[0])
  }

  emitData(data: any): void {
    this.dataEmitter.emit(data)
  }
}
