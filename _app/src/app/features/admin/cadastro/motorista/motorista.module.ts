import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MotoristaComponent } from "./listar/motorista.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { MotoristaResolver } from "../../../../resolvers/cadastro/motorista-resolver";

@NgModule({
    declarations: [
        MotoristaComponent,
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
                path: '', component: MotoristaComponent,
                resolve: { list: MotoristaResolver },
                data: { breadcrumbs: [{ title: 'Motoristas'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" } ,{ title: "Visualizar Motorista" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" } ,{ title: "Criar Motorista" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: MotoristaResolver },
                data: { breadcrumbs: [{ title: "Motoristas", route: "/admin/cadastro/motorista" } ,{ title: "Editar Motorista" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        MotoristaResolver
    ]
})
export class MotoristaModule { }
