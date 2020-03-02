import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'base-number',
  templateUrl: './base-number.component.html',
  styleUrls: ['./base-number.component.css']
})
export class BaseNumberComponent implements OnInit {

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
