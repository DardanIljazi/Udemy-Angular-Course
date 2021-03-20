import {Component, Input, OnInit} from '@angular/core';
import {CarService} from '../services/car/car.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() cols!: number
  cars!: Array<any>;

  constructor(private carService: CarService) {
    this.cars = this.carService.cars
  }

  ngOnInit(): void {
  }

  generateArrayOfLength(numberOfElements: number): Array<any> {
    return new Array(numberOfElements)
  }

  /**
   * Get number of rows based on columns and data length
   * F.ex if cols = 3 and data length = 3, 1 will be returned (all data fits in one row)
   * If cols = 3 and data lengths = 4, 2 will be returned (all elements can't fit in 1 row, so 2 will be returned)
   * @param colsNumber
   */
  getNumberOfRowsToShowForCarsAndColsNumber(colsNumber: number): Array<any> {
    return new Array(Math.ceil(this.cars.length / colsNumber))
  }

  /**
   * Get cars data for a given row
   * @param rowNumber
   */
  getCarsForRow(rowNumber: number): Array<any> {
    return this.cars.slice(rowNumber * this.cols, (rowNumber + 1) * this.cols)
  }
}
