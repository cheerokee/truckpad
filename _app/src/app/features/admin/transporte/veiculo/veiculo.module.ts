import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VeiculoComponent } from "./listar/veiculo.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { VeiculoResolver } from "../../../../resolvers/transporte/veiculo-resolver";

@NgModule({
    declarations: [
        VeiculoComponent,
        CriarComponent,
        EditarComponent,
        VisualizarComponent,
        FormEntityComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: VeiculoComponent,
                resolve: { list: VeiculoResolver },
                data: { breadcrumbs: [{ title: 'Veículos'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Veículos", route: "/admin/transporte/veiculo" } ,{ title: "Visualizar Veículo" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Veículos", route: "/admin/transporte/veiculo" } ,{ title: "Criar Veículo" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: VeiculoResolver },
                data: { breadcrumbs: [{ title: "Veículos", route: "/admin/transporte/veiculo" } ,{ title: "Editar Veículo" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        VeiculoResolver
    ]
})
export class VeiculoModule { }
