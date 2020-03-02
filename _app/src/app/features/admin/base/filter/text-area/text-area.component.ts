import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'filter-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
