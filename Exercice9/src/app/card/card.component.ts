import {Component, Input, OnInit} from '@angular/core';
import {CarService} from '../services/car/car.service';

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id!: number
  @Input() picture!: string
  @Input() brand!: string
  @Input() model!: string
  @Input() state!: string

  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

  switchStateTo(id: number, newState: string): void {
    this.carService.switchCarStateTo(id, newState)
  }
}
