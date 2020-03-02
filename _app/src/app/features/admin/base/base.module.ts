import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from "../../../bootstrap/bootstrap.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { BaseComponent } from "./base.component";

import { FormComponent } from "./form/form.component";
import { ListarComponent } from './listar/listar.component';
import { PaginationComponent } from './pagination/pagination.component';

import { TextComponent } from './filter/text/text.component';
import { SelectComponent } from './filter/select/select.component';
import { TextAreaComponent } from './filter/text-area/text-area.component';
import { DateComponent } from './filter/date/date.component';
import { JoinSelectComponent } from './filter/join-select/join-select.component' ;
import { JoinAutocompleteComponent } from './filter/join-autocomplete/join-autocomplete.component';

import { BaseTextComponent } from './form/fields/base-text/base-text.component';
import { BaseTelefoneComponent } from "./form/fields/base-telefone/base-telefone.component";
import { BaseTextAreaComponent } from './form/fields/base-text-area/base-text-area.component';
import { BaseSelectComponent } from './form/fields/base-select/base-select.component';
import { BaseNumberComponent } from './form/fields/base-number/base-number.component';
import { BaseDateComponent } from "./form/fields/base-date/base-date.component";
import { BaseJoinSelectComponent } from "./form/fields/base-join-select/base-join-select.component";
import { BaseJoinAutocompleteComponent } from "./form/fields/base-join-autocomplete/base-join-autocomplete.component";
import { LabelsToStringPipe } from "../../../pipes/labels-to-string.pipe";
import { FilterBaseComponent } from './filter/filter-base.component';
import { BaseMoedaComponent } from './form/fields/base-moeda/base-moeda.component';
import { CurrencyGlobalPipe } from "../../../pipes/currency-global.pipe";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';
import { BaseCpfComponent } from './form/fields/base-cpf/base-cpf.component';

// the second parameter 'fr-FR' is optional
registerLocaleData(localePt, 'pt-PT');

@NgModule({
    declarations: [
        BaseComponent,
        FormComponent,
        ListarComponent,

        FilterBaseComponent,
        TextComponent,
        SelectComponent,
        TextAreaComponent,
        DateComponent,
        JoinSelectComponent,
        JoinAutocompleteComponent,

        BaseTextComponent,
        BaseTelefoneComponent,
        BaseTextAreaComponent,
        BaseSelectComponent,
        BaseNumberComponent,
        BaseDateComponent,
        BaseJoinSelectComponent,
        BaseJoinAutocompleteComponent,

        PaginationComponent,
        LabelsToStringPipe,
        CurrencyGlobalPipe,
        BaseMoedaComponent,
        BaseCpfComponent
    ],
    exports: [
        ListarComponent,
        FormComponent,
        BaseTextComponent,
        BaseTelefoneComponent,
        BaseNumberComponent,
        BaseTextAreaComponent,
        BaseSelectComponent,
        BaseDateComponent,
        BaseJoinSelectComponent,

        BaseJoinAutocompleteComponent,

        PaginationComponent,
        JoinAutocompleteComponent,
        JoinSelectComponent,
        DateComponent,
        SelectComponent,
        TextAreaComponent,
        TextComponent,
        FilterBaseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'base', component: BaseComponent,
                data: {breadcrumbs: [{title: 'Base'}]}
            },
            {
                path: 'listar', component: ListarComponent,
                data: {breadcrumbs: [{title: "Base", route: "/admin/base"}, {title: "Listar"}]}
            },
            {
                path: 'form', component: FormComponent,
                data: {breadcrumbs: [{title: "Base", route: "/admin/base"}, {title: "Form"}]}
            }
        ]),
        BootstrapModule,
        SweetAlert2Module,
        ReactiveFormsModule
    ]
})
export class BaseModule { }
