import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from './form-entity/form-entity.component';
import { BaseModule } from "../../base/base.module";
import { PerfilComponent } from "./listar/perfil.component";
import { PerfilResolver } from "../../../../resolvers/acl/perfil-resolver";

@NgModule({
    declarations: [
        PerfilComponent,
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
                path: '', component: PerfilComponent,
                resolve: { list: PerfilResolver },
                data: { breadcrumbs: [{ title: 'Perfis'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Perfis", route: "/admin/acl/perfil" } ,{ title: "Visualizar Ação" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Perfis", route: "/admin/acl/perfil" } ,{ title: "Criar Ação" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: PerfilResolver },
                data: { breadcrumbs: [{ title: "Perfis", route: "/admin/acl/perfil" } ,{ title: "Editar Ação" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        PerfilResolver
    ]
})
export class PerfilModule { }
