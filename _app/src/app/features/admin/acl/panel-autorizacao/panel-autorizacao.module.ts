import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PanelAutorizacaoComponent } from "./panel-autorizacao.component";
import { PanelPrivilegioComponent } from './panel-privilegio/panel-privilegio.component';
import { PanelPossibilidadeComponent } from './panel-possibilidade/panel-possibilidade.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {BaseModule} from "../../base/base.module";

@NgModule({
    declarations: [
        PanelAutorizacaoComponent,
        PanelPrivilegioComponent,
        PanelPossibilidadeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: PanelAutorizacaoComponent,
                data: {breadcrumbs: [{title: 'Painel de Autorização'}]}
            }
        ]),
        BootstrapModule,
        ReactiveFormsModule,
        SweetAlert2Module,
        BaseModule
    ],
    providers: [
    ]
})
export class PanelAutorizacaoModule { }
