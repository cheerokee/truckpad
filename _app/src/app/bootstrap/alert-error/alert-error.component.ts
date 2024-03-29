import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {

  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  //@Input() //Inportando decorator e agora a propriedade show é atributo da tag alert-error
  _show = false;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set show(value){
    this._show = value;
    this.showChange.emit(value);
  }

  hide() {
    this.show = false;
  }
}
