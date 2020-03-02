import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BootstrapModule } from "../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AuthComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: AuthComponent,
                data: {breadcrumbs: ['Dashboard', 'Auth']}
            }
        ]),
        BootstrapModule,
        ReactiveFormsModule
    ]
})
export class AuthModule { }
