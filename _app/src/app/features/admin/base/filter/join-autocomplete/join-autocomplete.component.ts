import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpGetter} from "../../../../../services/http-getter";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'filter-join-autocomplete',
  templateUrl: './join-autocomplete.component.html',
  styleUrls: ['./join-autocomplete.component.css']
})
export class JoinAutocompleteComponent implements OnInit {

  @Output() //EVENTO
  onFilter: EventEmitter<any> = new EventEmitter<any>();
  @Output() //EVENTO
  onSearch: EventEmitter<any> = new EventEmitter<any>();

  @Input() item: any;
  httpGetter: HttpGetter;
  service: any;
  value: any;
  typingTimer = null;
  formControl: AbstractControl;
  list: any = [];

  optionSelected: string;

  constructor(httpGetter: HttpGetter,private changeRef: ChangeDetectorRef) {
    this.httpGetter = httpGetter;
  }

  ngOnInit() {
    this.service = this.httpGetter.getService(this.item.name);
    if(this.item.value != '')
    {
      this.service.get(this.item.value).subscribe((response) => {
        this.optionSelected = response[this.item.joinField];
        this.changeRef.detectChanges();
      });
    }
  }

  onChange() {
    let option = this.list.find( x => x.text === this.optionSelected);
    if(option !== undefined){
      this.item.value = option.id;
      this.onFilter.emit(this.item.value);
    }else{
      this.optionSelected = '';
      this.onFilter.emit('');
    }
  }

  search() {
    if(this.typingTimer != null)
      clearTimeout(this.typingTimer);

    this.typingTimer = setTimeout(() => {
      if(this.value != ''){
        this.service.getByLike(this.optionSelected).subscribe((response) => {

          this.list = [];
          let field = this.item.name;

          let data = response._embedded[field];

          for( let item of data){
            this.list.push({ id: item.id, text: item[this.item.joinField]});

            this.changeRef.detectChanges();
          }
        });
      }
    },1000);
  }

}
