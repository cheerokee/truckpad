import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategoriaComponent } from "./listar/categoria.component";
import { CriarComponent } from "./criar/criar.component";
import { EditarComponent } from "./editar/editar.component";
import { VisualizarComponent } from './visualizar/visualizar.component';
import { FormEntityComponent } from "./form-entity/form-entity.component";
import { BaseModule } from "../../base/base.module";
import { CategoriaResolver } from "../../../../resolvers/transporte/categoria-resolver";

@NgModule({
    declarations: [
        CategoriaComponent,
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
                path: '', component: CategoriaComponent,
                resolve: { list: CategoriaResolver },
                data: { breadcrumbs: [{ title: 'Categorias'}] }
            },
            {
                path: 'visualizar',
                component: VisualizarComponent,
                data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" } ,{ title: "Visualizar Categoria" }] }
            },
            {
                path: 'criar', component: CriarComponent,
                data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" } ,{ title: "Criar Categoria" }] }
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { entity: CategoriaResolver },
                data: { breadcrumbs: [{ title: "Categorias", route: "/admin/transporte/categoria" } ,{ title: "Editar Categoria" }] }
            }
        ]),
        BootstrapModule,
        BaseModule,
        ReactiveFormsModule
    ],
    providers: [
        CategoriaResolver
    ]
})
export class CategoriaModule { }
