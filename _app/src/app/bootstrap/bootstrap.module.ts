import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import { AlertErrorComponent } from "./alert-error/alert-error.component";
import { CardErrorComponent } from "./card-error/card-error.component";
import { FieldErrorComponent } from "./field-error/field-error.component";
import { ListErrorComponent } from "./list-error/list-error.component";
import { ModalComponent } from "./modal/modal.component";
import { PaginationComponent } from './pagination/pagination.component';
import { AccordionComponent } from "./accordion/accordion.component";

@NgModule({
    declarations: [
        AlertErrorComponent,
        CardErrorComponent,
        FieldErrorComponent,
        ListErrorComponent,
        ModalComponent,
        PaginationComponent,
        AccordionComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([])
    ],
    exports: [
        AlertErrorComponent,
        CardErrorComponent,
        FieldErrorComponent,
        ListErrorComponent,
        ModalComponent,
        PaginationComponent,
        AccordionComponent
    ]
})
export class BootstrapModule {
}
