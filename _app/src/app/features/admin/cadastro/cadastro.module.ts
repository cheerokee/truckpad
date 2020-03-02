import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BaseModule } from "../base/base.module";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'usuario',
                loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
            },
            {
                path: 'motorista',
                loadChildren: () => import('./motorista/motorista.module').then(m => m.MotoristaModule)
            }
        ]),
        BootstrapModule,
        BaseModule
    ]
})
export class CadastroModule { }
