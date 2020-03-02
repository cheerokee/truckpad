import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'filter-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
