import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: Array<any>

  constructor() {
    this.users = []

    this.users.push({
      id: 1,
      username: "Dardi1",
      mail: "dardi1@gmail.com"
    })

    this.users.push({
      id: 2,
      username: "Dardi2",
      mail: "dardi2@gmail.com"
    })

    this.users.push({
      id: 3,
      username: "Dardi3",
      mail: "dardi3@gmail.com"
    })
  }

  ngOnInit(): void {

  }

}
