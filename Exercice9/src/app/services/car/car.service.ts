import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Array<any>

  constructor() {
    this.cars = []
    for (let i = 1; i <= 10; i++) {
      this.cars.push(
        {
          id: i,
          picture: `./assets/images/car_test.jpg`,
          brand: 'Brand' + i,
          model: 'Model' + i,
          state: 'Rentable'
        }
      )
    }
  }

  switchCarStateTo(id: number, newState: string): void {
    this.cars.find(car => car.id === id).state = newState
  }

  switchAllToState(newState: string): void {
    this.cars.forEach((car) => {
      car.state = newState
    })
  }
}
