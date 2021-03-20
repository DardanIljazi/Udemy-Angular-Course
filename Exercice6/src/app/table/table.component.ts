import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: Array<any>

  constructor() {
    this.users = [
      {
        id: 0,
        username: 'Doge',
        email: 'tothe@moon.com'
      },
      {
        id: 1,
        username: 'Robert',
        email: 'to@mars.com'
      },
      {
        id: 2,
        username: 'WSB',
        email: 'apes@wsb.com'
      },
      {
        id: 3,
        username: 'MelvinCapital',
        email: 'tothe@ground.com'
      },
    ]
  }

  ngOnInit(): void {
  }

  colorBasedOnIndex(i: number): string {
    if (i % 2 === 0) {
      return 'blue'
    } else {
      return 'green'
    }
  }

  changeUsernameIfNeeded(id: number): string {
    if (this.users[id].username === 'Robert') {
      this.users[id].username = 'Jean'
    }

    return this.users[id].username
  }
}
