import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'base-select',
  templateUrl: './base-select.component.html',
  styleUrls: ['./base-select.component.css']
})
export class BaseSelectComponent implements OnInit {

  @Input() element: any;
  @Input() form: FormGroup;

  @Output() //EVENTO
  onValue: EventEmitter<any> = new EventEmitter<any>();
  value: any;

  constructor() { }

  ngOnInit() {
    this.value = this.form.get(this.element.name).value;
    if(typeof this.value === 'boolean')
      this.value = (this.value)?1:0;
  }

  onChange() {
    setTimeout(() => {
      this.onValue.emit(this.value);
    });
  };
}
