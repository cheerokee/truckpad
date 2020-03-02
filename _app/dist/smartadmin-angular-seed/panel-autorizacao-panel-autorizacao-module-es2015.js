(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-autorizacao-panel-autorizacao-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"subheader\">\r\n    <h1 class=\"subheader-title\">\r\n        <i class=\"subheader-icon fal fa-lock-alt\"></i> Painel de Autorização\r\n    </h1>\r\n</div>\r\n<div class=\"panel\">\r\n    <div class=\"panel-container show\">\r\n        <div class=\"panel-content\">\r\n            <ul class=\"nav nav-pills\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\"\r\n                       [ngClass]=\"{ 'active' : tab == 'panel-privilegio' }\"\r\n                       data-toggle=\"tab\"\r\n                       (click)=\"tabChange('panel-privilegio')\"\r\n                       href=\"#panel-privilegio\">\r\n                        <i class=\"fal fa-home mr-1\"></i>Gerenciador de Privilégios\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"isAdmin\" class=\"nav-item\">\r\n                    <a class=\"nav-link\"\r\n                       [ngClass]=\"{ 'active' : tab == 'panel-possibilidade' }\"\r\n                       data-toggle=\"tab\"\r\n                       (click)=\"tabChange('panel-possibilidade')\"\r\n                       href=\"#panel-possibilidade\">\r\n                        <i class=\"fal fa-user mr-1\"></i>Gerenciador de Possibilidades\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content py-3\">\r\n                <hr />\r\n                <panel-privilegio class=\"tab-pane fade\"\r\n                                  [ngClass]=\"{ 'show active' : tab == 'panel-privilegio' }\"\r\n                                  [id]=\"'panel-privilegio'\"\r\n                                  role=\"tabpanel\"></panel-privilegio>\r\n                <panel-possibilidade class=\"tab-pane fade\"\r\n                                     *ngIf=\"isAdmin\"\r\n                                     [ngClass]=\"{ 'show active' : tab == 'panel-possibilidade' }\"\r\n                                     [id]=\"'panel-possibilidade'\"\r\n                                     role=\"tabpanel\"></panel-possibilidade>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form id=\"form-panel-possibilidade\" (ngSubmit)=\"save()\"></form>\r\n<div class=\"row mt-5 mb-5\">\r\n    <div class=\"col-md-10 offset-1 card bg-gray-50 pt-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <h3>Gerenciador de Possibilidades</h3>\r\n                <p class=\"text-justify\">\r\n                    Devemos definir o que podemos fazer com cada recurso,\r\n                    geramente cada recurso tem suas possibilidades definidas automaticamente quando o usuário\r\n                    se depara com a verificação de permissão.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div [formGroup]=\"form\" class=\"col-md-12 form-group\">\r\n                <label class=\"form-label mb-3\">Selecione o Recurso</label>\r\n                <div class=\"row\">\r\n                    <div *ngFor=\"let recurso of recursos?._embedded.recurso\"\r\n                         class=\"col-md-3 mb-3\">\r\n                        <button type=\"button\"\r\n                                (click)=\"selecionaRecurso(recurso.id)\"\r\n                                class=\"form-control btn btn-primary waves-effect waves-themed\">\r\n                            {{ recurso.nome }}\r\n                            <span *ngIf=\"recurso.id == form.get('recurso').value\"\r\n                                  class=\"badge bg-primary-500 ml-2\">\r\n                        <i class=\"fal fa-check\"></i>\r\n                    </span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\"\r\n                       class=\"d-none\"\r\n                       form=\"form-panel-possibilidade\"\r\n                       [id]=\"'recurso'\"\r\n                       formControlName=\"recurso\" />\r\n                <field-error [field]=\"form.get('recurso')\"\r\n                             [label]=\"'Recurso'\"\r\n                             [messages]=\"[]\"></field-error>\r\n            </div>\r\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\r\n                <label [for]=\"'acao'\" class=\"form-label mb-3\">Escolha a Ação</label>\r\n                <select [id]=\"'acao'\"\r\n                        formControlName=\"acao\"\r\n                        form=\"form-panel-possibilidade\"\r\n                        class=\"form-control form-control\">\r\n                    <option [ngValue]=\"null\" >Selecione...</option>\r\n                    <option *ngFor=\"let acao of acoes\" [ngValue]=\"acao?.id\">{{ acao?.nome }}</option>\r\n                </select>\r\n                <field-error [field]=\"form?.get('acao')\"\r\n                             [label]=\"'Ação'\"\r\n                             [messages]=\"[]\"></field-error>\r\n            </div>\r\n            <div class=\"col-md-9 form-group\">\r\n                <label class=\"form-label mb-3\">&nbsp;</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">\r\n                    <i class=\"fal fa-search\"></i>\r\n                </span>\r\n                    </div>\r\n                    <input type=\"text\"\r\n                           class=\"form-control form-control\"\r\n                           (keyup)=\"search()\"\r\n                           [(ngModel)]=\"recurso_search\"\r\n                           placeholder=\"Pesquise o Recurso\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel-toolbar border-top pt-3 pb-3\">\r\n                    <button type=\"submit\"\r\n                            form=\"form-panel-possibilidade\"\r\n                            id=\"entrar\"\r\n                            [hidden]=\"!btnSalvar\"\r\n                            [disabled]=\"!form.valid\"\r\n                            title=\"SALVAR\"\r\n                            class=\"btn btn-sm btn-primary waves-effect waves-themed\">\r\n                        <i class=\"fal fa-save\"></i>&nbsp;Salvar\r\n                    </button>\r\n                    <button class=\"btn btn-sm btn-danger waves-effect waves-themed\"\r\n                            type=\"button\"\r\n                            [hidden]=\"btnSalvar\"\r\n                            disabled=\"\">\r\n                            <span class=\"spinner-grow spinner-grow-sm\"\r\n                                  role=\"status\"\r\n                                  aria-hidden=\"true\"></span>\r\n                        Aguarde...\r\n                    </button>\r\n                    <button type=\"button\"\r\n                            title=\"CANCELAR\"\r\n                            (click)=\"resetGeral()\"\r\n                            class=\"ml-2 btn btn-sm btn-danger waves-effect waves-themed\">\r\n                        <i class=\"fal fa-times\"></i>&nbsp;Cancelar\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr >\r\n<div class=\"row mt-4\">\r\n    <div class=\"col-md-12\">\r\n        <table class=\"table table-striped\">\r\n            <thead>\r\n            <tr>\r\n                <th>Recurso</th>\r\n                <th>Possibilidades</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let possibilidade of possibilidades\">\r\n                <td>{{ possibilidade.recurso_nome }}</td>\r\n                <td>\r\n                    <button *ngFor=\"let acao of possibilidade.acoes\"\r\n                            type=\"button\"\r\n                            [swal]=\"deleteSwal\"\r\n                            (click)=\"del({acao: acao.id,recurso: possibilidade.recurso_id})\"\r\n                            class=\"btn btn-xs btn-secondary waves-effect waves-themed m-1\">\r\n                        {{ acao.nome }} <i class=\"fal fa-times\"></i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<swal #deleteSwal\r\n      title=\"Deseja deletar o registro?\"\r\n      text=\"Essa ação é irreversível\"\r\n      icon=\"question\"\r\n      [showCancelButton]=\"true\"\r\n      [focusCancel]=\"true\"\r\n      [confirmButtonText]=\"'Sim'\"\r\n      [cancelButtonText]=\"'Não'\"\r\n      (confirm)=\"delete($event)\" (cancel)=\"cancel($event)\">\r\n</swal>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mt-5 mb-5\">\n    <div class=\"col-md-10 offset-1 card bg-gray-50 pt-2\">\n        <div class=\"row\">\n            <div class=\"col-md-12 pt-2\">\n                <h4 class=\"font-weight-bold text-primary\">\n                    FAÇA O FILTRO\n                </h4>\n                <hr />\n            </div>\n            <div *ngIf=\"isAdmin\" [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'clinica'\" class=\"form-label\">Escolha a Clínica</label>\n                <base-join-autocomplete [form]=\"form\"\n                                        [element]=\"element_clinica\"\n                                        (onValue)=\"changeClinica(element_clinica,$event)\"\n                                        (onSearch)=\"search($event)\"></base-join-autocomplete>\n                <field-error [field]=\"form?.get('clinica')\"\n                             [label]=\"'Clinica'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'perfil'\" class=\"form-label\">Escolha o Perfil</label>\n                <base-select (onValue)=\"changePerfil(element_perfil,$event)\"\n                             [element]=\"element_perfil\"\n                             [form]=\"form\"></base-select>\n                <field-error [field]=\"form?.get('perfil')\"\n                             [label]=\"'Perfil'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'recurso'\" class=\"form-label\">Escolha o Recurso</label>\n                <base-select (onValue)=\"changeRecurso(element_recurso,$event)\"\n                             [element]=\"element_recurso\"\n                             [form]=\"form\"></base-select>\n                <field-error [field]=\"form?.get('recurso')\"\n                             [label]=\"'Recurso'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n            <div [formGroup]=\"form\" class=\"col-md-3 form-group\">\n                <label [for]=\"'acao'\" class=\"form-label\">Escolha a Ação</label>\n                <base-select *ngIf=\"form.get('recurso').value !== null\"\n                             (onValue)=\"filter(element_acao,$event)\"\n                             [element]=\"element_acao\"\n                             [form]=\"form\"></base-select>\n                <p *ngIf=\"form.get('recurso').value == null\"\n                   class=\"alert alert-warning p-2\">\n                    Selecione o recurso primeiro\n                </p>\n                <field-error [field]=\"form?.get('acao')\"\n                             [label]=\"'Ação'\"\n                             [messages]=\"[]\"></field-error>\n            </div>\n        </div>\n    </div>\n</div>\n<hr >\n<div class=\"row mt-4\">\n    <div class=\"col-md-12\">\n        <h4 class=\"text-primary font-weight-bold\">PRIVILÉGIOS</h4>\n        <p *ngIf=\"!form.get('perfil').value\"\n           class=\"alert alert-warning\">\n            Selecione o perfil antes de determinar os privilégios\n        </p>\n        <table *ngIf=\"form.get('perfil').value\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>\n                        Recurso\n                    </th>\n                    <th>\n                        Ações\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let possibilidade of possibilidades\">\n                    <td>{{ possibilidade._embedded.recurso.nome }}</td>\n                    <td>\n                        <div class=\"frame-wrap\">\n                            <div *ngFor=\"let acao of possibilidade.acoes\"\n                                 class=\"custom-control custom-checkbox custom-control-inline\">\n                                <input type=\"checkbox\"\n                                       (change)=\"save(possibilidade.recurso,acao.id)\"\n                                       [disabled]=\"!form.get('perfil').value || saveProgress\"\n                                       [checked]=\"isChecked(possibilidade.recurso,acao.id)\"\n                                       class=\"custom-control-input\"\n                                       [attr.id]=\"'checkAcao_' + possibilidade.recurso + '_' + acao.id\">\n                                <label class=\"custom-control-label\"\n                                       [attr.for]=\"'checkAcao_' + possibilidade.recurso + '_' + acao.id\">\n                                    {{ acao.nome }}\n                                </label>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1hdXRvcml6YWNhby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PanelAutorizacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelAutorizacaoComponent", function() { return PanelAutorizacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/http/acl/privilegio-http.service */ "./src/app/services/http/acl/privilegio-http.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");






let PanelAutorizacaoComponent = class PanelAutorizacaoComponent {
    constructor(router, changeRef, location, authService, privilegioHttpService) {
        this.router = router;
        this.changeRef = changeRef;
        this.location = location;
        this.authService = authService;
        this.privilegioHttpService = privilegioHttpService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isAdmin = this.authService.isAdmin();
            yield this.privilegioHttpService.permite('Painel de Autorização', 'Visualizar');
            let tab = localStorage.getItem('panel-autorizacao-tab');
            this.tab = (tab) ? tab : 'panel-privilegio';
            this.changeRef.detectChanges();
        });
    }
    tabChange(tab) {
        localStorage.setItem('panel-autorizacao-tab', tab);
        this.router.navigateByUrl(this.router.url);
    }
};
PanelAutorizacaoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"] }
];
PanelAutorizacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'panel-autorizacao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel-autorizacao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel-autorizacao.component.css */ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegioHttpService"]])
], PanelAutorizacaoComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PanelAutorizacaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelAutorizacaoModule", function() { return PanelAutorizacaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../bootstrap/bootstrap.module */ "./src/app/bootstrap/bootstrap.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-autorizacao.component */ "./src/app/features/admin/acl/panel-autorizacao/panel-autorizacao.component.ts");
/* harmony import */ var _panel_privilegio_panel_privilegio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-privilegio/panel-privilegio.component */ "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts");
/* harmony import */ var _panel_possibilidade_panel_possibilidade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel-possibilidade/panel-possibilidade.component */ "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../base/base.module */ "./src/app/features/admin/base/base.module.ts");











