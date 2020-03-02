import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MarcaComponent } from "./listar/marca.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { MarcaResolver } from "../../../../resolvers/transporte/marca-resolver";

@NgModule({
    declarations: [
        MarcaComponent,
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
                path: '', component: MarcaComponent,
                resolve: { list: MarcaResolver },
                data: { breadcrumbs: [{ title: 'Marcas'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Marcas", route: "/admin/transporte/marca" } ,{ title: "Visualizar Marca" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Marcas", route: "/admin/transporte/marca" } ,{ title: "Criar Marca" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: MarcaResolver },
                data: { breadcrumbs: [{ title: "Marcas", route: "/admin/transporte/marca" } ,{ title: "Editar Marca" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        MarcaResolver
    ]
})
export class MarcaModule { }
