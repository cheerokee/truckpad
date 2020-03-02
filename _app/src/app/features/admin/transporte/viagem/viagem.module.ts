import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViagemComponent } from "./listar/viagem.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import {ViagemResolver} from "../../../../resolvers/transporte/viagem-resolver";

@NgModule({
    declarations: [
        ViagemComponent,
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
                path: '', component: ViagemComponent,
                resolve: { list: ViagemResolver },
                data: { breadcrumbs: [{ title: 'Viagens'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Viagens", route: "/admin/transporte/viagem" } ,{ title: "Visualizar Viagem" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Viagens", route: "/admin/transporte/viagem" } ,{ title: "Criar Viagem" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: ViagemResolver },
                data: { breadcrumbs: [{ title: "Viagens", route: "/admin/transporte/viagem" } ,{ title: "Editar Viagem" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        ViagemResolver
    ]
})
export class ViagemModule { }