let PanelAutorizacaoModule = class PanelAutorizacaoModule {
};
PanelAutorizacaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__["PanelAutorizacaoComponent"],
            _panel_privilegio_panel_privilegio_component__WEBPACK_IMPORTED_MODULE_7__["PanelPrivilegioComponent"],
            _panel_possibilidade_panel_possibilidade_component__WEBPACK_IMPORTED_MODULE_8__["PanelPossibilidadeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '', component: _panel_autorizacao_component__WEBPACK_IMPORTED_MODULE_6__["PanelAutorizacaoComponent"],
                    data: { breadcrumbs: [{ title: 'Painel de Autorização' }] }
                }
            ]),
            _bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_3__["BootstrapModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SweetAlert2Module"],
            _base_base_module__WEBPACK_IMPORTED_MODULE_10__["BaseModule"]
        ],
        providers: []
    })
], PanelAutorizacaoModule);



/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1wb3NzaWJpbGlkYWRlL3BhbmVsLXBvc3NpYmlsaWRhZGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PanelPossibilidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPossibilidadeComponent", function() { return PanelPossibilidadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/http/acl/acao-http.service */ "./src/app/services/http/acl/acao-http.service.ts");
/* harmony import */ var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http/acl/recurso-http.service */ "./src/app/services/http/acl/recurso-http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/http/acl/possibilidade-http.service */ "./src/app/services/http/acl/possibilidade-http.service.ts");
/* harmony import */ var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/notify-message.service */ "./src/app/services/notify-message.service.ts");







