import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BaseModule } from "../base/base.module";
import { PainelViagemComponent } from './painel-viagem/painel-viagem.component';
import {ViagemComponent} from "./viagem/listar/viagem.component";
import {ViagemResolver} from "../../../resolvers/transporte/viagem-resolver";

@NgModule({
    declarations: [
        PainelViagemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'painel-viagem', component: PainelViagemComponent,
                data: { breadcrumbs: [{ title: 'Painel de Viagens'}] }
            },
            {
                path: 'categoria',
                loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
            },
            {
                path: 'marca',
                loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule)
            },
            {
                path: 'veiculo',
                loadChildren: () => import('./veiculo/veiculo.module').then(m => m.VeiculoModule)
            },
            {
                path: 'viagem',
                loadChildren: () => import('./viagem/viagem.module').then(m => m.ViagemModule)
            }
        ]),
        BootstrapModule,
        BaseModule
    ]
})
export class TransporteModule { }
