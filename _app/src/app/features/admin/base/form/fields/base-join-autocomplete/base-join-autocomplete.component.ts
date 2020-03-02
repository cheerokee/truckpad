import {
    AfterViewInit,
    ChangeDetectorRef,
    Component, ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output, ViewChild
} from '@angular/core';
import { AbstractControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'base-join-autocomplete',
  templateUrl: './base-join-autocomplete.component.html',
  styleUrls: ['./base-join-autocomplete.component.css']
})
export class BaseJoinAutocompleteComponent implements OnInit, AfterViewInit {

  @Input() element: any;
  @Input() form: FormGroup;
  @Input() placeholder: string = 'Pesquise...';

  @Output() //EVENTO
  onValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() //EVENTO
  onSearch: EventEmitter<any> = new EventEmitter<any>();

  optionSelected: string;
  value: any;
  typingTimer = null;
  formControl: AbstractControl;

  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(){
      this.value = this.form.get(this.element.name).value;
  };

  ngOnChanges(){
    this.changeRef.detectChanges();
  }

  search() {
      if(this.typingTimer != null)
          clearTimeout(this.typingTimer);

      this.typingTimer = setTimeout(() => {
          this.onSearch.emit({element: this.element.name,value: this.optionSelected});
      },1000);
  }

  onChange() {
      let option = this.element.options.find( x => x.text === this.optionSelected);
      if(option !== undefined){
          this.onValue.emit(option.id);
      }else{
          this.optionSelected = '';
          this.onValue.emit('');
      }
  };
}
