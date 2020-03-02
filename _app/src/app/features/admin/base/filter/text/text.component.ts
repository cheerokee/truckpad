import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() item: any;
  @Output() //EVENTO
  onFilter: EventEmitter<any> = new EventEmitter<any>();
  typingTimer = null;

  constructor() { }

  ngOnInit() {
  }

  filtering() {
    if(this.typingTimer != null)
      clearTimeout(this.typingTimer);

    this.typingTimer = setTimeout(() => {
      this.onFilter.emit(this.item);
    },1000);
  };
}
