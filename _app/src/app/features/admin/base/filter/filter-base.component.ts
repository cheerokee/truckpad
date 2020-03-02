import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output, QueryList,
  ViewChildren
} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {JoinAutocompleteComponent} from "./join-autocomplete/join-autocomplete.component";
import {FilterListItem} from "../../../../model";

@Component({
  selector: 'filter-base',
  templateUrl: './filter-base.component.html',
  styleUrls: ['./filter-base.component.css']
})
export class FilterBaseComponent implements OnInit {

  public cookie_nome: string;

  @Input() filter: FilterListItem[];
  @Input() nome_recurso: String;

  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren(JoinAutocompleteComponent)
  private joinAutocompleteComponents: QueryList<JoinAutocompleteComponent>;

  constructor(public cookieService: CookieService,
              private changeRef: ChangeDetectorRef) {
    this.cookie_nome = `filter_${ this.nome_recurso }`;
  }

  ngOnInit() {
  }

  filtering() {
    this.cookieService.set(this.cookie_nome, JSON.stringify(this.filter));
    this.onFilter.emit(this.filter);
  }

  clearFilter() {
    for(let item of this.filter)
      item.value = "";

    for(let joinAutocompleteComponent of this.joinAutocompleteComponents.toArray())
      if(joinAutocompleteComponent !== undefined)
        joinAutocompleteComponent.optionSelected = "";

    this.cookieService.set(this.cookie_nome,  '');
    this.onFilter.emit(this.filter);
    this.changeRef.detectChanges();
  }
}
