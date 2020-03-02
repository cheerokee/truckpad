import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router, Route, ActivatedRouteSnapshot, ActivatedRoute} from "@angular/router";
import {CollumnTable, FilterListItem, ListView, Recurso} from "../../../../model";
import {CookieService} from "ngx-cookie-service";
import {JoinAutocompleteComponent} from "../filter/join-autocomplete/join-autocomplete.component";
import {PrivilegioHttpService} from "../../../../services/http/acl/privilegio-http.service";

@Component({
  selector: 'base-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @ViewChild(JoinAutocompleteComponent, { static: false })
  private joinAutocompleteComponent: JoinAutocompleteComponent;

  @Output() //EVENTO
  onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() //EVENTO
  onFilter: EventEmitter<any> = new EventEmitter<any>();

  @Input() listView: ListView;
  @Input() list: any;
  @Input() filter: FilterListItem[];
  @Input() columns: CollumnTable[];

  selectToDelete: number = null;

  constructor(public privilegioHttpService: PrivilegioHttpService,
              public router: Router,
              private cookieService: CookieService,
              private changeRef: ChangeDetectorRef) {
  }

  async ngOnInit() {
    await this.privilegioHttpService.permite(this.listView.title,'Listar');

    let filter_data = this.cookieService.get('filter_' + this.listView.controller);

    if(filter_data){
      this.filter = JSON.parse(filter_data);
    }
  }

  del(id) {
    this.selectToDelete = id;
  }

  delete(e) {
    this.onDelete.emit(this.selectToDelete);
  }

  cancel(e){
    this.selectToDelete = null;
  }

  filtering(filter) {
    this.onFilter.emit(filter);
  }

  clearFilter() {
    for(let item of this.filter){
      item.value = "";
      this.changeRef.detectChanges();
    }

    if(this.joinAutocompleteComponent !== undefined){
      this.joinAutocompleteComponent.optionSelected = "";
    }

    this.cookieService.set('filter_' + this.listView.controller,  '');
    this.changeRef.detectChanges();
    this.onFilter.emit(this.filter);
  }
}
