import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {HttpGetter} from "../../../../../services/http-getter";

@Component({
  selector: 'filter-join-select',
  templateUrl: './join-select.component.html',
  styleUrls: ['./join-select.component.css']
})
export class JoinSelectComponent implements OnInit {

  @Input() item: any;
  httpGetter: HttpGetter;
  service: any;
  list: any = [];

  constructor(httpGetter: HttpGetter,private changeRef: ChangeDetectorRef) {
    this.httpGetter = httpGetter;
  }

  ngOnInit() {
    this.service = this.httpGetter.getService(this.item.name);
    this.service.listAll().then(( response ) => {
      for(let option of response)
      {
        this.list.push({ id: option.id, text: option[this.item.joinField] });
        this.changeRef.detectChanges();
      }
    });
  }

  onChange() {

  }
}
