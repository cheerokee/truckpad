import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'filter-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {


  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
