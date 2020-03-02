import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecursoComponent } from "./listar/recurso.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from './form-entity/form-entity.component';
import { BaseModule } from "../../base/base.module";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {RecursoResolver} from "../../../../resolvers/acl/recurso-resolver";

@NgModule({
    declarations: [
        RecursoComponent,
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
                path: '', component: RecursoComponent,
                resolve: { list: RecursoResolver },
                data: { breadcrumbs: [{ title: 'Recursos'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Recursos", route: "/admin/acl/recurso" } ,{ title: "Visualizar Recurso" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Recursos", route: "/admin/acl/recurso" } ,{ title: "Criar Recurso" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: RecursoResolver },
                data: { breadcrumbs: [{ title: "Recursos", route: "/admin/acl/recurso" } ,{ title: "Editar Recurso" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        RecursoResolver
    ]
})
export class RecursoModule { }
