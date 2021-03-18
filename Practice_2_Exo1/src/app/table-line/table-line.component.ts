import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() id?: string
  @Input() username?: string
  @Input() email?: string

  constructor() {
    this.id = "Loading.."
    this.username = "Loading.."
    this.email = "Loading.."
  }

  ngOnInit(): void {
  }

}
