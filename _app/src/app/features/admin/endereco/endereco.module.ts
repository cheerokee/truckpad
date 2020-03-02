import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BaseModule } from "../base/base.module";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'cidade',
                loadChildren: () => import('./cidade/cidade.module').then(m => m.CidadeModule)
            },
            {
                path: 'endereco',
                loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule)
            }
        ]),
        BootstrapModule,
        BaseModule
    ]
})
export class EnderecoModule { }
