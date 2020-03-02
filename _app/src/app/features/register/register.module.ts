import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { RegisterResolver } from "../../resolvers/register/register-resolver";

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: RegisterComponent,
                data: {breadcrumbs: ['Dashboard', 'Register']}
            },
            {
                path: ':chave', component: RegisterComponent,
                resolve: { list: RegisterResolver },
                data: {breadcrumbs: ['Dashboard', 'Register']}
            }
        ]),
        BootstrapModule,
        ReactiveFormsModule
    ],
    providers: [
        RegisterResolver
    ]
})
export class RegisterModule { }
