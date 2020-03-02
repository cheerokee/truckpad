import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'base-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() //EVENTO
  onPaginate: EventEmitter<number> = new EventEmitter<number>();

  @Input() data: any;

  page_count: number = 1;
  page: number = 1;
  total_Items: number = 0;
  pages: number[];

  constructor() { }

  ngOnInit() {
    this.page_count = this.data.page_count;
    this.total_Items = this.data.total_items;
    this.pages = this.numberArray(this.data.page_count);
  }

  changePage(page){
    this.page = page;
    this.onPaginate.emit(this.page);
  }

  nextPage(){
    if(this.page < this.page_count){
      this.onPaginate.emit(++this.page);
    }
  }

  prevPage(){
    if(this.page > 1) {
      this.onPaginate.emit(--this.page);
    }
  }

  numberArray(number) {
    var arr = [];

    for(var i = 1; i <= number; i++){
      arr.push(i);
    }

    return arr;
  };
}
