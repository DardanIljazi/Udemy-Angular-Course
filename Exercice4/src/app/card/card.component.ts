import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() sound!: string
  @Input() imgSrc?: string
  @Input() name?: string

  constructor() { }

  ngOnInit(): void { }

  alert(sound: string): void {
    alert(sound)
  }
}
