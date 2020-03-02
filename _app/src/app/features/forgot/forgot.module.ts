import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgotComponent} from "./forgot.component";

@NgModule({
    declarations: [ForgotComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '', component: ForgotComponent,
                data: {breadcrumbs: ['Dashboard', 'Forgot']}
            }
        ]),
        BootstrapModule,
        ReactiveFormsModule
    ]
})
export class ForgotModule { }
