import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BaseModule } from "../base/base.module";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'recurso',
                loadChildren: () => import('./recurso/recurso.module').then(m => m.RecursoModule)
            },
            {
                path: 'acao',
                loadChildren: () => import('./acao/acao.module').then(m => m.AcaoModule)
            },
            {
                path: 'perfil',
                loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
            },
            {
                path: 'possibilidade',
                loadChildren: () => import('./possibilidade/possibilidade.module').then(m => m.PossibilidadeModule)
            },
            {
                path: 'panel-autorizacao',
                loadChildren: () => import('./panel-autorizacao/panel-autorizacao.module').then(m => m.PanelAutorizacaoModule)
            },
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ]
})
export class AclModule {}
