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
import { AcaoComponent } from "./listar/acao.component";
import { AcaoResolver } from "../../../../resolvers/acl/acao-resolver";

@NgModule({
    declarations: [
        AcaoComponent,
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
                path: '', component: AcaoComponent,
                resolve: { list: AcaoResolver },
                data: { breadcrumbs: [{ title: 'Ações'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Ações", route: "/admin/acl/acao" } ,{ title: "Visualizar Ação" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Ações", route: "/admin/acl/acao" } ,{ title: "Criar Ação" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: AcaoResolver },
                data: { breadcrumbs: [{ title: "Ações", route: "/admin/acl/acao" } ,{ title: "Editar Ação" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        AcaoResolver
    ]
})
export class AcaoModule { }
