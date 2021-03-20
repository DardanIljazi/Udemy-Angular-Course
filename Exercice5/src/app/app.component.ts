import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular-course';
  id?: string
  brand?: string
  model?: string
  imgSrc?: string

  getDataForCar(data: any): void {
    this.id = data.id
    this.brand = data.brand
    this.model = data.model
    this.imgSrc = data.imgSrc
  }
}
