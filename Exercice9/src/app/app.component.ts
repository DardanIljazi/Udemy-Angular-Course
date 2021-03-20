import { Component } from '@angular/core';
import {CarService} from './services/car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private carService: CarService) {
  }

  switchAllToState(newState: string): void {
    this.carService.switchAllToState(newState)
  }
}
