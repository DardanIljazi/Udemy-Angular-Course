import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() buttonClickedEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendIncrementEvent() {
    this.buttonClickedEmitter.emit()
  }
}
