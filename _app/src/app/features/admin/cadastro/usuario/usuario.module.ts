import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsuarioComponent } from "./listar/usuario.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { UsuarioResolver } from "../../../../resolvers/cadastro/usuario-resolver";

@NgModule({
    declarations: [
        UsuarioComponent,
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
                path: '', component: UsuarioComponent,
                resolve: { list: UsuarioResolver },
                data: { breadcrumbs: [{ title: 'Usuários'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Usuários", route: "/admin/cadastro/usuario" } ,{ title: "Visualizar Usuário" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Usuários", route: "/admin/cadastro/usuario" } ,{ title: "Criar Usuário" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: UsuarioResolver },
                data: { breadcrumbs: [{ title: "Usuários", route: "/admin/cadastro/usuario" } ,{ title: "Editar Usuário" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        UsuarioResolver
    ]
})
export class UsuarioModule { }
