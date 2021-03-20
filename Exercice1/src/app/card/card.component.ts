import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imgLink: string | undefined
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() link: string | undefined

  constructor() {

  }

  ngOnInit(): void {
  }

}
