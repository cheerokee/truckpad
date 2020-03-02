import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'base-text-area',
  templateUrl: './base-text-area.component.html',
  styleUrls: ['./base-text-area.component.css']
})
export class BaseTextAreaComponent implements OnInit {

  @Input() element: any;
  @Input() form: FormGroup;

  @Output() //EVENTO
  onValue: EventEmitter<any> = new EventEmitter<any>();
  value: any;

  constructor() {}

  ngOnInit() {}

  onChange() {
    setTimeout(() => {
      this.onValue.emit(this.value);
    });
  };
}
