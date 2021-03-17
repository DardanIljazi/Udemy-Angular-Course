import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number
  title = 'udemy-angular-course';
  constructor() {
    this.number = 0
  }

  buttonClicked(): void {
    this.number += 1
  }
}
