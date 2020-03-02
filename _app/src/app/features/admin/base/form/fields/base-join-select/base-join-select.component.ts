import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'base-join-select',
  templateUrl: './base-join-select.component.html',
  styleUrls: ['./base-join-select.component.css']
})
export class BaseJoinSelectComponent implements OnInit {

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
