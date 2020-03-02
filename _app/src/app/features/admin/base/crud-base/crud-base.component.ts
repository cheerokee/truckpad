import {ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import {CollumnTable, FilterListItem, ListView, SearchParams} from "../../../../model";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

export class CrudBaseComponent implements OnInit,OnDestroy {

  list: Object;
  listView: ListView;
  filter: FilterListItem[];
  columns: CollumnTable[];

  serachparams: SearchParams;
  current_url: string;
  title: string;
  controller: string;
  icon: string;

  navigationSubscription;

  constructor(public router: Router,
              public serviceHttp: any,
              public actRoute: ActivatedRoute,
              public changeRef: ChangeDetectorRef) {
    this.current_url = this.router.url;

    this.navigationSubscription = this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            // trick the Router into believing it's last link wasn't previously loaded
            this.router.navigated = false;
            // if you need to scroll back to top, here is the right place
            window.scrollTo(0, 0);
            this.load();
        }
    });
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  load() {
    this.actRoute.data.subscribe((data: {list: any}) => {
      this.list = data.list;
      this.changeRef.detectChanges();
    });
  }

  delete(id) {
    this.serviceHttp.destroy(id).subscribe(() => {
      this.router.navigateByUrl(this.router.url);
    });
  }

  paginate(page) {
    this.serviceHttp.list(this.serachparams,page).subscribe((response) => {
      this.list = response;
      this.changeRef.detectChanges();
    });
  }

  filtering(filter,reload: boolean = true) {
    for(let item of filter){
      if(item.value == ""){
        let deletIndex = this.serachparams.filter.findIndex(x => x.field == item.name);
        if(deletIndex > -1){
          this.serachparams.filter.splice(deletIndex, 1);
        }
        continue;
      }

      let filterItem = this.filter.find(x => x.name == item.name);
      filterItem.value = item.value;

      let value = ( filterItem.strategy == 'like' ) ? `%${filterItem.value}%` : filterItem.value;
      var seachItem = this.serachparams.filter.find(x => x.field == filterItem.name );

      if(seachItem !== undefined)
      {
        seachItem.value = value;
      }else{
        this.serachparams.filter.push({
          type: filterItem.strategy,
          field: filterItem.name,
          value: value
        });
      }
    }

    if(reload){
      this.load();
    }
  }
}
