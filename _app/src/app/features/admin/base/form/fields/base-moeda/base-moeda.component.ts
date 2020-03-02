import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseFunctionsService} from "../../../../../../services/base-functions.service";
import {CurrencyGlobalPipe} from "../../../../../../pipes/currency-global.pipe";

@Component({
  selector: 'base-moeda',
  templateUrl: './base-moeda.component.html',
  styleUrls: ['./base-moeda.component.css']
})
export class BaseMoedaComponent implements OnInit {

  @Input() element: any;
  @Input() form: FormGroup;

  @Output() //EVENTO
  onValue: EventEmitter<any> = new EventEmitter<any>();
  value: any;

  constructor(public functions: BaseFunctionsService ) { }

  ngOnInit() {
    this.value = this.form.get(this.element.name).value;
  }

  onChange() {
    setTimeout(() => {
      this.onValue.emit(this.value);
    });
  };
}