let PanelPossibilidadeComponent = class PanelPossibilidadeComponent {
    constructor(acaoHttpService, recursoHttpService, possibilidadeHttpService, formBuilder, notifyMessage, changeRef) {
        this.acaoHttpService = acaoHttpService;
        this.recursoHttpService = recursoHttpService;
        this.possibilidadeHttpService = possibilidadeHttpService;
        this.formBuilder = formBuilder;
        this.notifyMessage = notifyMessage;
        this.changeRef = changeRef;
        this.possibilidades = [];
        this.typingTimer = null;
        this.btnSalvar = true;
        this.selectToDelete = { acao: null, recurso: null };
        this.defineFormulario();
        this.acaoHttpService.listAll().then((response) => {
            this.acoes = response;
            this.changeRef.detectChanges();
        });
        this.loadRecursos();
        this.loadPossibilidades();
    }
    ngOnInit() {
    }
    loadRecursos(like = '') {
        if (like != '') {
            this.recursoHttpService.getByLike(like).subscribe((response) => {
                this.recursos = response;
                this.changeRef.detectChanges();
            });
        }
        else {
            this.recursoHttpService.listResolver().subscribe((response) => {
                this.recursos = response;
                this.changeRef.detectChanges();
            });
        }
    }
    loadPossibilidades(page = 1) {
        let searchparams = {
            "filter": [],
            "order-by": [
                { 'type': 'field', 'field': 'recurso', 'direction': 'ASC' }
            ]
        };
        this.possibilidades = [];
        this.possibilidadeHttpService.listAll(searchparams).then((response) => {
            let recursoAnterior = null;
            for (let item of response) {
                let recurso = item._embedded.recurso;
                let acao = item._embedded.acao;
                if (recursoAnterior != recurso.id) {
                    recursoAnterior = recurso.id;
                    this.possibilidades.push({ recurso_id: recurso.id, recurso_nome: recurso.nome, acoes: [] });
                }
                let possibilidade = this.possibilidades.find(x => x.recurso_id == recurso.id);
                possibilidade.acoes.push(acao);
            }
            this.changeRef.detectChanges();
        });
    }
    selecionaRecurso(id) {
        this.form.get('recurso').setValue(id);
    }
    search() {
        this.form.get('recurso').setValue(null);
        if (this.typingTimer != null)
            clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
            this.loadRecursos(this.recurso_search);
        }, 1000);
    }
    save() {
        this.btnSalvar = false;
        let searchparams = {
            "filter": [{
                    "type": "andx",
                    "conditions": [
                        { "field": "acao", "type": "eq", "value": this.form.get('acao').value },
                        { "field": "recurso", "type": "eq", "value": this.form.get('recurso').value }
                    ]
                }],
            "order-by": []
        };
        this.possibilidadeHttpService.list(searchparams).subscribe((response) => {
            setTimeout(() => {
                if (response.total_items == 0) {
                    this.possibilidadeHttpService.create(this.form.value).subscribe(() => {
                        this.form.get('acao').setValue(null);
                        this.btnSalvar = true;
                        this.changeRef.detectChanges();
                        this.notifyMessage.success("Possibilidade cadastrada com sucesso");
                        this.loadPossibilidades();
                    }, (error) => {
                        console.log(error);
                        this.notifyMessage.success("Houve um erro ao salvar a possibilidade, tente novamente");
                        this.btnSalvar = true;
                    });
                }
                else {
                    this.defineFormulario();
                    this.btnSalvar = true;
                    this.changeRef.detectChanges();
                    this.notifyMessage.error("A possibilidade já foi cadastrada");
                }
            }, 1000);
        });
    }
    resetGeral() {
        this.defineFormulario();
    }
    defineFormulario() {
        this.form = this.formBuilder.group({
            acao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            recurso: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    del(item) {
        this.selectToDelete = item;
    }
    delete(e) {
        let searchparams = {
            "filter": [{
                    "type": "andx",
                    "conditions": [
                        { "field": "acao", "type": "eq", "value": this.selectToDelete.acao },
                        { "field": "recurso", "type": "eq", "value": this.selectToDelete.recurso }
                    ]
                }],
            "order-by": []
        };
        this.possibilidadeHttpService.list(searchparams).subscribe((response) => {
            this.possibilidadeHttpService.destroy(response._embedded.possibilidade[0].id).subscribe(() => {
                this.notifyMessage.success("Registro deletado com sucesso");
                this.selectToDelete = null;
                this.loadPossibilidades();
            }, (error) => {
                this.notifyMessage.error("Houve um erro ao deletar a possibilidade");
                this.selectToDelete = null;
            });
        });
    }
    cancel(e) {
        console.log(e);
    }
};
PanelPossibilidadeComponent.ctorParameters = () => [
    { type: _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__["AcaoHttpService"] },
    { type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"] },
    { type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__["NotifyMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PanelPossibilidadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'panel-possibilidade',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel-possibilidade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel-possibilidade.component.css */ "./src/app/features/admin/acl/panel-autorizacao/panel-possibilidade/panel-possibilidade.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_2__["AcaoHttpService"],
        _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_3__["RecursoHttpService"],
        _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_notify_message_service__WEBPACK_IMPORTED_MODULE_6__["NotifyMessageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PanelPossibilidadeComponent);



/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FkbWluL2FjbC9wYW5lbC1hdXRvcml6YWNhby9wYW5lbC1wcml2aWxlZ2lvL3BhbmVsLXByaXZpbGVnaW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PanelPrivilegioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelPrivilegioComponent", function() { return PanelPrivilegioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http/acl/acao-http.service */ "./src/app/services/http/acl/acao-http.service.ts");
/* harmony import */ var _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/http/acl/recurso-http.service */ "./src/app/services/http/acl/recurso-http.service.ts");
/* harmony import */ var _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/http/acl/possibilidade-http.service */ "./src/app/services/http/acl/possibilidade-http.service.ts");
/* harmony import */ var _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/http/cadastro/usuario-http.service */ "./src/app/services/http/cadastro/usuario-http.service.ts");
/* harmony import */ var _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/http/acl/privilegio-http.service */ "./src/app/services/http/acl/privilegio-http.service.ts");
/* harmony import */ var _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/http/acl/perfil-http.service */ "./src/app/services/http/acl/perfil-http.service.ts");
/* harmony import */ var _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/notify-message.service */ "./src/app/services/notify-message.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./src/app/services/auth.service.ts");











let PanelPrivilegioComponent = class PanelPrivilegioComponent {
    constructor(acaoHttpService, recursoHttpService, possibilidadeHttpService, usuarioHttpService, authService, privilegioHttpService, perfilHttpService, formBuilder, notifyMessage, changeRef) {
        this.acaoHttpService = acaoHttpService;
        this.recursoHttpService = recursoHttpService;
        this.possibilidadeHttpService = possibilidadeHttpService;
        this.usuarioHttpService = usuarioHttpService;
        this.authService = authService;
        this.privilegioHttpService = privilegioHttpService;
        this.perfilHttpService = perfilHttpService;
        this.formBuilder = formBuilder;
        this.notifyMessage = notifyMessage;
        this.changeRef = changeRef;
        this.possibilidades = [];
        this.privilegios = [];
        this.saveProgress = false;
        this.element_perfil = {
            name: "perfil",
            label: "Perfil",
            type: "select",
            required: true,
            value: '',
            options: [],
            validators: []
        };
        this.element_recurso = {
            name: "recurso",
            label: "Recurso",
            type: "select",
            required: true,
            value: '',
            options: [],
            validators: []
        };
        this.element_acao = {
            name: "acao",
            label: "Ação",
            type: "select",
            required: true,
            value: '',
            options: [],
            validators: []
        };
        this.searchParams = {
            filter: [
                {
                    type: 'andx',
                    conditions: [],
                    where: 'and'
                }
            ]
        };
        this.isAdmin = false;
        this.defineFormulario();
        this.loadPerfis();
        this.loadRecursos();
        this.loadPossibilidades();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isAdmin = this.authService.isAdmin();
            this.changeRef.detectChanges();
        });
    }
    defineFormulario() {
        this.form = this.formBuilder.group({
            perfil: [null],
            recurso: [null],
            acao: [null]
        });
    }
    loadPerfis() {
        this.perfilHttpService.listAll().then((response) => {
            let perfis = response;
            for (let perfil of perfis) {
                this.element_perfil.options.push({ id: perfil.id, text: perfil.nome });
                this.changeRef.detectChanges();
            }
        });
    }
    loadRecursos() {
        this.recursoHttpService.listAll().then((response) => {
            for (let recurso of response) {
                this.element_recurso.options.push({ id: recurso.id, text: recurso.nome });
                this.changeRef.detectChanges();
            }
        });
    }
    loadAcoes(recurso_id) {
        let searchParams = {
            "filter": [
                {
                    "field": "recurso",
                    "type": "eq",
                    "value": recurso_id
                }
            ],
            "order-by": []
        };
        this.possibilidadeHttpService.list(searchParams).subscribe((response) => {
            this.element_acao.options = [];
            for (let possibilidade of response._embedded.possibilidade) {
                this.element_acao.options.push({
                    id: possibilidade._embedded.acao.id, text: possibilidade._embedded.acao.nome
                });
            }
            this.changeRef.detectChanges();
        });
    }
    loadPossibilidades(page = 1) {
        if (!this.form.get('perfil').value)
            return;
        let searchparams = {
            "filter": [
                {
                    type: 'andx',
                    conditions: [],
                    where: 'and'
                }
            ],
            "order-by": [
                { 'type': 'field', 'field': 'recurso', 'direction': 'ASC' }
            ]
        };
        if (this.form.get('recurso').value > 0) //Se o filtro de recurso for acionado, qualquer possibilidade que não seja do escopo do recurso será ignorado
            searchparams.filter[0].conditions.push({ type: 'eq', field: 'recurso', value: this.form.get('recurso').value });
        if (this.form.get('acao').value > 0) //Se o filtro de ação for acionado, qualquer possibilidade que não seja do escopo da ação será ignorado
            searchparams.filter[0].conditions.push({ type: 'eq', field: 'acao', value: this.form.get('acao').value });
        if (searchparams.filter[0].conditions.length == 0)
            searchparams.filter = [];
        this.possibilidades = [];
        this.possibilidadeHttpService.listAll(searchparams).then((response) => {
            let recursoAnterior = null;
            for (let item of response) {
                let recurso = item._embedded.recurso;
                let acao = item._embedded.acao;
                if (recursoAnterior != recurso.id) {
                    recursoAnterior = recurso.id;
                    let possibilidade = {
                        recurso: recurso.id,
                        acoes: [],
                        _embedded: {
                            recurso: recurso
                        }
                    };
                    this.possibilidades.push(possibilidade);
                }
                let possibilidade = this.possibilidades.find(x => x.recurso == recurso.id);
                possibilidade.acoes.push(acao);
            }
            this.changeRef.detectChanges();
        });
    }
    loadPrivilegios(searchParams) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.privilegios = [];
            this.privilegioHttpService.listAll(searchParams).then((response) => {
                this.privilegios = response;
                this.changeRef.detectChanges();
            });
        });
    }
    changePerfil(element, id_perfil) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.filter(element, id_perfil);
        });
    }
    changeRecurso(element, id_recurso) {
        this.filter(element, id_recurso);
        this.form.get('acao').setValue(null);
        this.loadAcoes(id_recurso);
    }
    /**
     * Função que manipula uma consulta dos privilégios e faz a busca no banco atualizando as condições
     * @param elemento
     * @param valor
     */
    filter(elemento, valor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Setando o valor no elemento do formulario e no atributo valor do elemento
            this.form.get(elemento.name).setValue(valor);
            elemento.value = valor;
            // Buscar as condições da variável que define a query
            let conditions = this.searchParams.filter[0].conditions;
            // Se o campo que está sendo feito a pesquisa foi selecionado um valor nao nulo
            if (valor > 0) {
                // Tentar encontrar dentro da query a condição relacionada ao filtro selecionado
                let condition = conditions.find(x => x.field === elemento.name);
                // Se encontrar apenas atualiza o valor da condição
                if (condition !== undefined) {
                    condition.value = valor;
                }
                else // Senão adicione uma condição a query
                    conditions.push({
                        type: 'eq',
                        field: elemento.name,
                        value: valor
                    });
            }
            else { // Se foi selecionado uma opção nula, remover da query a condição
                let i = conditions.findIndex(x => x.field === elemento.name);
                conditions.splice(i, 1);
            }
            if (!this.form.get('perfil').value)
                return;
            yield this.loadPrivilegios(this.searchParams);
            this.loadPossibilidades();
        });
    }
    save(recurso_id, acao_id) {
        this.inProgress(true);
        let searchParams = {
            "acao": acao_id,
            "recurso": recurso_id
        };
        if (this.form.get('perfil').value > 0)
            searchParams.perfil = this.form.get('perfil').value;
        this.privilegioHttpService.findBy(searchParams).subscribe((list) => {
            if (list.total_items > 0) {
                let item = list._embedded.privilegio[0];
                this.privilegioHttpService.destroy(item.id).subscribe(() => {
                    this.inProgress(false);
                }, error => {
                    console.log(error);
                    this.notifyMessage.error("Erro ao deletar o privilégio");
                    this.inProgress(false);
                });
            }
            else {
                let privilegio = {
                    acao: acao_id,
                    recurso: recurso_id
                };
                if (this.form.get('perfil').value > 0)
                    privilegio.perfil = this.form.get('perfil').value;
                this.privilegioHttpService.create(privilegio).subscribe((response) => {
                    this.inProgress(false);
                }, error => {
                    console.log(error);
                    this.notifyMessage.error("Erro ao salvar o privilégio");
                    this.inProgress(false);
                });
            }
        }, error => {
            console.log(error);
            this.notifyMessage.error("Erro na verificação de privilégios");
            this.inProgress(false);
        });
    }
    inProgress(progress) {
        this.saveProgress = progress;
        this.changeRef.detectChanges();
    }
    isChecked(recurso_id, acao_id) {
        if (this.form.get('perfil').value && this.privilegios !== undefined) {
            return (this.privilegios.find(x => x._embedded.recurso.id == recurso_id && x._embedded.acao.id === acao_id) !== undefined) ? true : false;
        }
        else {
            return false;
        }
    }
};
PanelPrivilegioComponent.ctorParameters = () => [
    { type: _services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__["AcaoHttpService"] },
    { type: _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"] },
    { type: _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"] },
    { type: _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__["PrivilegioHttpService"] },
    { type: _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__["PerfilHttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__["NotifyMessageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PanelPrivilegioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'panel-privilegio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panel-privilegio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panel-privilegio.component.css */ "./src/app/features/admin/acl/panel-autorizacao/panel-privilegio/panel-privilegio.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_acl_acao_http_service__WEBPACK_IMPORTED_MODULE_3__["AcaoHttpService"],
        _services_http_acl_recurso_http_service__WEBPACK_IMPORTED_MODULE_4__["RecursoHttpService"],
        _services_http_acl_possibilidade_http_service__WEBPACK_IMPORTED_MODULE_5__["PossibilidadeHttpService"],
        _services_http_cadastro_usuario_http_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioHttpService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        _services_http_acl_privilegio_http_service__WEBPACK_IMPORTED_MODULE_7__["PrivilegioHttpService"],
        _services_http_acl_perfil_http_service__WEBPACK_IMPORTED_MODULE_8__["PerfilHttpService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_notify_message_service__WEBPACK_IMPORTED_MODULE_9__["NotifyMessageService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PanelPrivilegioComponent);



/***/ })

}]);
//# sourceMappingURL=panel-autorizacao-panel-autorizacao-module-es2015.js.map