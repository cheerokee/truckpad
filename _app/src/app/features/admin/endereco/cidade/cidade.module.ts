import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CidadeComponent } from "./listar/cidade.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import {CidadeResolver} from "../../../../resolvers/endereco/cidade-resolver";

@NgModule({
    declarations: [
        CidadeComponent,
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
                path: '', component: CidadeComponent,
                resolve: { list: CidadeResolver },
                data: { breadcrumbs: [{ title: 'Cidades'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Cidades", route: "/admin/endereco/cidade" } ,{ title: "Visualizar Cidade" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Cidades", route: "/admin/endereco/cidade" } ,{ title: "Criar Cidade" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: CidadeResolver },
                data: { breadcrumbs: [{ title: "Cidades", route: "/admin/endereco/cidade" } ,{ title: "Editar Cidade" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        CidadeResolver
    ]
})
export class CidadeModule { }
