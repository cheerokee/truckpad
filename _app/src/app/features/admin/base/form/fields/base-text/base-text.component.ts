import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'base-text',
  templateUrl: './base-text.component.html',
  styleUrls: ['./base-text.component.css']
})
export class BaseTextComponent implements OnInit {

  @Input() element: any;
  @Input() form: FormGroup;

  @Output() //EVENTO
  onValue: EventEmitter<any> = new EventEmitter<any>();
  value: any;

  constructor() {}

  ngOnInit() {
    this.value = this.form.get(this.element.name).value;
  }

  onChange() {
    setTimeout(() => {
      this.onValue.emit(this.value);
    });
  };
}
