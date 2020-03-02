import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../bootstrap/bootstrap.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ConfiguracaoComponent } from "./configuracao/configuracao.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { PanelsModule } from "../../shared/panels/panels.module";
import { CollapseModule } from "ngx-bootstrap";
import { ImageCropperModule } from "ngx-image-cropper";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { SemPermissaoComponent } from './sem-permissao/sem-permissao.component';
import { BaseModule } from "./base/base.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OnlyNumbersPipe } from "../../pipes/only-numbers.pipe";
import { PerfilPanelComponent } from "./perfil-panel/perfil-panel.component";

@NgModule({
    declarations: [
        DashboardComponent,
        ConfiguracaoComponent,
        SemPermissaoComponent,
        OnlyNumbersPipe,
        PerfilPanelComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FullCalendarModule,
        PanelsModule,
        RouterModule.forChild([
            {
                path: '', component: DashboardComponent,
                data: {breadcrumbs: []}
            },
            {
                path: 'perfil-panel', component: PerfilPanelComponent,
                data: {breadcrumbs: [{title: "Perfil"}]}
            },
            {
                path: 'cadastro',
                loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule)
            },
            {
                path: 'transporte',
                loadChildren: () => import('./transporte/transporte.module').then(m => m.TransporteModule)
            },
            {
                path: 'endereco',
                loadChildren: () => import('./endereco/endereco.module').then(m => m.EnderecoModule)
            },
            {
                path: 'acl',
                loadChildren: () => import('./acl/acl.module').then(m => m.AclModule)
            },
            {
                path: 'configuracao', component: ConfiguracaoComponent,
                data: {breadcrumbs: [{title: "Configurações"}]}
            },
            {
                path: 'sem-permissao', component: SemPermissaoComponent,
                data: {breadcrumbs: [{title: "Sem Permissão"}]}
            },
        ]),
        BootstrapModule,
        CollapseModule,
        ReactiveFormsModule,
        ImageCropperModule,
        SweetAlert2Module.forRoot(),
        BaseModule,
        FontAwesomeModule
    ],
    providers: [
        DatePipe,
        OnlyNumbersPipe
    ]
})
export class AdminModule { }
