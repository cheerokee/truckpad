import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { selectNavigationItems, NavigationItem } from 'src/app/store/navigation';
import { selectSettingsState } from 'src/app/store/settings';
import { PrivilegioHttpService } from "../../../services/http/acl/privilegio-http.service";
import {Usuario} from "../../../model";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'smart-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  vm$ = this.store.select(
    createSelector(
      selectNavigationItems,
      selectSettingsState,
      (items, settings) => ({ items, minified: settings.minifyNavigation })
    )
  );

  items: any;
  usuario: Usuario;

  constructor(
      private store: Store<any>,
      public changeRef: ChangeDetectorRef,
      private privilegioHttpService: PrivilegioHttpService,
      private authService: AuthService) {
    this.usuario = this.authService.getUsuarioSession();
  }

  async ngOnInit() {
    if(this.authService.isAdmin()){
      this.vm$.subscribe((response) => this.items = response.items);
    }else{
      this.vm$.subscribe(async response => {
        if(this.usuario) {
          await this.privilegioHttpService
              .permiteMassa(response.items,'Visualizar')
              .subscribe(resposta => {
                for(let i in response.items){
                  let item = response.items[i];

                  if(item.items){
                    if(item.items.length > 0){
                      for(let j in item.items){
                        let subitem = item.items[j];
                        if(resposta.find(x => x.recurso == subitem.title) && !resposta.find(x => x.recurso == subitem.title).permite){
                          delete item.items[j];
                        }
                      }

                      item.items = this.cleanArray(item.items);
                    }

                    if(item.items.length == 0){
                      delete response.items[i];
                    }
                  }else{
                    if(resposta.find(x => x.recurso == item.title) && !resposta.find(x => x.recurso == item.title).permite){
                      delete response.items[i];
                      this.changeRef.detectChanges();
                    }
                  }
                }

                response.items = this.cleanArray(response.items);

                this.items = response.items;
                this.changeRef.detectChanges();
              });
        }
      })
    }
  }

  trackByFn(idx: number, item: NavigationItem) {
    return item.title + '_' + idx;
  }

  cleanArray(actual) {
    var newArray = [];
    for (let item of actual) {
      if(!item)
        continue;

      newArray.push(item);
    }
    return newArray;
  }
}
