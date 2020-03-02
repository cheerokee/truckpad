import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { Store } from '@ngrx/store';
import { mobileNavigation } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import {Usuario} from "../../../model";
import { NavigationItems } from '../../../app.navigation';

@Component({
  selector: 'smart-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  app = APP_CONFIG.app;

  previousUrl = '';

  constructor(private store: Store<any>,
              public authService: AuthService,
              private router: Router,
              private changeDetect : ChangeDetectorRef) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(this.previousUrl == '/auth'){
          this.initFunctions();
        }

        this.previousUrl = this.router.url;
      }
    });
  }

  closeMobileNav($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(mobileNavigation({open: false}));
  }

  initFunctions() {

  }

  canShowNavBar() {
    //return this.authService.isAuth() && !this.inAuthRoute();
    return !this.inAuthRoute();
  }

  inAuthRoute() {
    let authRoutes = [
      '/',
      '/auth',
      '/forgot',
      '/register'
    ];

    for(let route of authRoutes){
      if(route != '/'){
        let encontrou = this.router.url.indexOf(route);
        if(encontrou !== -1){
          return true;
        }
      }
    }

    // @ts-ignore
    return authRoutes.includes(this.router.url);
  }

  filterItems(needle, heystack) {
    var query = needle.toLowerCase();
    return heystack.filter(function(item) {
      return item.toLowerCase().indexOf(query) >= 0;
    })
  }
}
