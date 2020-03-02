import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { EnderecoResolver } from "../../../../resolvers/endereco/endereco-resolver";
import { EnderecoComponent } from "./listar/endereco.component";

@NgModule({
    declarations: [
        EnderecoComponent,
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
                path: '', component: EnderecoComponent,
                resolve: { list: EnderecoResolver },
                data: { breadcrumbs: [{ title: 'Endereços'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" } ,{ title: "Visualizar Endereço" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" } ,{ title: "Criar Endereço" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: EnderecoResolver },
                data: { breadcrumbs: [{ title: "Endereços", route: "/admin/endereco/endereco" } ,{ title: "Editar Endereço" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        EnderecoResolver
    ]
})
export class EnderecoModule { }
