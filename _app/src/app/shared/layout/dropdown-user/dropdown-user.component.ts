import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Usuario } from "../../../model";
import { NavigationEnd, Router } from "@angular/router";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'smart-dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrls: ['./dropdown-user.component.css']
})
export class DropdownUserComponent {

  foto: string;

  usuario: Usuario | null;

  constructor(private authService: AuthService,
              private router: Router,
              private changeRef: ChangeDetectorRef) {
    this.setUsuario();

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);

        this.setUsuario();
      }
    });
  }

  setUsuario() {
    this.usuario = this.authService.getUsuarioSession();
    this.foto = this.authService.getFoto();
  }

  deslogar() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
