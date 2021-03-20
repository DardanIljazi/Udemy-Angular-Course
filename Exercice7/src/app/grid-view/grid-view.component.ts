import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() cols!: number
  @Input() rows!: number

  constructor() {

  }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
