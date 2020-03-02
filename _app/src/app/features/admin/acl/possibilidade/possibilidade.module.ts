import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PossibilidadeComponent } from "./listar/possibilidade.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { PossibilidadeResolver } from "../../../../resolvers/acl/possibilidade-resolver";

@NgModule({
    declarations: [
        PossibilidadeComponent,
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
                path: '', component: PossibilidadeComponent,
                resolve: { list: PossibilidadeResolver },
                data: { breadcrumbs: [{ title: 'Possibilidades'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" } ,{ title: "Visualizar Possibilidade" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" } ,{ title: "Criar Possibilidade" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: PossibilidadeResolver },
                data: { breadcrumbs: [{ title: "Possibilidades", route: "/admin/acl/possibilidade" } ,{ title: "Editar Possibilidade" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        PossibilidadeResolver
    ]
})
export class PossibilidadeModule { }
