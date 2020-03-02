import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleFilter } from 'src/app/store/navigation';
import { APP_CONFIG } from 'src/app/app.config';
import {AuthService} from "../../../services/auth.service";
import {Usuario} from "../../../model";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'smart-nav-info-card',
  templateUrl: './nav-info-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavInfoCardComponent {

  user = APP_CONFIG.user;
  avatar = APP_CONFIG.avatar;

  public usuario: Usuario;

  constructor(private store: Store<any>,
              public authService: AuthService,
              private router: Router) {
    this.usuario = this.authService.getUsuarioSession();
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
        this.usuario = this.authService.getUsuarioSession();
      }
    });
  }

  toggleFilter($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(toggleFilter());

  }
}
